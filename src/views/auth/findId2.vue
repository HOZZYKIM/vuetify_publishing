<template lang="">
  <v-container>
    <v-card class="pa-0 elevation-0">
      <v-card-subtitle class="pa-0 py-5 md-txt">
        이메일로 전송된 인증번호 입력 후 일치시 <br>아이디 전체를 확인하실 수 있습니다.
      </v-card-subtitle>
      <v-row>
        <v-col cols="12">
          <div class="d-flex">
            <v-text-field
              label="이메일 인증번호"
              hint="인증번호를 입력하세요"
              persistent-hint
              clearable
              class=" pt-0 pr-1"
            />
            <v-btn
              v-if="!userInfo"
              color="#FD7B54"
              dark
              depressed
              @click="[userInfo = true,noData()]"
            >
              인증하기
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <v-card
            v-if="userInfo"
            class="mx-auto elevation-0"
            align="center"
          >
            <v-list-item
              three-line
              style="background:#F6F7F9;"
              class="mb-5"
            >
              <v-list-item-content align="center">
                <v-list-item-title class="lg-txt my-2">
                  이메일 인증이 완료되었습니다.<br>
                  검색된 아이디 결과입니다.
                </v-list-item-title>
                <v-list-item-subtitle class="lg-txt fc-black">
                  adfythf
                </v-list-item-subtitle>
                <p class="md-txt l-grey">
                  (가입일 : yyyy-mm-dd )
                </p>
              </v-list-item-content>
            </v-list-item>
            <v-btn
              color="#FD7B54"
              block
              large
              depressed
              dark
              x-large
              @click="$router.push('/auth/login')"
            >
              로그인 하기
            </v-btn>

            <v-breadcrumbs
              :items="items"
              divider="|"
              class="px-0"
            >
              <template v-slot:item="{ item }">
                <v-breadcrumbs-item
                  :href="item.href"
                  :disabled="item.disabled"
                >
                  {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'FindId2',
  data(){
    return{
      userInfo: false,
      items: [
        {
          text: '비밀번호 찾기',
          disabled: false,
          href: '/auth/find-password',
        },
        {
          text: '회원가입',
          disabled: false,
          href: '/auth/agree-terms',
        },
      ],
    }
  },
  methods: {
      noData () {
        alert('이메일 인증번호가 일치하지 않습니다.')
      },

    },
}
</script>
<style lang="">

</style>
