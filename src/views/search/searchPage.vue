<template lang="">
  <v-card

    class="mx-auto prd-list grid-2"
  >
    <v-card
      v-for="head in heads"
      :key="head.index"
      class="elevation-0"
    >
      <v-card-title>
        <h3>{{ head.title }}</h3>
      </v-card-title>
      <v-card-subtitle
        class="d-grey sm-txt"
        align="center"
      >
        {{ head.subtit }}
      </v-card-subtitle>
    </v-card>

    <v-container class="pa-1">
      <v-item-group
        multiple
      >
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.index"
            cols="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="prd-item elevation-0"
                @click="$router.push({ name: 'ProductDetail' })"
              >
                <span class="img">
                  <v-img
                    :src="item.src"
                    width="100%"
                    class="text-right pa-2"
                    @click="toggle"
                  >
                    <v-btn
                      icon
                      dark
                      color="#FF7B54"
                    >
                      <v-icon>
                        {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                      </v-icon>
                    </v-btn>
                  </v-img>
                </span>
                <v-card-text class="prd-info px-0 py-1">
                  <span class="prd-brand l-grey">{{ item.brand }}</span>
                  <span class="prd-name fc-black py-1">{{ item.name }}</span>
                  <span class="point font-weight-black lg-txt discount">{{ item.discount }}</span>
                  <span class="font-weight-bold fc-black price">{{ item.price }}</span>
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

<script>
  export default {
  data () {
      return {
      heads : [
        {
          title: '꿀콘신상',
          subtit: '주간 가장 인기가 많은 상품 모음'
        }
      ],
      items: [
        {
          brand: '풀무원1',
          name:'md가 추천하는 꿀이 되는 상품모음2',
          discount:'45'+ '%',
          price:'5,500',
          src: '//dliveimg.kbnc.co.kr/shop/upload/title/345/0000000001255251656491654495_title.png'
        },
        {
          brand: '풀무원1',
          name:'md가 추천하는 꿀이 되는 상품모음2',
          discount:'45'+ '%',
          price:'5,500',
          src: '//dliveimg.kbnc.co.kr/shop/upload/title/071/0000000001279101656493414491_title.png'
        },
        {
          brand: '풀무원1',
          name:'md가 추천하는 꿀이 되는 상품모음2',
          discount:'45'+ '%',
          price:'5,500',
          src: '//dliveimg.kbnc.co.kr/shop/upload/title/640/0000000001279881656495449141_title.png'
        },
        {
          brand: '풀무원1',
          name:'md가 추천하는 꿀이 되는 상품모음2',
          discount:'45'+ '%',
          price:'5,500',
          src: '//dliveimg.kbnc.co.kr/shop/upload/title/071/0000000001279101656493414491_title.png'
        },
      ],
       }
  },
      // selected: [],

  }
</script>
<style lang="">

</style>
