<template lang="">
  <v-footer
    padless
    class="bottom-footer mx-0"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        text
        rounded
        class="my-2 l-grey"
      >
        {{ link }}
      </v-btn>
      <v-col
        style="background:#F6F7F9;"
        class="lighten-2 py-4 text-center"
        cols="12"
      >
        <strong class="text-h7 d-grey">(주) 한국이컴</strong>
      </v-col>
      <p class="sm-txt l-grey">
        COPYRIGHT @ KECOM CORP. ALL RIGHT RESERVED
      </p>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name:'DefaultFooter',
    data: () => ({
      links: [
        '회원이용약관',
        '개인정보 처리방침',
      ],
    }),
  }
</script>
<style scoped>
</style>
