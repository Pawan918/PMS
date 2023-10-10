
<template>
  <main>
    <div class="flex justify-center items-center h-[600px] bg-[#2e2c2c]">
      <div class="flex justify-center items-center w-2/3 h-full ">
        <form   class="flex flex-col bg-[#c8bae8] text-black p-20 justify-center items-center  shadow hover:shadow-lg" @submit.prevent="loginHandler">
          <div v-show="!login" class="mb-5 flex relative">
            <label for="role" class="w-24  mr-5 flex items-center">Role : </label>
            <div class="relative">
              <font-awesome-icon :icon="['fas', 'circle-user']"  class="absolute w-3  bottom-2 left-1"/>
              <input type="text" name="role" placeholder="Username" v-model="role" class="w-full px-6 h-8 rounded-sm">
            </div>
          </div>
          <div class="mb-5 flex relative">
            <label for="username" class="w-24  mr-5 flex items-center">UserName : </label>
            <div class="relative">
              <font-awesome-icon :icon="['fas', 'user']" class="absolute w-3  bottom-2 left-1"/>
              <input type="text" name="username" placeholder="Username" v-model="username" class="w-full px-6 h-8 rounded-sm">
            </div>
          </div>
          <div class="mb-5 flex relative" >

            <label for="password" class="w-24  mr-5 flex items-center">Password : </label>
            <div class="relative">
              <font-awesome-icon :icon="['fas', 'lock']" class=" w-3 absolute bottom-2 left-1"/>
              <input type="password" name="password" placeholder="password" v-model="password" class="w-full px-6 h-8 rounded-sm">
            </div>
          </div>

          <p v-if="login">If You are not Signed up Please <router-link to="/signup" class="text-red-500">SignUp</router-link> First</p>
          <p v-if="!login">If You are SignedUp Please <router-link to="/login" class="text-red-500">LogIn</router-link></p>
          <button type="submit" class="w-20 bg-red-400 my-4 p-1 outline-none">{{ login ? "Login" : "SignUp" }}</button>
        </form>
      </div>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>

<script>
export default {
  name : 'loginTemp',
  data (){
    return {
      username : "",
      password : "",
      role : "",
      // login : true
    }
  },
  watch : {
    isLogged(newState,oldState){
      if(newState){
        this.$router.push('/dashboard')
      }
    }
  },
  computed : {
    login(){
      return this.$route.name === 'login'
    },
    isLogged(){
      return this.$store.state.loggedIn
    }
  },
  methods : {
    loginHandler(){
      // console.log('login Dispatch')
      if(this.login){
        this.$store.dispatch('LogIn',
        {
          username : this.username,
          password : this.password
        }
        )
      }else{
        this.$store.dispatch('SignUp',
        {
          username : this.username,
          password : this.password,
          // role : this.role
        }
        )
      }
      this.$router.push('/dashboard')
      }
  }
}
</script>
