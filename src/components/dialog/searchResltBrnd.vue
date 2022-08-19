<template lang="">
  <v-dialog
    v-model="dialog"
    persistent
    transition="dialog-bottom-transition"
    content-class="modal-bottom modal-brand"
  >
    <v-card class="elevation-0">
      <v-toolbar
        class="elevation-0"
        light
        color="#fff"
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
      <v-container class="elevation-0 pa-0">
        <v-data-iterator
          :items="items"
          :search="search"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar
              class="elevation-1 pa-0"
              light
              color="#fff"
            >
              <v-btn
                depressed
                color="white"
                class="d-grey pl-0"
              >
                브랜드 전체보기
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
              <v-spacer />
              <v-text-field
                v-model="search"
                filled
                clearable
                rounded
                dense
                hide-details
                prepend-inner-icon="mdi-magnify"
              />
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-list
              dense
              class="ma-0 pa-0"
            >
              <v-list-item-group
                v-for="item in props.items"
                :key="item.name"
                color="primary"
              >
                <v-list-item>
                  <v-list-item-content>
                    <span class="img">
                      <v-img
                        :src="item.url"
                        contain
                      />
                    </span>
                    <v-list-item-title
                      align="center"
                      v-text="item.name"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </template>
        </v-data-iterator>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name:'SearchResltCate',
  props: {
      dialog: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        selectedItem: 1,
        search: '',
        keys: [
          'Name'
        ],
        items: [
          {
            name: '스타벅스',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
          {
            name: '이디야',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'},
          {
            name: '뺵다방',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'},
          {
            name: '베스킨라빈스',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
          {
            name: '탐앤탐스',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
          {
            name: '투썸플레이스',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
          {
            name: '버거킹',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
          {
            name: '맥도날드',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
          {
            name: '비비큐',
            url: '//dliveimg.kbnc.co.kr/images/mobile/mainleft/mypage_prod_000202.png'
          },
        ],
      }
    },
    computed: {
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
}
</script>
<style lang="">

</style>
