<template>
<div>
    <div v-if="this.$route.name==='Explore'" id='nav-div'>
             <router-link class="router-link" to="/artists"> Artists </router-link>
             <router-link class="router-link" to="/"> Genres </router-link>
             <router-link class="router-link" to="/art-inspo-of-the-day"> Inspiration </router-link>
    </div>
    <div v-if="this.$route.name==='Artists'" id='nav-div'>
             <router-link class="router-link" to="/explore"> Explore </router-link>
             <router-link class="router-link" to="/"> Genres </router-link>
             <router-link class="router-link" to="/art-inspo-of-the-day"> Inspiration </router-link>
    </div>
    <div v-if="this.$route.name==='Genres'" id='nav-div'>
             <router-link class="router-link" to="/explore"> Explore </router-link>
             <router-link class="router-link" to="/artists"> Artists </router-link>
             <router-link class="router-link" to="/art-inspo-of-the-day"> Inspiration </router-link>
    </div>
    <div v-if="this.$route.name==='Inspo'" id='nav-div'>
             <router-link class="router-link" to="/explore"> Explore </router-link>
             <router-link class="router-link" to="/artists"> Artists </router-link>
             <router-link class="router-link" to="/"> Genres </router-link>
    </div>
    <div v-if="this.$route.name==='Read'" id='nav-div'>
             <router-link class="router-link" to="/explore"> Explore </router-link>
             <router-link class="router-link" to="/artists"> Artists </router-link>
             <router-link class="router-link" to="/"> Genres </router-link>
            <router-link class="router-link" to="/art-inspo-of-the-day"> Inspiration </router-link>
    </div>
    <div v-if="this.$route.name==='ReadArtists'" id='nav-div'>
             <router-link class="router-link" to="/explore"> Explore </router-link>
             <router-link class="router-link" to="/artists"> Artists </router-link>
             <router-link class="router-link" to="/"> Genres </router-link>
            <router-link class="router-link" to="/art-inspo-of-the-day"> Inspiration </router-link>
    </div>
    <div v-if="this.$route.name==='ReadArtistsFromArtists'" id='nav-div'>
             <router-link  class="router-link" to="/explore"> Explore </router-link>
             <router-link class="router-link" to="/artists"> Artists </router-link>
             <router-link class="router-link" to="/"> Genres </router-link>
            <router-link class="router-link" to="/art-inspo-of-the-day"> Inspiration </router-link>
    </div>
    </div>
</template>

<script>
export default {
     name: "Nav"
}
</script>

<style lang="scss" scoped>
    #nav-div{
        
         padding-top: 30px;
         padding-bottom: 30px;
         display: flex;
         justify-content: space-between;
    }
    .router-link{
        padding:10px;
        color:black;
        font-size: 18px;
        text-decoration: none;
    }
     .router-link:hover{
        padding:10px;
        color:black;
    }
     .router-link:hover{
        padding:10px;
        color:#3c6768;
    }

    @media only screen and (max-width: 600px) {
        #nav-div{
            padding:10px;
        }
    }

</style>