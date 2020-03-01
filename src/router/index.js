import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import Read from '../views/Read'
import ReadArtists from '../views/ReadArtists'

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
  },
  {
    path: '/artists/:id',
    name: 'ReadArtists',
    component: ReadArtists
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
