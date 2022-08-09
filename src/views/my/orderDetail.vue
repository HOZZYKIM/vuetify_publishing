<template lang="">
  <v-card class="elevation-0 pa-0 ma-3">
    <!-- 발급상세 내역 -->
    <v-container
      v-for="item in items"
      :key="item.name"
      class="order-detail"
    >
      <v-subheader
        class="pb-3 pl-0 sm-txt font-weight-light"
      >
        {{ item.date }} <span class="point">{{ item.num }}</span>
        <v-spacer />
        <span class="point">{{ item.result }}</span>
      </v-subheader>
      <v-row
        align="center"
        justify="center"
        class="prd-wrap pa-3"
      >
        <v-col
          cols="12"
          justify="center"
          class="pa-5 pt-2 pb-2"
        >
          <div class="prd-detail">
            <span
              class="img"
            >
              <img
                :src="item.ImgUrl"
                contain
                height="100%"
                style="max-width:120px; max-height:120px"
              >
            </span>
            <span class="prd-info">
              <span class="brand xs-txt">풀무원1</span>
              <span class="prd-name">md가 추천하는 꿀이 되는 상품모음2</span>
              <div class="">
                <span class="font-weight-black price text-h6">5,500</span>
                <span class="expire xs-txt">유효기간 {{ item.expire }}일</span>
              </div>
            </span>
          </div>
        </v-col>
        <v-col cols="12">
          <v-simple-table class="prd-table">
            <template v-slot:default>
              <tbody>
                <tr>
                  <th>
                    프로모션 명
                  </th>
                  <td>{{ item.productName }}</td>
                </tr>
                <tr>
                  <th>메세지 정보</th>
                  <td>
                    <p class="font-weight-black mb-0">
                      {{ item.msgTitle }}
                    </p>
                    {{ item.msgInfo }}
                  </td>
                </tr>
                <tr>
                  <th>발신자 정보</th>
                  <td>{{ item.senterInfo }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col
          cols="6"
          class="pa-0 pr-1"
        >
          <v-btn
            width="100%"
            color="#FD7B54"
            large
            dark
            depressed
          >
            발송형태 보기
          </v-btn>
        </v-col>
        <v-col
          cols="6"
          class="pa-0 pl-1"
        >
          <v-btn
            width="100%"
            color="#FD7B54"
            large
            dark
            depressed
          >
            수신자목록 보기
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- 쿠폰 발급 내역 -->
    <v-container
      class="pa-3 mt-15"
      style="background:#F5F6F8; border-radius:0;"
    >
      <v-row
        class="pa-2 pt-3"
        justify="center"
      >
        <v-subheader
          color="black"
          class="grey--text text--darken-4 font-weight-bold align-center"
          style="background:#F5F6F8;"
        >
          쿠폰 발급 내역
        </v-subheader>
        <v-col cols="12">
          <v-row
            v-for="subMenu in subMenus"
            :key="subMenu.id"
            no-gutters
          >
            <v-col
              v-for="(menu, index) in subMenu.menus"
              :key="menu.id"
              class="px-0"
            >
              <v-btn
                width="100%"
                height="100"
                tile
                class="elevation-0 my-menu-tab"
                style="background:#fff;"
                :style="
                  subMenu.menus.length - 1 === index
                    ? ''
                    : `border-right: 1px solid #F5F6F8`
                "
              >
                <v-row>
                  <v-col
                    cols="12"
                    class="pa-0 pt-1 sm-txt"
                  >
                    {{ menu.name }}
                  </v-col>
                  <v-col
                    cols="12"
                    class="pa-0 pt-1 point lg-txt font-weight-black"
                  >
                    {{ menu.number }}
                  </v-col>
                </v-row>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="clearfix">
              <span class="dafault-txt font-weight-black">발송예약일시</span> <span>2022.07.21 16:40:40</span>
              <v-btn
                class="elevation-0 pa-0 sm-txt fl-r"
                height="20"
                color="#F5F6F8"
              >
                결제취소
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="pa-3">
            <v-col
              cols="6"
              class="pa-0 pr-1"
            >
              <v-btn
                width="100%"
                color="#FD7B54"
                large
                dark
                depressed
              >
                쿠폰 재발송
              </v-btn>
            </v-col>
            <v-col
              cols="6"
              class="pa-0 pl-1"
            >
              <v-btn
                width="100%"
                color="black"
                large
                dark
                depressed
              >
                발급내역 다운로드
              </v-btn>
            </v-col>
            <p class="point sm-txt mt-2">
              *재발송 : 성공 건의 경우 유효기간이 남아있거나 사용 전인 경우만 3회까지 재발송 할 수 있습니다.
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- 결제 정보 -->
    <v-container class="pa-0 pt-5">
      <v-row>
        <v-subheader class="font-weight-black text-h6 fc-black pl-6">
          결제정보
        </v-subheader>
        <v-col cols="12">
          <v-card class="elevation-0">
            <v-simple-table class="order-info-table">
              <template v-for="(list) in lists">
                <tbody :key="list.title">
                  <tr>
                    <th>
                      결제수단
                    </th>
                    <td>{{ list.method }}</td>
                  </tr>
                  <tr class>
                    <th>
                      결제일시
                    </th>
                    <td>
                      {{ list.date }}
                    </td>
                  </tr>
                  <tr class="no-border">
                    <th>
                      상품가격
                    </th>
                    <td>
                      {{ list.price }}
                    </td>
                  </tr>
                  <tr class="no-border">
                    <th>
                      할인가격
                    </th>
                    <td>
                      {{ list.discount }}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      발송수량
                    </th>
                    <td>
                      {{ list.count }}
                    </td>
                  </tr>
                  <tr>
                    <th class="lg-txt font-weight-black">
                      결제금액
                    </th>
                    <td class="lg-txt font-weight-black fc-black">
                      {{ list.paidPrice }}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      환불수량
                    </th>
                    <td>
                      {{ list.refundCount }}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      환불금액
                    </th>
                    <td>
                      {{ list.refundPrice }}
                    </td>
                  </tr>
                  <tr>
                    <th class="xl-txt font-weight-bold point pa-5 pl-4">
                      최종결제금액
                    </th>
                    <td class="xl-txt font-weight-black point pa-5">
                      {{ list.totalPrice }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data () {

      return {
        items: [
          {
            id:1,
            ImgUrl: '//dliveimg.kbnc.co.kr/shop/upload/title/324/0000000001064211656526395363_title.png',
            date: '2022.07.21',
            promotionName: '임직원대상 크리스마스 선물1',
            productName: '스타벅스 기분 좋은 디저트 세트',
            sentNum: 6,
            sentDate: '2022 년 7월 21일 12:04:00',
            moneyPaid: '1000'+'원',
            msgTitle: '한국이컴 임직원 여러분',
            msgInfo:'한국이컴 임직원 여러분 임직원대상 크리스마스 선물 임직원대상 크리스마스 선물',
            senterInfo:'한국이컴',
            num:'123456',
            result:'부분성공',
            expire: 90,
            reservDate: '2022.07.21 16:40:39'
          },
        ],
        prdInfo : [
          {
            prdImgUrl: '//dliveimg.kbnc.co.kr/shop/upload/title/324/0000000001064211656526395363_title.png',
            prdBrand: '풀무원1',
            prdName:'md가 추천하는 꿀이 되는 상품모음2',
            prdDiscount:'45'+ '%',
            prdPrice:'5,500',
          }
        ],
        subMenus: [
            {
                id: "m1",
                menus: [
                    {
                        id: 1,
                        name: "전체",
                        number: "20",
                    },
                    {
                        id: 2,
                        name: "준비",
                        number: "2",
                    },
                    {
                        id: 3,
                        name: "처리중",
                        number: "1",
                    },
                    {
                        id: 4,
                        name: "성공",
                        number: "20",
                    },
                    {
                        id: 5,
                        name: "실패",
                        number: "2",
                    },
                ],
            },
        ],
        lists: [
        {
          method: '롯데카드',
          date: '2022-05-23 13:33',
          price: 4000,
          discount: 3375,
          count: 20,
          paidPrice: 1000000,
          refundCount: 2,
          refundPrice: 20000,
          totalPrice: 10000000
        }
      ],
      }
    },

}
</script>
<style>

</style>
