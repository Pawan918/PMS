<template>
  <Navbar></Navbar>
  <div class="m-5">
    <Filter></Filter>
    <ProductCard></ProductCard>
    <!-- <h1>This is an Dashbord Page</h1> -->
  </div>
</template>
<script>
import Filter from './Filter.vue';
import Navbar from './Navbar.vue';
import ProductCard from './ProductCard.vue'
export default {
    name: 'dashboardTemp',
    components: { Navbar, ProductCard, Filter }
}
</script>

