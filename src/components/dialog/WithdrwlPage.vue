<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card
      tile
      class="pa-0"
    >
      <v-toolbar
        flat
        light
        color="white"
        class="sub-tool-bar mb-3 elevation-3"
      >
        <v-toolbar-title class="font-weight-bold">
          회원탈퇴
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            light
            @click="$emit('close')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card class="px-4 elevation-0">
        <v-row>
          <v-col
            cols="12"
            class="pt-5 pb-0"
          >
            <v-list>
              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black lg-txt pl-0 pb-3">
                    회원탈퇴 안내
                  </v-list-item-title>
                  <div class="pb-4">
                    <h4 class="d-grey">
                      1. 개인정보보호 관리
                    </h4>
                    <ul class="pl-0 pt-3 d-grey">
                      <li>· 사업자등록증사본 파일은 pdf,jpg, png 형식의 3mb 이하로 등록 가능합니다.</li>
                      <li>· 직접 입력하실 경우 회원가입 후 관리자 승인 절차가 필요합니다.</li>
                      <li>
                        · 승인처리는 영업일을 기준으로 1일 이내에 완료되며 회원가입 완료 안내 메일이 발송됩니다.
                      </li>
                    </ul>
                  </div>
                  <div class="pb-4">
                    <h4 class="d-grey">
                      2. 개인정보 처리
                    </h4>
                    <ul class="pl-0 pt-3 d-grey">
                      <li>탈퇴 시 주문내역, 1:1 문의내역, 회원정보는 모두 삭제되며 복구 불가능합니다.</li>
                    </ul>
                  </div>
                  <div class="pb-4">
                    <h4 class="d-grey">
                      3. 회원탈퇴 불가
                    </h4>
                    <ul class="pl-0 pt-3 d-grey">
                      <li>
                        다음의 경우는 회원탈퇴가 불가합니다. 해당 사항이 있으신 경우는 아래 내역을 종료하신 후<br>
                        탈퇴 신청하세요. <br> 유효기간이 남은 발급 쿠폰 및 예약발송 대기중인 주문이 없어야 탈퇴가 가능하며,
                        철회 또는 취소로 인한 불이익은 회원님이 부담하셔야 함을 유의해 주시기 바랍니다.
                      </li>
                    </ul>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black lg-txt pl-0 py-3">
                    비밀번호 확인
                  </v-list-item-title>
                  <v-text-field
                    v-model="user_pw_chk"
                    placeholder="본인 확인을 위해 비밀번호를 입력해주세요"
                    type="password"
                    :rules="user_pw_rule2"
                    outlined
                    dense
                    maxlength="20"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black lg-txt pl-0 py-3">
                    탈퇴 사유
                  </v-list-item-title>
                  <v-select
                    :items="items"
                    label="탈퇴사유 선택"
                    dense
                    outlined
                  />
                  <v-textarea
                    label="직접 입력을 선택한 경우 입력해 주세요."
                    outlined
                    hide-details
                    style="width: 100%;"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col
            cols="12"
            class="pt-0 pb-7"
          >
            <v-divider />
            <v-checkbox
              class="my-7 l-grey"
              color="#fd7b54"
              :value="1"
              label="위 안내를 모두 확인하고 탈퇴에 동의합니다."
              hide-details
              @change="alert = true"
            />
            <v-btn
              color="#747474"
              block
              large
              depressed
              dark
              @click="[$router.push({ name: 'WithdrwlRsltPage' }),noData()]"
            >
              회원탈퇴
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <v-dialog
      v-model="alert"
      max-width="350"
    >
      <v-card>
        <v-card-text
          class="lg-txt py-7"
          align="center"
        >
          정말로 탈퇴하시겠습니까?
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="darken-1"
            text
            @click="alert = false"
          >
            취소
          </v-btn>

          <v-btn
            color="darken-1"
            text
            @click="alert = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
  export default {
    name: 'WithdrwlPage',
    props: {
      dialog: {
        type: Boolean,
        default: false,
      },
    },

    data(){
      return{
        alert:false,
        user_pw: '',
        user_pw_chk: '',
        user_pw_rule: [
          v => this.state === 'ins' ? !!v || '신규 비밀번호를 입력해주세요.' : true,
          v => !(v && v.length >= 20) || '비밀번호는 20자 이상 입력할 수 없습니다.',
          v => !(v && v.length <= 10) || '비밀번호는 10자 이하 입력할 수 없습니다.',
        ],
        user_pw_rule2: [
          v => this.state === 'ins' ? !!v || '신규 비밀번호 확인을 입력해주세요.' : true,
          v => v === this.user_pw || '비밀번호가 일치하지 않습니다.'
        ],
        items: ['탈퇴사유 1', '탈퇴사유 2', '탈퇴사유 3', '직접입력']
      }
    },
    methods: {
      noData() {
        alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요')
      },
      checked() {
        alert('정말로 탈퇴하시겠습니까?')
      }
    },
  };
</script>

<style>

</style>
