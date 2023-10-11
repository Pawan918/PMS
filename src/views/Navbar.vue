<template>
    <div class="w-full h-16 bg- flex bg-[#586F6B]">
        <div class="flex justify-between items-center h-full w-full mx-10">
            <div class=""><img src="./../assets/logo.svg" class="w-[80px] h-[70px] text-slate-50"/></div>
            <div class="flex items-center gap-4 relative">
                <div class="relative cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-2xl p-2"/>
                    <div class="absolute top-[-4px] right-[-6px] p-1 bg-[red] rounded-[25%] text-xs text-[white]"><span>5</span></div>
                </div>
                <div v-if="isLoggedIn">{{ firstName }}</div>
                <div v-else>Login</div>
                <font-awesome-icon :icon="['fas', 'circle-user']" class="text-2xl cursor-pointer p-4" @click="()=>isLogout=!isLogout" v-show="isLoggedIn"/>
                <div v-show="isLogout && isLoggedIn" class="absolute right-2 top-12 bg-[black] w-20 h-16 z-[99]">
                    <div class="flex p-[2px] justify-center cursor-pointer bg-[#150707]  m-2" @click.prevent="logoutHandler">
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