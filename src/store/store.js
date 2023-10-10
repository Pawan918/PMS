
import axios from 'axios'
import { createStore } from 'vuex'
import jwtDecode from 'jwt-decode'
import ProductStore from './productStore'

const store = createStore({
  modules : {
    product : ProductStore
  },
  state () {
    return {
      userDetails : {},
      loggedIn : false
    }
  },
  getters : {
    getUserDetails(state){
      return JSON.parse(state.userDetails)
    },
  },
  mutations: {
    setUserDetails (state,userDetails) {
      state.userDetails  = userDetails;
      state.loggedIn = true
    },
    deleteUserDetails(state){
      state.userDetails = {};
      state.loggedIn = false
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
        const decoded = JSON.stringify(jwtDecode(data.data.token))
        localStorage.setItem('userData',decoded)
        commit('setUserDetails',JSON.stringify(decoded))

    },
    async autoAuth({commit}){
      let userData =  localStorage.getItem('userData');
      if(userData){
          commit('setUserDetails',JSON.stringify(userData))
      }
    },
    async Logout({commit}){
      localStorage.removeItem('userData');
      commit('deleteUserDetails');
    }
  },
})
export default store;