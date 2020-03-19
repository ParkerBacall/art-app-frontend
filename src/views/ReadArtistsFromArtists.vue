<template>
    <div>
       <Nav/>
       <div id="artist-info">
        <div>
       <h1> {{readArtist.name}}</h1>
       <h3>{{readArtist.hometown}}</h3>
       <p>{{readArtist.gender}}</p>
       <p>{{readArtist.birthday}} - {{readArtist.deathday}}</p>
       </div>
       <img :src=
       readArtist._links.thumbnail.href
        alt="">
        </div>
        <div id='artists'>
             <div id="grid-header">
                <h2>Similar Artists:</h2>
            </div>
        <div v-for="artist in similarArtists" :key="artist.id" id ="artist">
            <img :src = "artist._links.thumbnail.href"/>
            <h3>
            {{artist.name}}
            </h3>
            <div >
                <router-link :to="{ name: 'ReadArtists', params: {gene: artist, id: artist.name}}"> About Arist </router-link>
            </div>
           
        </div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav'
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    name: 'ReadArtistsFromArtists',
    components: {
        Nav
        },
        methods:{
            ...mapMutations(['addReadArtist', 'addSimilarArtists']),
            ...mapActions(['getUser']),
        },
        computed: mapGetters(['xappToken','readArtist', 'similarArtists']),
    mounted(){
        this.getUser(localStorage.getItem("token"))
        this.addReadArtist(this.$route.params.gene)
        fetch(this.$route.params.gene._links.similar_artists.href, {
             method: 'GET',
            headers: {
              'X-Xapp-Token': this.xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
          .then(response => response.json())
          .then(res => this.addSimilarArtists(res._embedded.artists))
    }

}
</script>

<style lang="scss" scoped>
    #artist-info{
        margin-top: 100px;
        margin: 40px;
        padding: 15px;
        box-shadow: 0px 0px 4px #666;
        display: flex;
        justify-content: space-between;
        img{
                width: 150px;
                height: 150px;
                padding-right: 20px;
        }
    }
    #artists{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
    #grid-header{
        padding-top: 0px;
       width: 100%;
       display: flex;
       justify-content: center;
    }
      #artist{
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
            
    }
            
</style>