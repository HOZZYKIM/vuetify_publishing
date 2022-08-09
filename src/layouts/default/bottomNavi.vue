<template>
  <v-footer
    class="pa-0 bottom-navi"
    app
  >
    <v-bottom-navigation
      color="black"
      grow
    >
      <v-btn to="/">
        <v-icon color="black">
          mdi-home-outline
        </v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        content-class="search-dialog"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn>
            <v-icon
              color="black"
              dark
              v-bind="attrs"
              v-on="on"
            >
              mdi-magnify
            </v-icon>
          </v-btn>
        </template>
        <!-- 검색 팝업 -->
        <v-card class="main-search-dialog elevation-0">
          <v-toolbar
            class="elevation-0"
            light
          >
            <v-spacer />
            <v-btn
              icon
              class="dialog-close"
              @click="dialog = false"
            >
              <v-icon class="xs-txt fc-black">
                mdi-close
              </v-icon>
            </v-btn>
          </v-toolbar>
          <v-container class="elevation-0 ma-0 pa-0">
            <search-dialog />
          </v-container>
        </v-card>
      </v-dialog>
      <!--// 검색 팝업 -->
      <v-btn to="/my/mypage">
        <v-icon color="black">
          mdi-account-outline
        </v-icon>
      </v-btn>
      <v-btn to="/wish/view">
        <!-- <v-icon>mdi-heart-outline</v-icon> -->
        <!-- <v-icon>mdi-heart-box</v-icon> -->
        <v-icon color="black">
          mdi-heart-outline
        </v-icon>
        <!-- <v-icon>mdi-hand-heart-outline</v-icon> -->
      </v-btn>
      <v-btn to="/wish/view">
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <v-icon color="black">
          mdi-email-outline
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
import SearchDialog from '@/layouts/default/searchDialog.vue';

  export default {
    name: 'CommonFooter',

    components: {
      SearchDialog
    },
    data () {

      return {
         dialog: false,
        sound: true,
        widgets: false,
      }
    },
    mounted() {
      this.value = 0;
    },
  };
</script>
