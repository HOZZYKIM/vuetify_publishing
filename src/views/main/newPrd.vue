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
    name: 'NewPrd',
    components: {
       ProductList,
    },
    data() {
      return {
          sectionTitle: '꿀콘신상',
          sectionSubTitle:'새로 업데이트 된 신규상품 모음'
        };
      }
    }

</script>
<style>

</style>
