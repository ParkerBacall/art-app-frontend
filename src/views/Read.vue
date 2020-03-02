<template>
    <div>
        <Header/>
       <h1> {{$route.params.gene.name}}</h1>
        {{$route.params.gene.description}}
        <div id="artists">
        <div @click="logInfo(gene)" v-for="gene in genes" :key="gene.id" id ="artist">
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
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: 'Read',
    props: ["gene", "id"],
    components: {
        Header
        },
        methods:{
            ...mapMutations(['addGenes']),
             ...mapMutations(['setSelectedGenes','toggleLogin', 'toggleHideLogin']),
            toggleBaseState(){
            this.toggleLogin()
            this.toggleHideLogin()
            },
            logInfo(gene){
                console.log(gene._links.artworks)
            }
        },
        computed: mapGetters(['genes']),
    mounted(){
        // this.toggleBaseState(),
        fetch(this.$route.params.gene._links.artists.href, {
             method: 'GET',
            headers: {
              'X-Xapp-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODM0NDk2NzQsImlhdCI6MTU4Mjg0NDg3NCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNTg0YmNhY2E3N2E2MDAxMjdjM2MyMCJ9.Hup__6PY57_H_S9A6mkl4_11Ll60japGzKl9tG4wbfg',
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
          .then(response => response.json())
          .then(res => this.addGenes(res._embedded.artists))
    }
}
</script>

<style lang="scss" scoped>
    h1{
        padding-top: 80px;
    }
    #artists{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
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