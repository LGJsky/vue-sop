import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:()=>import('../components/Login')
  },
  {
    path:'/home',
    component:()=>import('../components/Home')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  const tokenStr = window.sessionStorage.getItem('token')
  if(tokenStr) {
    if(to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else{
    if(to.path !=='/login') {
      next('/login')
    }else{
      next()
    }
  }
})
export default router
