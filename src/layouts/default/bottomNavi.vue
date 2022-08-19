<template>
  <v-footer
    class="pa-0 bottom-navi"
    app
  >
    <v-bottom-navigation
      color="black"
      grow
    >
      <v-btn @click="$router.push('/')">
        <v-icon color="black">
          mdi-home-outline
        </v-icon>
      </v-btn>

      <v-btn @click=" SearchDialog = true">
        <v-icon
          color="black"
        >
          mdi-magnify
        </v-icon>
      </v-btn>

      <v-btn @click="$router.push('/my/mypage')">
        <v-icon color="black">
          mdi-account-outline
        </v-icon>
      </v-btn>

      <v-btn @click="$router.push('/wish/view')">
        <v-icon color="black">
          mdi-heart-outline
        </v-icon>
      </v-btn>

      <v-btn @click="$router.push('/wish/view')">
        <v-icon color="black">
          mdi-email-outline
        </v-icon>
      </v-btn>
    </v-bottom-navigation>

    <SearchDialog
      :dialog="SearchDialog"
      @close="SearchDialog = false"
    />
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
        SearchDialog: false,
        sound: true,
        widgets: false,
      }
    },
    mounted() {
      this.value = 0;
    },
  };
</script>
