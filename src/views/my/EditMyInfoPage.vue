<template>
  <v-container class="signup-form">
    <!-- 회원 정보 입력 -->
    <v-card
      class="elevation-0 mt-5"
    >
      <v-row class="">
        <v-col cols="12">
          <v-simple-table class="order-info-table">
            <template>
              <tbody
                v-for="list in lists"
                :key="list.idx"
              >
                <tr>
                  <th scope="row">
                    아이디
                  </th>
                  <td>{{ list.id }}</td>
                </tr>
                <tr class>
                  <th>
                    비밀번호
                  </th>
                  <td>
                    <v-btn
                      depressed
                      dark
                      color="#FD7B54"
                      @click=" dialog1 = true"
                    >
                      재설정
                    </v-btn>
                  </td>
                </tr>
                <tr class="no-border">
                  <th>
                    사업자번호
                  </th>
                  <td>
                    {{ list.businessNum }}
                  </td>
                </tr>
                <tr class="no-border">
                  <th>
                    상호명
                  </th>
                  <td>
                    {{ list.businessName }}
                  </td>
                </tr>
                <tr>
                  <th>
                    사업자 구분
                  </th>
                  <td>
                    {{ list.businessType }}
                  </td>
                </tr>
                <tr>
                  <th>
                    대표자
                  </th>
                  <td>
                    {{ list.Owner }}
                  </td>
                </tr>
                <tr>
                  <th>
                    담당자명
                  </th>
                  <td
                    class="pl-0"
                  >
                    <v-text-field
                      v-model="user_nm"
                      label="담당자 명"
                      :rules="user_nm_rule"
                      outlined
                      dense
                      hide-details
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    휴대폰번호
                  </th>
                  <td
                    class="pl-0"
                  >
                    <v-text-field
                      value="01012345678"
                      outlined
                      hide-details
                      dense
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    이메일
                  </th>
                  <td
                    class="pl-0 clearfix"
                  >
                    <div
                      class="d-flex fl-r"
                      style="line-height:30px"
                    >
                      {{ list.email }}
                      <v-btn
                        depressed
                        dark
                        color="#FD7B54"
                        class="ml-2"
                        @click=" dialog2 = true"
                      >
                        재설정
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    직급
                  </th>
                  <td
                    class="pl-0"
                  >
                    <v-text-field
                      value="주임"
                      outlined
                      hide-details
                      dense
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    전화번호
                  </th>
                  <td
                    class="pl-0"
                  >
                    <v-text-field
                      value="070-1222-2334"
                      outlined
                      hide-details
                      dense
                    />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-10 elevation-0">
      <v-row>
        <v-col>
          <v-list-item-title class="py-2 pl-2 font-weight-black lg-txt">
            광고성 정보 전송을 위한<br>개인정보 수집 이용 동의<span class="point"> (선택)</span>
          </v-list-item-title>
          <p class="py-0 pl-2 md-txt d-grey">
            약관 및 개인정보 수집이용안내를 반드시 읽고 난 뒤 동의해 주세요.
          </p>

          <v-list class="py-0">
            <v-divider />
            <v-list-item
              :ripple="false"
              class="pl-0"
            >
              <v-list-item-content class="pl-2">
                <v-checkbox
                  :value="1"
                  class=""
                  color="#fd7b54"
                  label="이벤트/쇼핑 혜택 SMS 수신 동의"
                  hide-details
                />
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item
              :ripple="false"
              class="pl-0"
            >
              <v-list-item-content class="pl-2">
                <v-checkbox
                  :value="2"
                  class="mt-0"
                  color="#fd7b54"
                  label="이벤트/쇼핑 혜택 이메일 수신 동의"
                  hide-details
                />
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item :ripple="false">
              <v-list-item-content>
                <p class="info-txt d-grey">
                  거래관련, 주요 회원 정책 변경 관련 주요 공지는 별도 동의없이 SMS/이메일이 발송됩니다.
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="#FD7B54"
            block
            large
            depressed
            dark
            x-large
            @click="[$router.push({ name: 'EditMyInfoPage' }),noData()]"
          >
            수정
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-7 elevation-0">
      <v-row>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-simple-table>
            <template>
              <tbody
                v-for="list in lists"
                :key="list.idx"
              >
                <tr>
                  <th scope="row">
                    가입일
                  </th>
                  <td>{{ list.joinDate }}</td>
                </tr>
                <tr>
                  <th>
                    회원탈퇴
                  </th>
                  <td>
                    <v-btn
                      depressed
                      light
                      color="#f5f5f5"
                      class="ml-2"
                      @click=" dialog3 = true"
                    >
                      탈퇴하기
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
    <EditMyPassPage
      :dialog="dialog1"
      @close="dialog1 = false"
    />
    <EditMyEmailPage
      :dialog="dialog2"
      @close="dialog2 = false"
    />
    <WithdrwlPage
      :dialog="dialog3"
      @close="dialog3 = false"
    />
  </v-container>
</template>
<script>
import EditMyPassPage from '@/components/dialog/EditMyPassPage.vue';
import EditMyEmailPage from '@/components/dialog/EditMyEmailPage.vue';
import WithdrwlPage from '@/components/dialog/WithdrwlPage.vue';
  export default {
    name:'EditMyInfoPage',
    components: {
          EditMyPassPage,
          EditMyEmailPage,
          WithdrwlPage
        },
    data() {
      return {
        dialog1: false,
        dialog2: false,
        dialog3: false,
        lists: [
        {
          id: 'abcdefg',
          businessNum: '111-00-2133',
          businessName: '꿀콘비즈',
          businessType: '법인',
          Owner: '홍길동',
          email: 'abc@kbnc.co.kr',
          joinDate:'2022-06-22'
        }
      ],
      user_phone: '',
        user_phone_rule: [
          v => this.state === 'ins' ? !!v || '휴대폰번호를 입력해주세요.' : true,
          v => !!(v && /^[0-9]*$/.test(v)) || '숫자만 입력 가능합니다.'
        ],
      user_nm: '',
        user_nm_rule: [
          v => !!v || '담당자명을 입력해주세요.',
          v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '이름에는 특수문자를 사용할 수 없습니다.'
        ],
      };
    },
  };
</script>
<style>
</style>
