import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Chat from '../views/chat/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/chat',
    name: 'chat',
    beforeEnter:  (to , from , next) => {
        const data = sessionStorage.getItem('data');
        if(data === null){
            next('/');
        }
        next();
    },
    component: Chat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
