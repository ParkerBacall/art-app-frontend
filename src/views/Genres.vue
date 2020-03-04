<template>
    <div>
        <Nav/>
        <div id='title-div'>
            <h1>Genres</h1>
        </div>
         <FilterGenreCount />
        <div id='artwork-grid'>
        <div @click="handleClick(gene, user)" 
        :id="user.genre.map(genre => genre.name).includes(gene.name) ? 'selected' : 'artwork'" 
        v-for="gene in genes" 
        :key="gene.id">
            <img :src = "gene._links.thumbnail.href"/>
            <div id="h3-div">
            <h3>
            {{gene.name}}
            </h3>
            </div>
             <div @click='handleRouterClick' id='link-div'>
             <router-link :to="{ name: 'Read', params: {gene: gene, id: gene.name}}"> About Genre </router-link>
             </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import FilterGenreCount from '../components/FilterGenreCount'
import Nav from '../components/Nav'
export default {
    name: 'Genres',
    components: {
        FilterGenreCount,
        Nav
},
    methods: {
        ...mapActions(['fetchGenes', 'getUser']),
        ...mapMutations(['addSelectedGene', 'removeSelectedGene', 'setSelectedGenes']),
        handleRouterClick(e){
            e.stopImmediatePropagation()
        },
        handleClick(gene, user){
           if (!user.genre.map(genre => genre.name).includes(gene.name)){
                this.addSelectedGene(gene)
                fetch('http://localhost:9001/genres',{
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
               fetch(`http://localhost:9001/genres`,{
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
    computed: mapGetters(['genes', 'user']),
    created(){
        this.getUser(localStorage.getItem('token'))
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