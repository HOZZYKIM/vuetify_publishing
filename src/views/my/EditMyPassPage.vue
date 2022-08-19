<template lang="">
  <v-container class="pa-0">
    <v-card class="pa-2 elevation-0">
      <v-card-title class="text-h5 font-weight-medium">
        비밀번호가 타인에게<br>노출되지 않도록 주의하시고,<br>
        개인정보 보호를 위해 주기적으로<br>변경하시는 것이 좋습니다.
      </v-card-title>
      <v-card-subtitle class="pa-0 py-5 sm-txt">
        신규 비밀번호를 설정해주세요.
      </v-card-subtitle>
      <v-row>
        <v-col
          cols="12"
          class="py-3"
        >
          <v-text-field
            v-model="user_pw"
            label="비밀번호"
            type="password"
            :rules="user_pw_rule"
            dense
            hint="* 영문,숫자,특수문자 3종류를 모두 조합하여 10자이상 20자 이하"
            persistent-hint
            maxlength="20"
          />
        </v-col>
        <v-col
          cols="12"
          class="py-3"
        >
          <v-text-field
            v-model="user_pw_chk"
            label="비밀번호 확인"
            type="password"
            :rules="user_pw_rule2"
            dense
            maxlength="20"
          />
        </v-col>
      </v-row>
      <v-btn
        color="#FD7B54"
        width="100%"
        large
        depressed
        dark
        class="mt-4"
      >
        확인
      </v-btn>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'EditMyPassPage',
  data(){
    return{
        user_pw: '',
        user_pw_chk: '',
        user_pw_rule: [
          v => this.state === 'ins' ? !!v || '신규 비밀번호를 입력해주세요.' : true,
          v => !(v && v.length >= 20) || '비밀번호는 20자 이상 입력할 수 없습니다.',
          v => !(v && v.length <= 10) || '비밀번호는 10자 이하 입력할 수 없습니다.',
        ],
        user_pw_rule2: [
          v => this.state === 'ins' ? !!v || '신규 비밀번호 확인을 입력해주세요.' : true,
          v => v === this.user_pw || '비밀번호가 일치하지 않습니다.'
        ],
    }
  },
}
</script>
<style lang="">

</style>
