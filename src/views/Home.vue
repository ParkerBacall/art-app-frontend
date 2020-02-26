<template>
  <div class="home">
      <Login v-if="!isLoggedIn"/>
      <LogOut v-if="isLoggedIn"/>
  </div>
</template>

<script>
 import Login from "../components/Login"
 import LogOut from "../components/LogOut"
 import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Login,
    LogOut
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapMutations(['toggleLogin']),
    checkLoggedin(){
      localStorage.token
      ? 
      this.toggleLogin()
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