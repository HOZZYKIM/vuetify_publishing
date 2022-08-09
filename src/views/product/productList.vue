<template lang="">
  <ProductItem />
</template>
<script>
import ProductItem from './productItem.vue';
export default {
  name: 'ProductList',
    components: {
      ProductItem,
    },
    data() {
      return {
        isLoading: false,
      };
    },
    mounted() {
      this.isLoading = false;
      setTimeout(() => {
        this.isLoading = true;
      }, 1000);
    },
}
</script>
<style>


</style>
