<template>
    <div class="w-full h-16 bg-slate-600 flex">
        <div class="flex justify-between items-center h-full w-full mx-10">
            <div class="">Logo</div>
            <div class="flex items-center gap-4 relative">
                <div v-if="isLoggedIn">{{ firstName }}</div>
                <div v-else>Login</div>
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
        isLoggedIn() {
            return this.loggedIn;
        },
        firstName() {
            return JSON.parse(this.$store.getters.getUserDetails).firstName
        }
    },
    methods : {
        logoutHandler(){
            this.$store.dispatch('Logout')
            this.$router.push('/login')
        }
    }
}
</script>