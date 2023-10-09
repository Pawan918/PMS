<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header> -->
<!--     
    <div class="wrapper">
      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div> -->
    <RouterView />
  <!-- </header> -->

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
