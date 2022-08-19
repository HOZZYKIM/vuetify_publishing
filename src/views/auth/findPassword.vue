<template lang="">
  <v-container>
    <v-card class="elevation-0">
      <v-card-title class="text-h3 pl-0">
        비밀번호 찾기
      </v-card-title>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        비밀번호는 암호화된 상태로저장되어<br>
        시스템 확인이 불가능하므로 <br>
        <strong class="point">이메일 인증 후 다시 설정할 수 있습니다.</strong>
      </v-card-subtitle>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="아이디"
            single-line
            persistent-hint
            hint="아이디를 입력하세요"
          />
        </v-col>
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
            block
            large
            depressed
            dark
            x-large
            @click="[$router.push({ name: 'FindPassword2' }),noData()]"
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
   name: 'FindPassword',
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
          href: '/auth/agree-terms',
        },
      ],
      }
    },
    methods: {
      noData () {
        alert('일치하는 회원정보가 없습니다.')
      },

    },

}
</script>
<style lang="">

</style>
