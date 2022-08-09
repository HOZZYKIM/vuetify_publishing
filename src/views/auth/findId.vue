<template lang="">
  <v-container>
    <v-card class="pa-2 elevation-0">
      <v-card-title class="text-h3 pl-0">
        아이디 찾기
      </v-card-title>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        아이디를 찾기 위해 <br> 이름과 가입시 등록한 이메일을 입력해주세요.
      </v-card-subtitle>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="이름"
            single-line
            persistent-hint
            hint="이름을 입력하세요"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="이메일"
            single-line
            persistent-hint
            hint="이메일을 입력하세요"
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            v-if="!userInfo"
            color="#FD7B54"
            width="100%"
            depressed
            dark
            x-large
            @click="[userInfo = true,noData()]"
          >
            확인
          </v-btn>
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
                  회원님의 아이디를 찾았습니다.
                </v-list-item-title>
                <v-list-item-subtitle class="lg-txt fc-black">
                  ad***hf
                </v-list-item-subtitle>
                <p class="md-txt l-grey">
                  (가입일 : yyyy-mm-dd )
                </p>
              </v-list-item-content>
            </v-list-item>
            <p class="info-txt d-grey">
              아이디를 모두 확인하시려면<br>이메일인증 후 확인하실 수 있습니다.
            </p>
            <v-btn
              color="#FD7B54"
              width="100%"
              large
              depressed
              dark
              x-large
              @click="[$router.push('/auth/find-id2'),certifEmail()]"
            >
              이메일 인증 후 아이디 전체보기
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12">
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
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { userInfo } from 'os'

export default {
   name: 'FindId',
   data () {

      return {
        userInfo: false,
        items: [
        {
          text: '로그인',
          disabled: false,
          href: '/auth/login',
        },
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
        alert('일치하는 회원정보가 없습니다.')
      },
      certifEmail(){
        alert('이메일 abcd@abcd.co.kr로 인증번호가 발송되었습니다.')
      }

    },
}
</script>
<style lang="">

</style>
