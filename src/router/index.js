import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../views/Read'
import ReadArtists from '../views/ReadArtists'
import ReadArtistsFromArtists from '../views/ReadArtistsFromArtists'
import Explore from '../views/Explore'
import Genres from '../views/Genres'
import Artists from '../views/Artists'
import Inspo from '../views/Inspo'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Genres',
    component: Genres
  },
  {
    path: '/art-inspo-of-the-day',
    name: 'Inspo',
    component: Inspo
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
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
  },
  {
    path: '/artists/:id',
    name: 'ReadArtistsFromArtists',
    component: ReadArtistsFromArtists
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
