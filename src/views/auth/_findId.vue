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
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="#FD7B54"
            width="100%"
            large
            depressed
            dark
            x-large
          >
            확인
          </v-btn>
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
export default {
   name: 'FindId',
   data () {
      return {
        checkbox: true,
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
          href: '/auth/signup-terms',
        },
      ],
      }
    },
}
</script>
<style lang="">

</style>
