<template>
    <div>
        <Header/>
         <Nav/>
       <div id='title-div'>
       <h1> {{readGenre.name}}</h1>
       </div>
        <p>{{readGenre.description}}</p>
        <div id="artists">
            <div id="grid-header">
                <h2>Artists:</h2>
            </div>
        <div @click="handleClick(gene, user)" v-for="gene in genreArtists" :key="gene.id" 
        :id="user.artists.map(artist => artist.name).includes(gene.name) ? 'selected' : 'artist'">
            <img :src = "gene._links.thumbnail.href"/>
            <h3>
            {{gene.name}}
            </h3>
             <router-link :to="{ name: 'ReadArtists', params: {gene: gene, id: gene.name}}"> About Arist </router-link>
        </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
import {mapActions, mapMutations, mapGetters} from 'vuex'
export default {
    name: 'Read',
    components: {
        Header,
        Nav
        },
        methods:{
             ...mapActions(['getUser', 'addSelectedGene', 'removeSelectedGene']),
             ...mapMutations(['addReadData','addGenreArtists','toggleLogin', 'toggleHideLogin']),
            toggleBaseState(){
            this.toggleLogin()
            this.toggleHideLogin()
            },
              handleClick(gene, user){
           if (!user.genre.map(genre => genre.name).includes(gene.name)){
                this.addSelectedGene(gene)
                fetch('https://artify-backend.herokuapp.com/artists',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify ({
                        name: gene.name, 
                        artworks: gene._links.artworks.href,
                        artists: gene._links.artists.href,
                        user_id: user.id
                        })
                    })
                        .then(response => response.json())
                        .then(console.log)
           } else{
               this.removeSelectedGene(gene)
               fetch(`https://artify-backend.herokuapp.com/artists`,{
                   method: 'DELETE',
                   headers:{
                       'content-type': 'application/json'
                   },
                   body: JSON.stringify ({name: gene.name, user_id: user.id})
               })
               .then(res => res.json())
               .then(console.log)
           }

        }
            
        },
        computed: mapGetters(['genreArtists', 'readGenre', 'user', 'xappToken']),
    mounted(){
        this.getUser(localStorage.getItem('token'))
        this.addReadData(this.$route.params.gene)    
        fetch(this.$route.params.gene._links.artists.href, {
             method: 'GET',
            headers: {
              'X-Xapp-Token': this.xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
          .then(response => response.json())
          .then(res => this.addGenreArtists(res._embedded.artists))
    }
}
</script>

<style lang="scss" scoped>

        #selected{
            width:20%;
            height:20%;
            padding: 10px;
            margin: 10px;
            background-color: #666;
            box-shadow: 0px 0px 4px #666
        }
    h1{
        padding-top: 15px;
    }
    p{
        padding: 10px;
    }
    #title-div{
         display: flex;
        justify-content: center;
        flex-wrap: wrap;
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
      #artist:hover{
            background-color: #666
        }
            
</style>