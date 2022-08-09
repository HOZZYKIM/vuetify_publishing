<template lang="ko">
<div>

  <v-row>
    <v-col>
      <v-card-title class="pa-0 ma-3 search-form">
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="프로모션명,상품명으로 검색할 수 있습니다!"
          single-line
          hide-details
          clearable
          rounded
          filled
          dense
          clear-icon="mdi-close-circle-outline"
          class=""
        />
      </v-card-title>
    </v-col>
  </v-row>

  <v-row>
    <v-col align = "left" justify-center >
      <div class="text-xs-center">
      <span class="pl-4 sm-txt l-grey">{{ items.length }} 건</span>
      </div>
    </v-col>
    <v-col align="right" class="pb-0 pr-3 pt-1">
      <v-btn
        color="white"
        class="elevation-0"
        @click="toggleOrder"
      >
      <span v-if="up" class="sm-txt l-grey">
        <v-icon left>mdi-chevron-down</v-icon>오름차순
      </span>
      <span v-else class="sm-txt l-grey">
        <v-icon left>mdi-chevron-up</v-icon>내림차순</span>
      </v-btn>
    </v-col>
  </v-row>

  <v-row class="mt-0">
    <v-col>
      <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      hide-default-header
      hide-default-footer
      class="mb-3 order-data-table"
      >
        <template v-slot:item="{ item }" class="wrap" >

          <tr class="table-top">
            <th>{{ item.date }}</th>
            <th class="text-right">
            <v-chip @click="$router.push('/my/mypage/order-detail')"
            color="#f5f5f5"
            class="sm-txt l-grey">
            주문 상세보기
            <v-icon>mdi-chevron-right</v-icon>
            </v-chip>
            </th>
          </tr>
          <tr>
            <th class="">프로모션명</th>
            <td class="text-right">{{ item.promotionName }}
            </td>
          </tr>
          <tr>
            <th class="">상품명</th>
            <td class="text-right">{{ item.productName }}</td>
          </tr>
          <tr>
            <th class="">발송건수</th>
            <td class="text-right">{{ item.sentNum }}</td>
          </tr>
          <tr>
            <th class="">발송(예약)일시</th>
            <td class="text-right">{{ item.sentDate }}</td>
          </tr>
          <tr class="table-last">
            <th class="">결제금액</th>
            <td class="text-right">{{ item.moneyPaid }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</div>
</template>

<script>
  export default {
    name: 'SearchTable',
    data () {
      return {
        up: true,
        sortBy: 'id',
        sortDesc: false,
        search: '',
        headers: [
          {

            value:'date',
            align: 'start',
            filterable: false,
            sortable: false,


          },
          { text: '프로모션명', value: 'promotionName' },
          { text: '상품 명', value: 'productName' },
          { text: '발송건수', value: 'sentNum' },
          { text: '발송(예약)일시', value: 'sentDate' },
          { text: '결제금액', value: 'moneyPaid' },
        ],
        items: [
          {
            id:1,
            date: '2022.07.21',
            promotionName: '임직원대상 크리스마스 선물1',
            productName: '스타벅스 기분 좋은 디저트 세트',
            sentNum: 6,
            sentDate: '2022 년 7월 21일 12:04:00',
            moneyPaid: '1000'+'원',
          },
          {
            id:2,
            date: '2022.07.14',
            promotionName: '디저트이벤트',
            productName: '이디야 기분 좋은 디저트 세트',
            sentNum: 6,
            sentDate: '2022 년 7월 21일 12:04:00',
            moneyPaid: '1000'+'원',
          },

        ],

      }
    },
    methods: {
      toggleOrder () {
        this.sortDesc = !this.sortDesc
        this.up = !this.up
      },

    },
  }
</script>
<style scoped>
</style>
