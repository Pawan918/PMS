<template>
    <div class="w-full h-20 bg-slate-600 flex">
        <div class="flex justify-between items-center h-full w-full mx-10">
            <div class="">Logo</div>
            <div class="flex items-center gap-4 relative">
                <div v-show="loggedIn" class="">{{ userDetails.firstName }}</div>
                <div v-show="!loggedIn" class="">Login</div>
                <font-awesome-icon :icon="['fas', 'circle-user']" class="text-2xl cursor-pointer p-4" @click="()=>isLogout=!isLogout"/>
                <div v-show="isLogout" class="absolute right-2 top-12 bg-[black] w-20 h-16">
                    <div class="flex p-[2px] justify-center cursor-pointer bg-[red]  m-2" @click.prevent="logoutHandler">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    name : "NavbarTemp",
    data () {
        return {
            isLogout : false,
        }
    },
    computed : {
        ...mapState(['loggedIn','userDetails']),
        userName(){
            return loggedIn;
        }
    },
    methods : {
        logoutHandler(){
            this.$router.push('/login')
            this.$store.dispatch('Logout')
        }
    }
}
</script>