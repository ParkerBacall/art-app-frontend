<template>
  <div id="app">
     <Header/>
     <router-view/>
  </div>
</template>


<script>
 import Header from "./components/Header"
 import {mapMutations, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Header,    
  },
  methods: {
    ...mapActions(['getUser']),
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
