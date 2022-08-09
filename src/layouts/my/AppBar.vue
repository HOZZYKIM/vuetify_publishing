<template lang="">
  <!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->

  <v-toolbar class="sub-tool-bar elevation-3">
    <v-btn
      icon
    >
      <v-icon
        @click="$router.go(-1)"
      >
        mdi-arrow-left
      </v-icon>
    </v-btn>

    <v-toolbar-title class="">
      {{ $route.meta.appbarName }}
    </v-toolbar-title>

    <v-spacer />
  </v-toolbar>
</template>
<script>
export default {
   name: 'MyAppBar',
}
</script>
<style>
.v-toolbar{flex:initial !important;}
/* .sub-tool-bar{box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 4%) !important; border:1px solid #eee;} */
</style>
