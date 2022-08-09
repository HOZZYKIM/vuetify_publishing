<template lang="">
  <v-container>
    <Dashboard />
    <RecomPrd />
    <popularPrd />
    <newPrd />
    <PopularBrand />
    <slideAd />
    <callCenter />
  </v-container>
</template>
<script>
import Dashboard from './Dashboard.vue';
import RecomPrd from './recomPrd.vue';
import popularPrd from './popularPrd.vue';
import newPrd from './newPrd.vue';
import PopularBrand from './popularBrand.vue';
import SlideAd from './slideAd.vue';
import CallCenter from './callCenter.vue';

export default {
  name: 'MainPage',
  components: {
      Dashboard,
      RecomPrd,
      popularPrd,
      newPrd,
      PopularBrand,
      SlideAd,
      CallCenter
    },

}
</script>
<style>
div.container{padding:0;}
</style>
