<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
import '@/styles/overrides.sass'
import '@/assets/scss/_index.scss'
export default {
  name: 'App',
};
</script>
<style>

</style>
