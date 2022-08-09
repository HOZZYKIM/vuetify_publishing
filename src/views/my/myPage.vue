<template>
  <div class="lighten bg-grey mt-3">
    <v-list class="py-3 pt-0 pl-1">
      <v-list-item
        ripple
        @click="$router.push({ name: 'MyInfo' })"
      >
        <template>
          <v-avatar
            color="#FD7B54"
            class="mr-3"
            width="40"
          >
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="lg-txt font-weight-bold">
              한국이컴 님
            </v-list-item-title>
            <v-list-item-subtitle>abc@koreaecom.co.kr</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
    <!-- 서브메뉴 -->

    <v-card class="ma-5 mt-0 mb-10 elevation-0">
      <v-subheader
        class="pl-0 lg-txt font-weight-bold fc-black"
        style="background:#F5F6F8;"
      >
        주문현황 <span class="sm-txt ml-1"> (최근 3개월)</span>
        <v-spacer />
        <v-btn
          color="#F5F6F8"
          class="elevation-0 pr-0"
        >
          <v-icon
            color="#B7BEC6"
            class="xl-txt"
          >
            mdi-help-circle-outline
          </v-icon>
        </v-btn>
      </v-subheader>
      <v-row
        v-for="subMenu in subMenus"
        :key="subMenu.id"
        no-gutters
      >
        <v-col
          v-for="(menu) in subMenu.menus"
          :key="menu.id"
          class="px-0"
          cols="4"
        >
          <v-btn
            width="100%"
            height="80"
            color="white"
            tile
            class="elevation-0 my-menu-tab"
          >
            <v-row>
              <v-col
                cols="12"
                class="pa-0 pt-1 font-weight-bold"
              >
                {{ menu.name }}
              </v-col>
              <v-col
                cols="12"
                class="pa-0 pt-1 lg-txt font-weight-bold point"
              >
                {{ menu.number }}
              </v-col>
            </v-row>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- 기타메뉴 -->
    <v-card class="elevation-0 pt-3">
      <v-subheader class="pl-6 sm-txt font-weight-bold">
        주문내역
      </v-subheader>
      <v-row class="mt-0">
        <v-col
          class="pa-0"
        >
          <v-list
            v-for="item in others"
            :key="item.id"
            dense
            class="pl-0 py-1"
          >
            <v-list-item
              ripple
              @click="$router.push(item.link)"
            >
              <template>
                <v-list-item-content>
                  <v-list-item-title class="pl-5 lg-txt">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({

        profiles: [
            { name: "한국이컴", email: "abc@koreaecom.co.kr" }
        ],
        others: [
            { id: 1, title: "주문/발급 내역", link:'/my/mypage/order-history'},
            { id: 2, title: "취소/환불 내역", link:'/my/mypage/cancel-history'},
            { id: 3, title: "찜 목록", link:'/my/mypage/liked-products'},
            { id: 4, title: "메시지 관리", link:'/my/mypage/manage-messages'},
            { id: 5, title: "발신번호 관리", link:'/my/mypage/manage-numbers'},
        ],
        subMenus: [
            {
                id: "m1",
                menus: [
                    {
                        id: 1,
                        name: "주문성공",
                        number: "20",
                    },
                    {
                        id: 2,
                        name: "부분성공",
                        number: "2",
                    },
                    {
                        id: 3,
                        name: "처리중",
                        number: "1",
                    },
                ],
            },
            {
                id: "m2",
                menus: [
                    {
                        id: 4,
                        name: "준비",
                        number: "1",
                    },
                    {
                        id: 5,
                        name: "실패",
                        number: "0",
                    },
                    {
                        id: 6,
                        name: "취소",
                        number: "3",
                    },
                ],
            },
        ],
    }),
};
</script>

<style>
.theme--light.v-btn.v-btn--has-bg{background: #fff;}
.my-menu-tab:nth-child(-n+3){border-bottom: 1px solid #f5f5f5;}
</style>
