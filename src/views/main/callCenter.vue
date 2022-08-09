<template lang="">
  <v-card class="section elevation-0 py-0">
    <v-list>
      <v-list-item class="notice py-2">
        <v-list-item-icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="xl-txt font-weight-black py-1">
            공지사항
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item
        class="faq py-2"
      >
        <v-list-item-icon>
          <v-icon>mdi-comment-processing-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="xl-txt font-weight-black py-1">
            F A Q
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item
        class="call-center py-2"
      >
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="xl-txt font-weight-black py-1">
            고객센터 <strong class="point">1644-5000</strong>
          </v-list-item-title>
          <span><strong>운영시간</strong> 09:00 ~ 18:00 (주말, 공휴일 휴무)</span>
          <span><strong>점심시간</strong> 12:00 ~ 13:00</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    }),
}
</script>
<style lang="">

</style>
