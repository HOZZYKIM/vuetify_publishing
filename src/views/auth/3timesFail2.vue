<template lang="">
  <v-container>
    <v-card class="pa-2 elevation-0">
      <v-card-tite class="text-h3">
        인증되었습니다
      </v-card-tite>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        고객님의 안전한 쇼핑을 위해 <br>비밀번호를 다시 설정해주세요.
      </v-card-subtitle>
      <v-text-field
        label="신규 비밀번호"
        single-line
        persistent-hint
        hint="*영문, 숫자, 특수문자 3종류를 조합하여 6자 이상 20자 이하"
      />
      <v-text-field
        label="신규 비밀번호 확인"
        single-line
      />
      <v-btn
        color="#FD7B54"
        width="100%"
        large
        depressed
        dark
        class="mt-4"
        @click="[$router.push('/auth/find-password4'),noData()]"
      >
        확인
      </v-btn>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: '3timesFail2',
   methods: {
      noData () {
        alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.')
      },

    },
}
</script>
<style lang="">

</style>
