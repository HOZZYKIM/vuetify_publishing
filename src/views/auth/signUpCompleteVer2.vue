<template>
  <v-container>
    <v-card class="pa-0 elevation-0">
      <v-card-tite class="text-h4 pl-0">
        회원가입 신청이 <br> 완료되었습니다
      </v-card-tite>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        승인 처리는 영업일을 기준 1일 이내에 완료되며,<br>
        회원가입 완료 안내 메일이 발송됩니다.<br>
        회원가입 완료 후 서비스를 이용하실 수 있습니다.<br>
        감사합니다.
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
  name: 'SignUpCompleteVer2',
  data(){
  }
}
</script>
<style>
.v-card.v-sheet.theme--light{box-shadow: none !important;}
.theme--light.v-card > .v-card__text, .theme--light.v-card .v-card__subtitle{color:#747474 !Important;}
</style>
