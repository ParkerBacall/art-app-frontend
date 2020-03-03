<template>
    <div>
        <Header/>
        <h1>
       <div v-for="genre in user.genre" :key=genre.id>
           {{genre.name}}
       </div>
       </h1>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Header from '../components/Header'
export default {
    name: 'Explore',
    components: {
        Header
    },
    methods: {
        ...mapMutations(['setSelectedGenes','toggleLogin', 'toggleHideLogin']),
    toggleBaseState(){
      this.toggleLogin()
      this.toggleHideLogin()
      this.getUser(localStorage.getItem('user'))
    },
    },
    computed: mapGetters(['selectedGenes','user', 'isLoggedIn']),
    created(){ 
        this.isLoggedIn 
        ? 
        this.setSelectedGenes(this.user.genre)
        :
        this.toggleBaseState()
    }
}
</script>

