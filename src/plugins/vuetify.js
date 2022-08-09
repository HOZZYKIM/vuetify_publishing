import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'
import { en, ko } from 'vuetify/es5/locale';

import '@/assets/scss/_index.scss';

Vue.use(Vuetify);

const theme = {
  primary: colors.deepOrange,
}

export default new Vuetify({
  lang: {
    locales: { ko, en },
    current: 'ko', // 한국어
  },
  breakpoint: {
    mobileBreakpoint: '1200'
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
