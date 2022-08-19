<template>
  <v-container class="signup-form">
    <v-card
      v-if="toggle"
      class="elevation-0 pb-7"
    >
      <v-card-title class="font-weight-black pl-2 pb-3 mb-7">
        사업자 인증 (필수)
      </v-card-title>
      <v-row>
        <v-col
          cols="12"
          class="py-0"
        >
          <div class="d-flex">
            <v-text-field
              label="사업자등록번호"
              clearable
              hint="사업자등록번호를 입력하세요"
              class="pr-1"
              outlined
              dense
            />
            <v-btn
              color="#FD7B54"
              dark
              depressed
              height="40"
            >
              인증
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="py-0 pb-2"
        >
          <ul class="info-txt-wrap xs-txt pl-0 pb-4">
            <li>· 하나의 사업자 번호로 여러개의 계정생성이 가능합니다.</li>
            <li>· 사업자 인증은 나이스 신용정보를 통해서 처리되고 있습니다.</li>
            <li>
              · 나이스 신용정보에 기업정보가 없거나 불확실할 경우 인증이 불가할 수 있습니다.
              <a :href="link">나이스신용정보에 사업자 등록하기</a>
            </li>
          </ul>
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            label="상호명"
            clearable
            hint="상호명을 입력하세요"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            label="대표자명"
            clearable
            hint="대표자명을 입력하세요"
            outlined
            dense
          />
          <ul class="info-txt-wrap xs-txt pl-0 pb-5">
            <li class="mt-0">
              타인의 정보를 부정하게 사용하는 경우 그에 따른 법적 조치가 취해질 수 있습니다. (3년 이하의 징역 또는 1천만원 이하의 벌금)
            </li>
          </ul>
          <v-divider />
          <p
            class="pt-3 d-grey"
            align="center"
          >
            사업자등록번호 인증이 되지않을 경우 직접 입력해 주세요.
          </p>
          <v-btn
            color="#FD7B54"
            block
            depressed
            dark
            x-large
            @click="toggle = !toggle"
          >
            사업자등록번호 직접입력하기
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- 직접입력 -->
    <v-card
      v-if="!toggle"
      class="elevation-0 pb-7"
    >
      <v-card-title class="font-weight-black pl-2 pr-0 pb-3 mb-7">
        사업자 인증 (필수)
        <v-spacer />
        <v-btn
          color="#FD7B54"
          dark
          depressed
          @click=" toggle = !toggle"
        >
          <v-icon left>
            mdi-chevron-left
          </v-icon>
          인증으로 등록하기
        </v-btn>
      </v-card-title>
      <v-row>
        <v-col
          cols="12"
          class="my-0 py-0"
        >
          <v-text-field
            label="사업자등록번호"
            clearable
            hint="사업자등록번호를 입력하세요"
            class=" pt-0"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          class="mt-0 py-0"
        >
          <v-text-field
            label="상호명"
            clearable
            hint="상호명을 입력하세요"
            class=" py-0"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            label="대표자명"
            clearable
            hint="대표자명을 입력하세요"
            class=" py-0"
            outlined
            dense
          />

          <v-file-input
            label="사업자등록증사본 첨부하기"
            filled
            outlined
            dense
            hide-details
            prepend-icon="mdi-camera"
            class="pb-0"
          />
          <ul class="info-txt-wrap pl-0">
            <li>· 사업자등록증사본 파일은 pdf,jpg, png 형식의 3mb 이하로 등록 가능합니다.</li>
            <li>· 직접 입력하실 경우 회원가입 후 관리자 승인 절차가 필요합니다.</li>
            <li>
              · 승인처리는 영업일을 기준으로 1일 이내에 완료되며 회원가입 완료 안내 메일이 발송됩니다.
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card>


    <!-- 회원 정보 입력 -->
    <v-card
      class="elevation-0"
    >
      <v-card-title class="font-weight-black pl-2 pb-3 mb-7">
        회원정보 입력 (필수)
      </v-card-title>
      <v-row class="">
        <v-col
          cols="12"
          class="my-0 py-0"
        >
          <div class="d-flex">
            <v-text-field
              v-model="user_id"
              label="아이디"
              :rules="user_id_rule"

              outlined
              dense
              hint="* 영문 소문자, 숫자 포함 5자이상 20자이하"
              persistent-hint
              maxlength="20"
              class=" pt-0 pr-1"
            />
            <v-btn
              color="#FD7B54"
              dark
              depressed
              height="40"
            >
              중복확인
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            v-model="user_pw"
            label="비밀번호"
            type="password"
            :rules="user_pw_rule"

            outlined
            dense
            hint="* 영문,숫자,특수문자 3종류를 모두 조합하여 10자이상 20자 이하"
            persistent-hint
            maxlength="20"
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            v-model="user_pw_chk"
            label="비밀번호 확인"
            type="password"
            :rules="user_pw_rule2"

            outlined
            dense
            maxlength="20"
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            v-model="user_nm"
            label="담당자 명"
            :rules="user_nm_rule"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <div class="d-flex">
            <v-text-field
              v-model="user_email"
              label="이메일"
              :rules="user_email_rule"
              outlined
              dense
              hide-details
              class="pr-1"
            />
            <v-btn
              color="#FD7B54"
              dark
              depressed
              height="40"
              @click="[expand = true, clickedBtn()]"
            >
              {{ btnMsg }}
            </v-btn>
          </div>
          <ul class="info-txt-wrap xs-txt pa-0 pb-5">
            <li>· 아이디, 비밀번호 찾기 시 이메일로 인증번호가 발송됩니다.</li>
            <li>· 인증번호는 메일 발송 후 60초 이내 입력해주세요.</li>
          </ul>
          <div
            v-if="expand"
            class="d-flex"
          >
            <v-text-field
              v-model="certif_num"
              label="이메일 인증번호"
              :rules="certif_num_rule"
              outlined
              dense
              class="pr-1"
            />
            <v-btn
              :style="btnStyle"
              dark
              depressed
              height="40"
              @click="[clickedBtn2(),noData()]"
            >
              {{ btnCertif }}
            </v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            v-model="user_phone"
            label="핸드폰 번호"
            placeholder="휴대폰번호(-없이 입력해주세요)"
            :rules="user_phone_rule"
            outlined
            dense
          />
        </v-col>
      </v-row>
    </v-card>

    <!-- 회원 정보 입력 (선택) -->
    <v-card
      class="elevation-0 mt-3"
    >
      <v-card-title class="font-weight-black pl-2 pb-3 mb-7">
        회원정보 입력 (선택)
      </v-card-title>
      <v-row class="">
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            label="직급"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          class="py-0"
        >
          <v-text-field
            label="전화번호"
            outlined
            dense
          />
        </v-col>
      </v-row>
    </v-card>
    <v-btn
      color="#FD7B54"
      block
      depressed
      dark
      x-large
      @click="$router.push({ name: 'SignUpComplete' })"
    >
      회원가입
    </v-btn>
  </v-container>
