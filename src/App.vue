<template>
  <div id="app">
     <Header/>
      <Login v-if="!isLoggedIn"/>
      <Sign-up v-if="!hideSignUp"/>
      <router-view/>
  </div>
</template>


<script>
 import Login from "./components/Login"
 import Header from "./components/Header"
 import SignUp from "./components/SignUp"
 import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Login,
    SignUp,
    Header,    
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapMutations(['toggleLogin', 'toggleHideLogin', 'setSelectedGenes']),
    toggleBaseState(){
      this.toggleLogin()
      this.toggleHideLogin()
    },
    test(){
     console.log(this.user.genre)
    },
    checkLoggedin(){
      localStorage.token
      ?
      this.toggleBaseState()
      :
      null
      }
    },
   computed: mapGetters(['isLoggedIn', 'user', 'hideSignUp']),
   created() {
     this.checkLoggedin(),
     this.getUser(localStorage.getItem('token'))
   },
   mounted(){
     console.log(this.user.genre)
   }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:500&display=swap');
*{
  font-family: 'Barlow', ;
}
</style>
