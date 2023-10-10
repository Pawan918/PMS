
<template>
    <RouterView />
</template>

    <script >
    import { RouterLink, RouterView } from 'vue-router'
    export default{
        name : 'AppTemp',
        components : {
            RouterView
        },
       async mounted () {
            await this.$store.dispatch('autoAuth')
        }
    }
    </script>
