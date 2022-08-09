<template lang="">
  <v-container>
    <v-card class="pa-2 elevation-0">
      <v-card-tite class="text-h4">
        회원가입이 <br> 완료되었습니다
      </v-card-tite>
      <v-card-subtitle class="pa-0 pt-5 text-subtitle-1">
        로그인 후 서비스를 이용하실 수 있습니다.
      </v-card-subtitle>
      <v-btn
        class="mt-5"
        color="#FD7B54"
        width="100%"
        large
        @click="nextStep()"
      >
        <div class="text-subtitle-1 white--text">
          로그인
        </div>
      </v-btn>
    </v-card>
  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
