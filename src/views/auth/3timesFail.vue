<template lang="">
  <v-container>
    <v-card class="pa-0 elevation-0">
      <!-- <v-card-tite class="text-h3">
        비밀번호 <br> 재설정
      </v-card-tite> -->
      <v-card-subtitle class="pa-0 py-5 md-txt">
        비밀번호를 3회 연속 잘못 입력하셨습니다. <br>
        이메일로 전송된 인증번호 입력 후 일치 시<br>
        비밀번호를 다시 설정할 수 있습니다.
      </v-card-subtitle>

      <div class="d-flex">
        <v-text-field
          label="인증번호 입력"
          clearable
          hide-details
          class=" pt-0 pr-1"
        />
        <v-btn
          color="#FD7B54"
          dark
          depressed
          @click="[$router.push('/auth/3times-fail2'),noData()]"
        >
          인증하기
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: '3timesFail',
  methods: {
      noData () {
        alert('이메일 인증번호가 일치하지 않습니다.')
      },

    },
}
</script>
<style lang="">

</style>
