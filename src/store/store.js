
import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      userDetails : {},
    }
  },
  mutations: {
    setUserDetails (state,userDetails) {
      state.userDetails  = userDetails
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

        await commit('setUserDetails',data.data)

    }
  }
})
export default store;