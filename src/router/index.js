import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/user/login.vue'
import Register from '../views/user/register.vue'
import Detail from '../views/house/detail.vue'
import Grounding from '../views/house/grounding.vue'

import My from '../views/tab/my.vue'
import Recharge from '../views/tab/recharge.vue'
import Search from '../views/tab/search.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/grounding',
    name: 'Grounding',
    component: Grounding
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: Recharge
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
