<template>
    <div>
        <Nav/>
        <div id='title-div'>
        <h1>Artists</h1>
        </div>
        <FilterArtistCount/>
        <div id='artwork-grid'>
        <div 
        id="artwork" 
        v-for="artist in goodArtists" 
        :key="artist.id">
            <img v-if='artist._links.thumbnail' :src= "artist._links.thumbnail.href"/>
            <div id="h3-div">
            <h3>
            {{artist.name}}
            </h3>
            </div>
             <div id='link-div'>
             <router-link :to="{ name: 'ReadArtists', params: {gene: artist, id: artist.name}}"> About Artist </router-link>
             </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Nav from '../components/Nav'
import FilterArtistCount from '../components/FilterArtistCount'
export default {
    name: "Artists",
    components: {
        Nav,
        FilterArtistCount
    },
    methods: {
        ...mapActions(['getUser', 'fetchAllArtists']),
    },
    computed: {
        ...mapGetters(['artists']),
        goodArtists(){
            return this.artists.filter(artist => artist._links.thumbnail)
        }
    },
  
     mounted(){
        this.getUser(localStorage.getItem('token'))
       this.fetchAllArtists(70)
    },
    
}
</script>

<style lang="scss" scoped>
    #title-div{
        display: flex;
        justify-content: center;
        h1{
            margin-bottom: 5px; 
        }
    }
     #artwork-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        #selected{
            width:20%;
            height:20%;
            padding: 10px;
            margin: 10px;
            background-color: #666;
            box-shadow: 0px 0px 4px #666
        }
        #artwork{
            width:20%;
            height:20%;
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
        #artwork:hover{
            background-color: #666
        }
</style>