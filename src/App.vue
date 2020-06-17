<template>
  <div id="app">
     <Header/>
     <Login v-if="!isLoggedIn" />
     <Sign-up v-if="!hideSignUp"/>
     <router-view/>
  </div>
</template>


<script>
 import Header from "./components/Header"
 import Login from "./components/Login"
 import SignUp from "./components/SignUp"
 import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Header, 
    Login,
    SignUp,
  },
  methods: {
    ...mapActions(['fetchAndCacheToken', 'getUser', 'fetchAllArtists', 'fetchGenes', 'fetchArtists']),
    ...mapMutations(['toggleLogin', 'toggleHideLogin', 'setSelectedGenes']),
    },
   computed: mapGetters(['isLoggedIn', 'user', 'hideSignUp']),
    created() {
      
   },
    async mounted(){
      await this.fetchAndCacheToken()
       this.fetchGenes(70)
       this.fetchAllArtists(70)
       alert("Welcome to artify! Login or create an account to save favorited artists and genres")
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
