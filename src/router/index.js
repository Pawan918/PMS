import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path : '/details/:id',
      name : 'productDetails',
      component : ()=> import('../views/ProductDetail.vue'),
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const data = JSON.parse(localStorage.getItem('userData'))
  if(!data && to.path === '/dashboard'){
    next('/login')
  }else if(data && to.path === '/login'){
    next('/dashboard')
  }else{
    next()
  }
})
export default router
