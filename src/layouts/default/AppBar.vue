<template>
  <v-app-bar
    color="white"
    class="default-app-bar"
  >
    <div class="d-flex align-center">
      <v-img
        alt="kkulconLogo"
        class="shrink mr-2"
        contain
        src="../../assets/logo.png"
        transition="scale-transition"
        width="142"
      />
    </div>
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        class="px-0 ml-2"
      >
        <router-link
          to="/search/"
          class="router-link-underline-delete"
        >
          <v-chip>
            <v-icon>
              mdi-magnify
            </v-icon>
          </v-chip>
        </router-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {

  name: 'DefaultBar',
  data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  // computed: {
  //   drawer: {
  //     get () {
  //       return this.$store.getters['app/getDrawer']
  //     },
  //     set (value) {
  //       return this.$store.commit('app/setDrawer', value)
  //     }
  //   }
  // }
}
</script>
<style>
.default-app-bar .v-chip.v-size--default{position: relative; background-color:#f5f5f5 !important; width: 180px; height: 35px; border-radius: 30vw; }
.default-app-bar .v-chip.v-size--default .v-icon{position: absolute; left: 10px;}
</style>