</template>
<script>
  export default {
    name:'SignUp',
    data() {
      return {
        toggle : true,
        expand: false,
        btnMsg : "인증",
        btnMsg2: "인증번호 재발송",
        btnCertif: "인증확인",
        btnCertif2: "인증완료",
        btnStyle: {
          backgroundColor : "#FD7B54",
          disabled: false
        },

        link:"https://www.niceid.co.kr/comp/register/comp_guid.nc",
        state: 'ins',

        user_id: '',
        user_id_rule: [
          v => !!v || '아이디를 입력해주세요.',
          v => /^[a-zA-Z0-9]*$/.test(v) || '아이디는 영문 소문자, 숫자 포함 5자 이상 20자 이하로 입력해 주세요.',
          v => !( v && v.length >= 20) || '아이디는 20자 이상 입력할 수 없습니다.',
          v => !( v && v.length < 5) || '아이디는 영문 소문자, 숫자 포함 5자 이상 20자 이하로 입력해 주세요.'
        ],
        user_pw: '',
        user_pw_chk: '',
        user_pw_rule: [
          v => this.state === 'ins' ? !!v || '패스워드를 입력해주세요.' : true,
          v => !(v && v.length >= 20) || '패스워드는 20자 이상 입력할 수 없습니다.',
          v => !(v && v.length <= 10) || '패스워드는 10자 이하 입력할 수 없습니다.',
        ],
        user_pw_rule2: [
          v => this.state === 'ins' ? !!v || '패스워드확인을 입력해주세요.' : true,
          v => !(v && v.length >= 30) || '패스워드는 20자 이상 입력할 수 없습니다.',
          v => v === this.user_pw || '패스워드가 일치하지 않습니다.'
        ],
        user_nm: '',
        user_nm_rule: [
          v => !!v || '담당자명을 입력해주세요.',
          v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '이름에는 특수문자를 사용할 수 없습니다.'
        ],
        user_email: '',
        user_email_rule: [
          v => !!v || '이메일을 입력해주세요.',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '메일 형식이 잘못 되었습니다.'
        ],
        user_phone: '',
        user_phone_rule: [
          v => this.state === 'ins' ? !!v || '휴대폰번호를 입력해주세요.' : true,
          v => !!(v && /^[0-9]*$/.test(v)) || '숫자만 입력 가능합니다.'
        ],
        certif_num:'',
        certif_num_rule: [
          v => !!v || '인증번호를 입력해주세요.',
          v => !!(v && /^[0-9]*$/.test(v)) || '숫자만 입력 가능합니다.'
        ]
      };
    },

    methods: {
        clickedBtn(){
          this.btnMsg = this.btnMsg2
        },
        clickedBtn2(){
          this.btnCertif = this.btnCertif2
          this.btnStyle.backgroundColor = "#ffb49e"
          this.disabled = true
        },
        noData () {
        alert('이메일 인증번호가 일치하지 않습니다.')
      },
    },
  };
</script>
<style>
</style>
