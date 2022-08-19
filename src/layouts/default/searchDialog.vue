<template lang="">
  <v-dialog
    v-model="dialog"
    persistent
    transition="dialog-bottom-transition"
    content-class="search-dialog"
  >
    <v-card class="main-search-dialog elevation-0">
      <v-toolbar
        class="elevation-0"
        light
      >
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            light
            @click="$emit('close')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container class="elevation-0 ma-0 pa-0">
        <v-row
          class="pt-0"
        >
          <v-col
            cols="12"
            justify="center"
            align="center"
            class="pa-0 pt-0"
            style="background:#f5f5f5;"
          >
            <v-toolbar
              color="#f5f5f5"
              class="pa-0 px-2"
              light
              flat
            >
              <v-chip
                to="/search"
                class=""
              >
                <v-icon class="fc-black">
                  mdi-magnify
                </v-icon>
              </v-chip>
              <v-spacer />

              <v-btn
                class="pa-0 ma-0 elevation-0"
                color="#f5f5f5"
                to="/auth/login"
              >
                <v-icon>
                  mdi-login
                </v-icon>
              </v-btn>
              <v-btn
                class="pa-0 ma-0 elevation-0"
                color="#f5f5f5"
              >
                <v-icon>
                  mdi-account-plus-outline
                </v-icon>
              </v-btn>
            </v-toolbar>

            <v-tabs
              grow
              class="classify-tab"
            >
              <v-tab>
                카테고리
              </v-tab>
              <v-tab>브랜드</v-tab>
              <v-tab>가격대</v-tab>

              <v-tab-item>
                <v-card
                  flat
                  class="tab-cont category"
                >
                  <v-list
                    dense
                    class="ma-0 pa-0"
                  >
                    <v-list-item-group
                      v-model="selectedItem"
                      color="primary"
                      class="clearfix"
                    >
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                      >
                        <v-list-item-content>
                          <v-list-item-title v-text="item.text" />
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                  <v-card
                    class="tab-footer"
                    justify="center"
                  >
                    <v-card-title>
                      카테고리 더보기
                      <v-icon
                        color="#FD7B54"
                        class="xxl-txt"
                      >
                        mdi-chevron-right
                      </v-icon>
                    </v-card-title>
                  </v-card>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card
                  flat
                  class="tab-cont brand"
                >
                  <v-list
                    dense
                    class="ma-0 pa-0"
                  >
                    <v-list-item-group
                      color="primary"
                      class="clearfix"
                    >
                      <v-list-item
                        v-for="(brand, i) in brands"
                        :key="i"
                      >
                        <v-list-item-content>
                          <span class="img">
                            <v-img
                              :src="brand.url"
                              contain
                            />
                          </span>
                          <v-list-item-title v-text="brand.text" />
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>

                  <v-card
                    class="tab-footer"
                    justify="center"
                  >
                    <v-card-title>
                      브랜드 검색
                      <v-icon
                        color="#FD7B54"
                        class="xxl-txt"
                      >
                        mdi-magnify
                      </v-icon>
                    </v-card-title>
                  </v-card>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card
                  flat
                  class="tab-cont price"
                >
                  <v-chip-group
                    active-class="primary--text"
                    column
                    class="v-list pa-3"
                  >
                    <v-chip
                      v-for="tag in tags"
                      :key="tag"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                </v-card>
              </v-tab-item>
            </v-tabs>

            <v-card
              class="search-dialog-footer"
              tile
            >
              <v-list-item
                two-line
                class="pa-0 ma-0"
              >
                <v-list-item-content
                  class="pl-5"
                  align="left"
                >
                  <v-list-item-title>꿀콘발송 방법</v-list-item-title>
                  <v-list-item-subtitle class="fc-white">
                    발송방법 안내
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name:'SearchDialog',
  props: {
      dialog: {
        type: Boolean,
        default: false,
      },
    },
     data () {
       return {
      selectedItem: 1,
      items: [
        { text: '전체보기', link: '/' },
        { text: '베이커리/떡/도넛', link: '/' },
        { text: '카페', link: '/' },
        { text: '아이스크림', link: '/' },
        { text: '상품권', link: '/' },
        { text: '편의점', link: '/' },
        { text: '햄버거', link: '/' },
        { text: '피자', link: '/' },
        { text: '치킨', link: '/' },
      ],
      brands: [
        { text: '스타벅스', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '이디야', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '뺵다방', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '베스킨라빈스', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '탐앤탐스', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '투썸플레이스', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '버거킹', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '맥도날드', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
        { text: '비비큐', url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png', },
      ],
      tags: [
        '전체보기',
        '1만원 미만',
        '1~2만원',
        '3~4만원',
        '5만원 이상',
      ],
      }
    },
}
</script>
<style lang="">

</style>
