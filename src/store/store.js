
import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      username : '',
      password : "",
    }
  },
  mutations: {
    setUsername (state) {
      state.username = ''
    },
    setPassword (state){
        state.password = ''
    }
  },
  actions : {
    async LogIn ({commit},User){
        const data = await axios({
            method : 'post',
            url : 'https://dummyjson.com/auth/login',
            data : {
                username : User.username,
                password : User.password
            }
        })
        await commit('setUsername',User.username);
        await commit('setPassword',User.password)
        console.log(data)

    }
  }
})
export default store;