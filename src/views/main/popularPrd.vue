<template lang="">
  <v-card class="section elevation-0">
    <v-card-title class="font-weight-black text-h5 ">
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
    name: 'PopularPrd',
    components: {
       ProductList,
    },
    data() {
      return {
          sectionTitle: '인기상품',
          sectionSubTitle:'한 주간의 인기상품 모음'
        };
      }
    }

</script>
<style>
</style>
