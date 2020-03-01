import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import Read from '../views/Read'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/read/:id',
    name: 'Read',
    component: Read
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
