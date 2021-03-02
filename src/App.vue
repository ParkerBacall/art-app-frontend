<template>
  <div id="app">
      <WelcomeModal/>
     <Header/>
      <div class="spacer">
      </div>
     <router-view/>
  </div>
</template>


<script>
 import WelcomeModal from "./components/WelcomeModal"
 import Header from "./components/Header"

 import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Header, 
    WelcomeModal,
   
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
       

   }
  

}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:500&display=swap');

*{
  font-family: 'Barlow', ;
}

.lazyload,.lazyloading{
  opacity:0!important;
  }

.lazyloaded{
  opacity:1;
  transition: opacity .6s;
  z-index:1;
  }

@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap');
  #main-title{
      font-family: 'Fredericka the Great';
      font-size: 45px;
      margin-bottom: 17px;
      margin-top: 10px;
  }
.spacer{
  height: 100px;
}


</style>
