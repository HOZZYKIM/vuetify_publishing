<template lang="">
  <v-container>
    <v-card class="elevation-0">
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
            label="비밀번호"
            single-line
            persistent-hint
            hint="비밀번호를 입력하세요"
          />
        </v-col>
        <v-col
          cols="5"
          class="pa-0 pl-3"
        >
          <v-checkbox
            v-model="checkbox"
            label="아이디 저장"
          />
        </v-col><v-col
          cols="5"
          class="pa-0"
        >
          <v-checkbox
            v-model="checkbox"
            label="자동로그인"
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
            @click="$router.push('/')"
          >
            로그인
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn
            color="#F5F5F5"
            width="100%"
            large
            depressed
            light
            x-large
            @click="$router.push({ name: 'AgreeTerms' })"
          >
            회원가입
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
  name: 'Login',
  data () {
      return {
        checkbox: true,
        items: [
        {
          text: '아이디 찾기',
          disabled: false,
          href: '/auth/find-id',
        },
        {
          text: '비밀번호 찾기',
          disabled: false,
          href: '/auth/find-password',
        },
        {
          text: '3번 틀렸을 시 (삭제예정)',
          disabled: false,
          href: '/auth/3times-fail',
        },
      ],
      }
    },
}
</script>
<style lang="">

</style>
