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
          이메일 수정
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
        <v-card-title
          class="text-h5 font-weight-medium justify-center"
          align="center"
        >
          변경할 이메일 주소를 입력하고 <br> 발송된 인증번호를 정확하게 입력해주세요.
        </v-card-title>
        <v-row>
          <v-col
            cols="12"
            class="pt-5"
          >
            <div class="d-flex">
              <v-text-field
                v-model="user_email"
                label="이메일"
                :rules="user_email_rule"
                outlined
                dense
                class="pr-1"
              />
              <v-btn
                color="#FD7B54"
                dark
                depressed
                height="40"
                @click="[expand = true, clickedBtn()]"
              >
                {{ btnMsg }}
              </v-btn>
            </div>
            <ul class="info-txt-wrap xs-txt pa-0 pb-5">
              <li>· 아이디, 비밀번호 찾기 시 이메일로 인증번호가 발송됩니다.</li>
              <li>· 인증번호는 메일 발송 후 60초 이내 입력해주세요.</li>
            </ul>
            <div
              v-if="expand"
              class="d-flex"
            >
              <v-text-field
                v-model="certif_num"
                label="이메일 인증번호"
                :rules="certif_num_rule"
                outlined
                dense
                class="pr-1"
              />
              <v-btn
                :style="btnStyle"
                dark
                depressed
                height="40"
                @click="[clickedBtn2(),resultAlert()]"
              >
                {{ btnCertif }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <div style="flex: 1 1 auto" />
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'EditMyEmailPage',
    props: {
      dialog: {
        type: Boolean,
        default: false,
      },
    },
    data(){
      return{
        expand: false,
        btnMsg : "인증",
        btnMsg2: "인증번호 재발송",
        btnCertif: "인증확인",
        btnCertif2: "인증완료",
        btnStyle: {
          backgroundColor : "#FD7B54",
          disabled: false
        },
        user_email: '',
        user_email_rule: [
          v => !!v || '이메일을 입력해주세요.',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '이메일 형식이 잘못 되었습니다.'
        ],
        certif_num:'',
        certif_num_rule: [
          v => !!v || '인증번호를 입력해주세요.',
          v => !!(v && /^[0-9]*$/.test(v)) || '숫자만 입력 가능합니다.'
        ]
      }
    },
    methods: {
        clickedBtn(){
          this.btnMsg = this.btnMsg2
        },
        clickedBtn2(){
          this.btnCertif = this.btnCertif2
          this.btnStyle.backgroundColor = "#ffb49e"
          this.disabled = true
        },
        resultAlert () {
        alert('인증되었습니다.')
      },
    },
  };
</script>

<style>

</style>
