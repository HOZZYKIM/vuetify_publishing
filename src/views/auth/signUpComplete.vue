<template>
  <v-container>
    <v-card class="pa-2 elevation-0">
      <v-card-title class="text-h4 pl-0">
        회원가입이 <br> 완료되었습니다
      </v-card-title>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        로그인 후 서비스를 이용하실 수 있습니다.
      </v-card-subtitle>
      <v-btn
        color="#FD7B54"
        width="100%"
        large
        depressed
        dark
        to="/auth/login"
      >
        로그인
      </v-btn>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'SignUpComplete'
}
</script>
<style>

</style>
