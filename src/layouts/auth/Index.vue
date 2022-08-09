<template>
  <v-app>
    <authappBar />

    <!-- <BottomNavi /> -->

    <authView />

    <authFooter />
  </v-app>
</template>
<script>
import authappBar from './AppBar'
// import BottomNavi from './bottomNavi'
import authView from './View'
import authFooter from './footer'
export default {
  name: 'AuthLayout',
  components: {
    authappBar,
    // BottomNavi,
    authView,
    authFooter,
  },
}
</script>
<style lang="">

</style>
