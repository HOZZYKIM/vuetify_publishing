<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        class="pa-1"
      >
        <v-list
          v-for="confirm in confirmAgrees"
          :key="confirm.conf_tit_id"
          class="rounded-lg"
        >
          <div class="terms-group-header">
            <v-list-item-title class="font-weight-medium">
              서비스 이용 동의 <span class="point"> (필수)</span>
            </v-list-item-title>
            <v-list-item-subtitle class="sm-txt">
              약관 및 개인정보 수집이용안내를 반드시 읽고 난 뒤 동의해 주세요.
            </v-list-item-subtitle>
          </div>
          <div>
            <v-list class="pt-0">
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <v-checkbox
                    v-model="checkboxes"
                    class="mt-0 l-grey"
                    color="#fd7b54"
                    :value="1"
                    label="서비스 이용약관 및 개인정보 수집 및 이용동의에 모두 동의합니다."
                    hide-details
                    @click="parentCheck(1)"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <v-checkbox
                    v-model="checkboxes_child"
                    :value="1"
                    class="mt-0 pt-0"
                    color="#fd7b54"
                    label="서비스 이용약관 동의"
                    hide-details
                    @click="childCheck(1)"
                  />
                </v-list-item-content>

                <v-list-item-action
                  class="ma-2"
                  @click="showTerms(1)"
                >
                  <v-chip
                    color="#F5F5F5"
                    class="d-grey"
                  >
                    내용보기<v-icon>mdi-chevron-right</v-icon>
                  </v-chip>
                </v-list-item-action>
              </v-list-item>
              <v-divider />
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <v-checkbox
                    v-model="checkboxes_child"
                    :value="2"
                    class="mt-0 pt-0"
                    color="#fd7b54"
                    label="개인정보 수집 및 이용 동의"
                    hide-details
                    @click="childCheck(2)"
                  />
                </v-list-item-content>
                <v-list-item-action
                  class="ma-2"
                  @click="showTerms(2)"
                >
                  <v-chip
                    color="#F5F5F5"
                    class="d-grey"
                  >
                    내용보기<v-icon>mdi-chevron-right</v-icon>
                  </v-chip>
                </v-list-item-action>
              </v-list-item>
              <v-divider />
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <p class="info-txt">
                    귀하는 동의 거부 권리가 있으며, 동의 거부 시 서비스 가입이 불가합니다.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div class="terms-group-header">
            <v-list-item-title class="font-weight-medium">
              광고성 정보 전송을 위한<br>개인정보 수집 이용 동의<span class="point"> (선택)</span>
            </v-list-item-title>
            <v-list-item-subtitle class="sm-txt">
              약관 및 개인정보 수집이용안내를 반드시 읽고 난 뒤 동의해 주세요.
            </v-list-item-subtitle>
          </div>
          <div>
            <v-list class="pt-0">
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <v-checkbox
                    v-model="checkboxes"
                    class="mt-0"
                    color="#fd7b54"
                    :value="2"
                    label="이벤트/쇼핑 혜택 수신 모두 동의합니다."
                    hide-details
                    @click="parentCheck(2)"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <v-checkbox
                    v-model="checkboxes_child2"
                    :value="1"
                    class="mt-0 pt-0"
                    color="#fd7b54"
                    label="이벤트/쇼핑 혜택 SMS 수신 동의"
                    hide-details
                    @click="childCheck(1)"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <v-checkbox
                    v-model="checkboxes_child2"
                    :value="2"
                    class="mt-0 pt-0"
                    color="#fd7b54"
                    label="이벤트/쇼핑 혜택 이메일 수신 동의"
                    hide-details
                    @click="childCheck(2)"
                  />
                  <p class="info-txt">
                    거래관련, 주요 회원 정책 변경 관련 주요 공지는 별도 동의없이 SMS/이메일이 발송됩니다.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item :ripple="false">
                <v-list-item-content>
                  <p class="info-txt">
                    귀하는 동의 거부 권리가 있으며, 동의 거부를 하셔도 본 서비스 가입 및 이용이 가능합니다.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          type="submit"
          depressed
          outlined
          color="#747474"
          width="100%"
          large
          light
          @click="$router.go(-1)"
        >
          이전
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          type="submit"
          depressed
          color="#FD7B54"
          width="100%"
          large
          dark
          @click="$router.push({ name: 'SignUp' })"
        >
          다음
        </v-btn>
      </v-col>
    </v-row>

    <TermsDialog
      :dialog="dialog"
      :terms-number="termsNumber"
      @agree="agreeTerms"
      @close="dialog = false"
    />
  </v-container>
</template>
<script>
  import TermsDialog from '@/components/dialog/TermsDialog.vue';
  export default {
    name: 'AgreeTerms',
    components: {
      TermsDialog,
    },
    data() {
      return {
        dialog: false,
        termsNumber: 0,

        checkboxes: [],
        checkboxes_child: [],
        checkboxes_child2: [],
        terms: [
          {
            id: 1,
            isConfirm: false,
            content: '약관내용1',
          },
          {
            id: 2,
            isConfirm: false,
            content: '약관내용2',
          },
          {
            id: 3,
            isConfirm: false,
            content: '약관내용3',
          },
        ],
        confirmAgrees: [
          {
            conf_tit_id: 1,
            title: '서비스약관',
            required: true,
            conf_list: [
              {
                conf_sub_id: 1,
                title:
                  '만 14세 이상입니다. (만 14세 미만은 회원가입이 제한됩니다.)',
                hasMoreView: false,
              },
              {
                conf_sub_id: 2,
                title: '이용약관 동의',
                hasMoreView: true,
              },
              {
                conf_sub_id: 3,
                title: '개인정보 수집 및 이용 동의서',
                hasMoreView: true,
              },
            ],
          },
        ],
      };
    },

    methods: {
      showTerms(termsNumber) {
        this.termsNumber = termsNumber;
        this.dialog = true;
      },
      agreeTerms(n) {
        this.dialog = false;
        this.checkboxes.push(n);
        console.log(n);
        this.parentCheck(n);
      },
      childCheck(n) {
        console.log(n);
        if (this.checkboxes_child.length === 2) {
          this.checkboxes.push(1);
        } else {
          this.checkboxes = this.checkboxes.filter((e) => e !== 1);
        }
        if (this.checkboxes_child2.length === 2) {
          this.checkboxes.push(2);
        } else {
          this.checkboxes = this.checkboxes.filter((e) => e !== 2);
        }
      },
      parentCheck(n) {
        if (n === 1) {
          if (this.checkboxes.includes(n)) {
            this.checkboxes_child = [];
            this.checkboxes_child = [1, 2];
          } else {
            this.checkboxes_child = [];
          }
        }else{
          if (this.checkboxes.includes(n)) {
            this.checkboxes_child2 = [];
            this.checkboxes_child2 = [1, 2];
          } else {
            this.checkboxes_child2 = [];
          }
        }
      },
    },
  };
</script>
<style scoped>
  .terms-group-header{padding-left: 7px; margin: 20px 0 10px;}
  .v-list-item__title{font-size:19px; letter-spacing: -2px; margin-bottom: 5px;}
  .v-list-item{padding: 0;}
  .v-list-item__content{padding: 12px;}
  .v-list-item__content .info-txt{color: #747474; font-size: 12px; line-height: 18px;}
.theme--light.v-label{font-size: 13px; color:#222 !important;}
  .point{color: #fd7b54;}
</style>
