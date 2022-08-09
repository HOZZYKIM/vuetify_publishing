<template>
  <v-app>
    <default-bar />
    <default-view />
    <BottomNavi />
    <default-footer />
  </v-app>
</template>
<script>
import DefaultBar from './AppBar'
import BottomNavi from './bottomNavi'
import DefaultView from './View'
import defaultFooter from './footer'
export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar,
    BottomNavi,
    DefaultView,
    defaultFooter
  },
}
</script>
<style lang="">

</style>
