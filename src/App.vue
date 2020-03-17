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
    ...mapActions(['getUser', 'fetchAllArtists', 'fetchGenes', 'fetchArtists']),
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
      this.fetchAllArtists(70)
   }
  

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:500&display=swap');
*{
  font-family: 'Barlow', ;
}

@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap');
  #main-title{
      font-family: 'Fredericka the Great';
      font-size: 45px;
      margin-bottom: 17px;
      margin-top: 10px;
  }


</style>
