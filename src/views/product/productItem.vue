<template>
  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="prd-slide-wrap"
      show-arrow
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
        class="prd-list"
      >
        <v-card
          width="165"
          @click="$router.push({ name: 'ProductDetail' })"
        >
          <span class="img">
            <v-img
              :src="prdImgUrl"
              contain
              @click="toggle"
            />
            <v-btn
              icon
              dark
              color="#FF7B54"
            >
              <v-icon>
                {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
              </v-icon>
            </v-btn>
          </span>
          <v-card class="prd-info">
            <span class="brand">{{ prdBrand }}</span>
            <span class="prd-name">{{ prdName }}</span>
            <div class="">
              <span class="red--text discount">{{ prdDiscount }}</span>
              <span class="font-weight-bold price">{{ prdPrice }}</span>
            </div>
          </v-card>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  data() {
      return {
        model:null,
        prdImgUrl: '//dliveimg.kbnc.co.kr/shop/upload/title/324/0000000001064211656526395363_title.png',
        prdBrand: '풀무원1',
        prdName:'md가 추천하는 꿀이 되는 상품모음2',
        prdDiscount:'45'+ '%',
        prdPrice:'5,500',
      }
    },
}
</script>
<style>

</style>
