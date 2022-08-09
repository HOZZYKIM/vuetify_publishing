<template lang="">
  <v-card class="section elevation-0">
    <v-card-title class="font-weight-black text-h5">
      {{ sectionTitle }}
    </v-card-title>
    <v-card-subtitle class="pb-0">
      {{ sectionSubTitle }}
    </v-card-subtitle>

    <ProductList />
  </v-card>
</template>
<script>
import ProductList from '@/views/product/productList.vue';
export default {
    name: 'RecomPrd',
    components: {
       ProductList,
    },
    data() {
      return {
        sectionTitle: '꿀콘 추천상품',
        sectionSubTitle:'md가 추천하는 꿀이 되는 상품모음'
      };
    },
  };

</script>
<style>
</style>
