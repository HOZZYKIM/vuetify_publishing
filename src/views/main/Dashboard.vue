<template>
  <v-carousel
    v-model="model"
    outlined
    hide-delimiters
    hide-delimiter-background
    cycle
    height="auto"
    :show-arrows="false"
    @change="crsl_cnt = $event + 1"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    />
    <div
      class="white--text rounded-pill black text-no-wrap px-3 py-1 text-body-2"
      rounded
      small
      style="position: absolute; right: 25px; bottom: 20px"
    >
      {{ crsl_cnt }} / {{ items.length }}
    </div>
  </v-carousel>
</template>
<script>

//  import ScrollTopBtnCmp from '@/components/ScrollTopBtnCmp.vue';
  export default {
    name: "Dashboard",
    // components: {
    //   ScrollTopBtnCmp,
    // },
    data() {
        return {
            crsl_cnt: 1,
            model: 0,
            items: [
                {
                    src: "//dliveimg.kbnc.co.kr/shop/upload/961/20220614192251667.jpg",
                },
                {
                    src: "//dliveimg.kbnc.co.kr/shop/upload/769/20220622193852914.jpg",
                },
                {
                    src: "//dliveimg.kbnc.co.kr/shop/upload/961/20220614192251667.jpg",
                },
                {
                    src: "//dliveimg.kbnc.co.kr/shop/upload/888/20220608192134353.jpg",
                },
            ],
        };
    },
};
</script>
<style scoped>
.v-card__title{font-weight: 700; font-size: 22px; letter-spacing: -3px;}
.v-sheet.v-card.section{box-shadow: 0 1px 4px rgb(0,0,0,10%);}

</style>
