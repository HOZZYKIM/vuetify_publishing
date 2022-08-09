<template lang="">
  <v-container>
    <v-card class="pa-0 elevation-0">
      <!-- <v-card-tite class="text-h3">
        비밀번호 <br> 재설정
      </v-card-tite> -->
      <v-card-subtitle class="pa-0 py-5 md-txt">
        이메일로 전송된 인증번호 입력 후 일치시 <br>비밀번호를 다시 설정할 수 있습니다.
      </v-card-subtitle>

      <div class="d-flex">
        <v-text-field
          label="이메일 인증번호"
          hint="인증번호를 입력하세요"
          persistent-hint
          clearable
          class=" pt-0 pr-1"
        />
        <v-btn
          color="#FD7B54"
          dark
          depressed
          @click="[$router.push('/auth/find-password3'),noData()]"
        >
          인증하기
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'FindPassword2',
  methods: {
      noData () {
        alert('이메일 인증번호가 일치하지 않습니다.')
      },

    },
}
</script>
<style lang="">

</style>
