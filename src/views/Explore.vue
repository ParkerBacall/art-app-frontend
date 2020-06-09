<template>
    <div>
    <Nav/>
    <div id='title-div'>
        <h1>Explore</h1>
        </div>
       <div id='explore-grid'>
       <div id="explore" v-for="artist in exploreArtists" :key=artist.id>
           <img :src="artist._links.thumbnail.href" alt=""/>
          <div id="h3-div">
          <h3>{{artist.name}}</h3>
          </div>
           <div id='link-div'>
             <router-link :to="{ name: 'ReadArtists', params: {gene: artist, id: artist.name}}"> About artist </router-link>
             </div>
       </div>
       </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Nav from '../components/Nav'
export default {
    name: 'Explore',
    components: {
        Nav,
    },
    methods: {
        ...mapActions(['fetchArtists', 'getUser',]),
         fetchBois(){
             ([...this.user.genre.map(genre => genre._links.artists.href), ...this.user.artists.map(artist => artist._links.similar_artists.href)]).map(artist =>  {
                this.fetchArtists(artist)
            })
        }
    },
    computed: mapGetters(['user', 'artists', 'exploreArtists', 'similarArtists']),
      created(){
         this.fetchBois()
        },
}
</script>

<style lang="scss" scoped>
 #title-div{
        display: flex;
        justify-content: center;
    }
    #explore-grid{
        padding-top: 40px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
         #explore{
            width: 20%;
            height: 20%;
            padding: 10px;
            margin: 10px;
            box-shadow: 0px 0px 4px #666
        }
            img{
                width: 90%;
                padding-left: 10px;
                
            }
                        #h3-div{
                display: flex;
                justify-content: center;
                h3{
                    text-align: center;
                }
            }
            #link-div{
                display: flex;
                justify-content: center;
            }
    }
</style>