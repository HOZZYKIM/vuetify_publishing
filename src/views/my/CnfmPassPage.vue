<template lang="">
  <v-container>
    <v-card class="pa-2 elevation-0">
      <v-card-title class="text-h4 pl-0">
        <span>
          개인정보를 안전하게<br> 보호하기 위해<br>
          <span class="point">비밀번호</span>를 <br>한번 더 입력해 주세요</span>
      </v-card-title>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        고객님의 정보 및 비밀번호를 수정할 수 있습니다.
      </v-card-subtitle>
      <v-row>
        <v-col cols="12">
          <span class="font-weight-black lg-txt">아이디 : abdjfshj</span>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="user_pw"
            label="비밀번호"
            type="password"
            :rules="user_pw_rule"
            outlined
            dense
            maxlength="20"
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
            @click="[$router.push({ name: 'EditMyInfoPage' }),noData()]"
          >
            확인
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
   name: 'CnfmPassPage',
   data () {
      return {
        state: 'ins',
        user_pw: '',
        user_pw_chk: '',
        user_pw_rule: [
          v => this.state === 'ins' ? !!v || '비밀번호를 입력해주세요.' : true,
        ],
      }
    },
    methods: {
      noData () {
        alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
      },

    },

}
</script>
<style lang="">

</style>
