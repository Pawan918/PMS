
<template>
    <Navbar></Navbar>
    <RouterView />
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
