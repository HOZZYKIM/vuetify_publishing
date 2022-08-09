<template>
  <v-app>
    <myAppBar />
    <myView />
    <DefaultFooter />
    <bottom-navi />
  </v-app>
</template>
<script>
import myAppBar from './AppBar'
import myView from './View'
import DefaultFooter from '@/layouts/default/footer.vue'
import BottomNavi from './bottomNavi'
export default {
  name: 'MyLayout',
  components: {
    myAppBar,
    myView,
    DefaultFooter,
    BottomNavi
  }
}
</script>
<style lang="">

</style>
