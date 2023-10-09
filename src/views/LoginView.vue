<script setup>
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-96">
      <div class="flex justify-center items-center w-2/3 h-full  text-black">
        <form class="flex flex-col bg-emerald-200 text-black p-20 justify-center items-center" @submit.prevent="loginHandler">
          <div class="mb-5 flex relative">
            <label for="username" class="w-24 block mr-5">UserName : </label>
            <div class="relative">
              <img src="./../assets/user-regular.svg" class="w-3 absolute  bottom-1 left-1">
              <input type="text" name="username" placeholder="Username" v-model="username" class="w-full px-6 h-8">
            </div>
          </div>
          <div class="mb-5 flex relative" >

            <label for="password" class="w-24 block mr-5">Password : </label>
            <div class="relative">
              <img src="./../assets/lock-solid.svg " class="w-3 absolute bottom-2 left-1"/>
              <input type="password" name="password" placeholder="password" v-model="password" class="w-full px-6 h-8">
            </div>
          </div>

          <p>If You are not Signed up Please sign up first</p>
          <button type="submit" class="w-20 bg-red-400 my-4 p-1 outline-none">Login</button>
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
    }
  },
  methods : {
    loginHandler(){
      console.log('login Dispatch')
      this.$store.dispatch('LogIn',
      {
        username : this.username,
        password : this.password
      }
      )
    }
  }
}
</script>
<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}
.form-container{
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  height: 400px;
}

</style>
