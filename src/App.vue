<template>
  <div id="app">
     <Header/>
     <router-view/>
  </div>
</template>


<script>
 import Header from "./components/Header"
 import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Header,    
  },
  methods: {
    ...mapActions(['getUser', 'fetchGenes']),
    ...mapMutations(['toggleLogin', 'toggleHideLogin', 'setSelectedGenes']),
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
   computed: mapGetters(['isLoggedIn', 'user', 'hideSignUp']),
    created() {
      this.checkLoggedin()
   },
    mounted(){
      this.fetchGenes(70)
   }
  

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:500&display=swap');
*{
  font-family: 'Barlow', ;
}
</style>
