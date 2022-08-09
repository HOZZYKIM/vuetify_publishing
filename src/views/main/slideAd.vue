<template lang="">
  <v-card class="section ma-0 pa-0">
    <v-carousel
      v-model="model"
      outlined
      hide-delimiters
      hide-delimiter-background
      cycle
      height="auto"
      :show-arrows="false"
      class="ad-slide"
      @change="crsl_cnt = $event + 1"
    >
      <v-carousel-item
        v-for="(item,idx) in items"
        :key="idx"
        :src="item.src"
        @click="$router.push({ name: 'ProductDetail' })"
      >
        <v-sheet
          :item="item"
          height="100%"
          tile
        />
      </v-carousel-item>
      <div
        class="white--text rounded-pill black text-no-wrap px-3 py-1 text-body-2"
        rounded
        small
        style="position: absolute; right: 25px; bottom: 20px"
      >
        {{ crsl_cnt }} / {{ items.length }}
      </div>
    </v-carousel>
  </v-card>
</template>
<script>

//  import ScrollTopBtnCmp from '@/components/ScrollTopBtnCmp.vue';
  export default {
    name: "SlideAd",
    // components: {
    //   ScrollTopBtnCmp,
    // },
    data() {
        return {
            crsl_cnt: 1,
            model: null,
            items: [
                {
                    src: "//dliveimg.kbnc.co.kr/shop/upload/848/20220630211942292.png",
                },
                {
                    src: "//dliveimg.kbnc.co.kr/shop/upload/787/20220715173742991.png",
                },
            ],
        };
    },
};
</script>
<style lang="">

</style>
