<template>
  <div class="home">
      <Header/>
      <Login v-if="!isLoggedIn"/>
      <InfluencesGrid v-if="isLoggedIn"/>
  </div>
</template>

<script>
 import Login from "../components/Login"
 import Header from "../components/Header"
 import InfluencesGrid from '../components/InfluencesGrid'
 import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Login,
    Header,
    InfluencesGrid,
    
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapMutations(['toggleLogin', 'toggleHideLogin']),
    toggleBaseState(){
      this.toggleLogin()
      this.toggleHideLogin()
    },
    checkLoggedin(){
      localStorage.token
      ?
      this.toggleBaseState()
      :
      null
      }
    },
   computed: mapGetters(['isLoggedIn', 'user']),
   mounted() {
     this.getUser(localStorage.getItem('token'))
     this.checkLoggedin()
   }
}
</script>

<style lang="scss" scoped>

</style>