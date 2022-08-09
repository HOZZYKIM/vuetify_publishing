<template>
  <!-- 인기브랜드 섹션 -->
  <v-card class="section elevation-0">
    <v-card-title class="font-weight-black text-h5">
      인기브랜드
    </v-card-title>
    <v-card-subtitle class="pb-0">
      새로 업데이트 된 신규상품 모음
    </v-card-subtitle>

    <v-sheet
      class="mx-auto"
      max-width="800"
    >
      <v-slide-group
        v-model="model"
        height="100%"
        class="prd-slide-wrap"
      >
        <v-slide-item
          class="brand-list brand-all"
          color="white"
        >
          <v-card
            width="60"
            justify="center"
            align="center"
          >
            <v-icon style="font-size:37px; padding-top:10px;">
              mdi-format-align-justify
            </v-icon>
          </v-card>
        </v-slide-item>
        <v-slide-item
          v-for="n in 20"
          :key="n"
          class="brand-list"
        >
          <v-card
            width="60"
            @click="$router.push({ name: 'ProductDetail' })"
          >
            <span class="img">
              <v-img
                src="//dliveimg.kbnc.co.kr/shop/upload/title/324/0000000001064211656526395363_title.png"
                contain
              />
            </span>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-card>
  <!--// 인기브랜드 섹션 -->
</template>
<script>
export default {
  name: 'PopularBrand',
  data() {

      return {
        model:null,
      };
    },

}
</script>
<style scoped>
.brand-list{border:1px solid #eee; border-radius:10px; margin: 20px 8px; overflow: hidden;}
.brand-list .img{width: 100%;}
</style>
