<template>

  <div class="m-5">
    <Filter></Filter>
    <ProductCards></ProductCards>
    <!-- <h1>This is an Dashbord Page</h1> -->
  </div>
</template>
<script>
import Filter from './Filter.vue';
import Navbar from './Navbar.vue';
import ProductCards from './ProductCards.vue'
export default {
    name: 'dashboardTemp',
    components: { Navbar, ProductCards, Filter }
}
</script>

