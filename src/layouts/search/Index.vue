<template>
  <v-app>
    <search-bar />

    <search-view />
    <BottomNavi />
    <Footer />
  </v-app>
</template>
<script>
import searchBar from './AppBar'
import searchView from './View'
import BottomNavi from './bottomNavi'
import Footer from './footer'
export default {
  name: 'SearchLayout',
  components: {
    searchBar,
    searchView,
    BottomNavi,
    Footer
  },
}
</script>
<style lang="">

</style>
