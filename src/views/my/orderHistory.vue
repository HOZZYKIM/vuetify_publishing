<template>
  <div class="order-history">
    <DatePicker />
    <search-table-vue />
  </div>
</template>
<script>
import DatePicker from '../../components/app/datePicker.vue'
import searchTableVue from '../../components/app/searchTable.vue'
export default {
  components :{
    DatePicker,
    searchTableVue
}

}
</script>
<style lang="">

</style>
