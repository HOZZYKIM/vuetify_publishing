import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(
      '@/layouts/default/Index'
    ),
    children: [
      {
        path: '/',
        name: 'main',
        component: () => import(
          '@/views/main/mainPage'
        )
      },
      {
        path: 'my/successwithdrawal',
        name: 'WithdrwlRsltPage',
        component: () => import(
          '@/views/my/WithdrwlRsltPage'
        )
      },
    ]
  },
  {
    path: '/search',
    component: () => import(
      '@/layouts/search/Index'
    ),
    children: [
      {
        path: '/search',
        name: 'searchPage',
        component: () => import(
          '@/views/search/searchPage'
        )
      },
      {
        path: '/search/result',
        name: 'SearchResult',
        component: () => import(
          '@/views/search/searchPage2'
        )
      }
    ]
  },
  {
    path: '/auth',
    component: () => import(
      '@/layouts/auth/Index'
    ),
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        meta: { appbarName: '로그인' },
        component: () => import(
          '@/views/auth/login'
        )
      },
      {
        path: '/auth/agree-terms',
        name: 'AgreeTerms',
        meta: { appbarName: '회원가입' },
        component: () => import(
          '@/views/auth/agreeTerms'
        )
      },
      {
        path: '/auth/sign-up',
        name: 'SignUp',
        meta: { appbarName: '회원가입' },
        component: () => import(
          '@/views/auth/signUp'
        )
      },
      {
        path: '/auth/signup-complete',
        name: 'SignUpComplete',
        meta: { appbarName: '회원가입' },
        component: () => import(
          '@/views/auth/signUpComplete'
        )
      },
      {
        path: '/auth/signup-complete2',
        name: 'SignUpComplete2',
        meta: { appbarName: '회원가입' },
        component: () => import(
          '@/views/auth/signUpCompleteVer2'
        )
      },
      {
        path: '/auth/find-id',
        name: 'FindId',
        meta: { appbarName: '' },
        component: () => import(
          '@/views/auth/findId'
        )
      },
      {
        path: '/auth/find-id2',
        name: 'FindId2',
        meta: { appbarName: '아이디 전체보기' },
        component: () => import(
          '@/views/auth/findId2'
        )
      },
      {
        path: '/auth/find-password',
        name: 'FindPassword',
        meta: { appbarName: '' },
        component: () => import(
          '@/views/auth/findPassword'
        )
      },
      {
        path: '/auth/find-password2',
        name: 'FindPassword2',
        meta: { appbarName: '비밀번호 재설정' },
        component: () => import(
          '@/views/auth/findPassword2'
        )
      },
      {
        path: '/auth/find-password3',
        name: 'FindPassword3',
        meta: { appbarName: '비밀번호 재설정' },
        component: () => import(
          '@/views/auth/findPassword3'
        )
      },
      {
        path: '/auth/find-password4',
        name: 'FindPassword4',
        meta: { appbarName: '' },
        component: () => import(
          '@/views/auth/findPassword4'
        )
      },
      {
        path: '/auth/3times-fail',
        name: '3timesFail',
        meta: { appbarName: '비밀번호 3회 실패' },
        component: () => import(
          '@/views/auth/3timesFail'
        )
      },
      {
        path: '/auth/3times-fail2',
        name: '3timesFail2',
        meta: { appbarName: '비밀번호 3회 실패' },
        component: () => import(
          '@/views/auth/3timesFail2'
        )
      },
    ]
  },
  {
    path: '/my',
    component: () => import(
      '@/layouts/my/Index'
    ),
    children: [
      {
        path: '/my/mypage',
        name: 'myPage',
        meta: { appbarName: '마이페이지' },
        component: () => import(
          '@/views/my/myPage'
        )
      },
      {
        path: '/my/mypage/order-history',
        name: '주문/발급내역',
        meta: { appbarName: '주문/발급내역' },
        component: () => import(
          '@/views/my/orderHistory'
        )
      },
      {
        path: '/my/mypage/order-detail',
        name: '주문/발급상세',
        meta: { appbarName: '주문/발급상세' },
        component: () => import(
          '@/views/my/orderDetail'
        )
      },
      {
        path: '/my/mypage/cancel-history',
        name: '취소/환불내역',
        meta: { appbarName: '취소/환불내역' },
        component: () => import(
          '@/views/my/cancelHistory'
        )
      },
      {
        path: '/my/mypage/liked-products',
        name: '찜 목록',
        meta: { appbarName: '찜 목록' },
        component: () => import(
          '@/views/my/likedProducts'
        )
      },
      {
        path: '/my/mypage/manage-messages',
        name: '메시지 관리',
        meta: { appbarName: '메시지 관리' },
        component: () => import(
          '@/views/my/manageMessages'
        )
      },
      {
        path: '/my/mypage/manage-numbers',
        name: '발신번호 관리',
        meta: { appbarName: '발신번호 관리' },
        component: () => import(
          '@/views/my/manageNumbers'
        )
      },
      {
        path: '/my/signup-complete',
        name: 'signupComplete',
        meta: { appbarName: '회원가입' },
        component: () => import(
          '@/views/my/signupComplete'
        )
      },
      {
        path: '/my/CnfmPassPage',
        name: 'CnfmPassPage',
        meta: { appbarName: '회원가입' },
        component: () => import(
          '@/views/my/CnfmPassPage'
        )
      },
      {
        path: '/my/EditMyInfoPage',
        name: 'EditMyInfoPage',
        meta: { appbarName: '정보수정' },
        component: () => import(
          '@/views/my/EditMyInfoPage'
        )
      },
      {
        path: '/my/EditMyPassPage',
        name: 'EditMyPassPage',
        meta: { appbarName: '비밀번호 재설정' },
        component: () => import(
          '@/views/my/EditMyPassPage'
        )
      },
    ]
  },
  {
    path: '/product',
    component: () => import(
      '@/layouts/auth/Index'
    ),
    children: [
      {
        path: '/product/product-detail',
        name: 'ProductDetail',
        meta: { appbarName: '' },
        component: () => import(
          '@/views/product/productDetail'
        )
      },
    ]
  },
]
const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
