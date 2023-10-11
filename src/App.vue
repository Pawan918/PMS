
<template>
    <Navbar></Navbar>
    <RouterView :key="$route.fullPath"/>
</template>

    <script >
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from './views/Navbar.vue';
    export default{
        name : 'AppTemp',
        components : {
            RouterView,
            Navbar
        },
       async mounted () {
            await this.$store.dispatch('autoAuth')
        }
    }
    </script>
