<template lang="">
  <v-card
    class="mx-auto prd-list grid-2"
  >
    <v-card
      v-for="head in heads"
      :key="head.index"
      class="elevation-0"
    >
      <v-card-subtitle
        class="d-grey sm-txt py-0 px-1"
        align="left"
      >
        {{ head.subtit }}
      </v-card-subtitle>
      <v-card-title
        class="px-0 pt-1"
      >
        <h3 class="ma-0">
          {{ head.title }}
        </h3>
      </v-card-title>
    </v-card>

    <v-row class="pa-1">
      <v-col
        cols="12"
        class="pb-0"
      >
        <v-btn
          v-for="tag in tags"
          :key="tag"
          class="pa-0 ma-0 mr-1 elevation-0"
          color="white"
          @click="toggleOrder"
        >
          {{ tag }}
          <span
            v-if="up"
            class="sm-txt l-grey ma-0 pa-0 ml-1"
          >
            <v-icon left>mdi-chevron-down</v-icon>
          </span>
          <span
            v-else
            class="sm-txt l-grey ma-0 pa-0 ml-1"
          >
            <v-icon left>mdi-chevron-up</v-icon></span>
        </v-btn>
      </v-col>
      <v-col
        v-for="item in items"
        :key="item.index"
        cols="6"
      >
        <v-item-group
          multiple
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
        </v-item-group>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name : 'SearchResult',
  data () {
      return {
        up: true,
      heads : [
        {

          subtit: 342 + '건의',
          title: '검색결과가 있습니다!'
        }
      ],
      tags: [
        '카테고리',
        '브랜드',
        '인기순으로 보기',
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
  methods: {
      toggleOrder () {
        this.up = !this.up
      },

    },

  }
</script>
<style lang="">

</style>
