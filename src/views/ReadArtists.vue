<template>
    <div>
       <Header/>
       <div id="artistInfo">
       <h1> {{$route.params.gene.name}}</h1>
       <h3>{{$route.params.gene.hometown}}</h3>
       <p>{{$route.params.gene.gender}}</p> 
       <p>{{$route.params.gene.birthday}} -  {{$route.params.gene.deathday}}</p>
       <img :src=
       this.$route.params.gene._links.thumbnail.href
        alt="">
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: 'ReadArtists',
    props: ["gene", "id"],
    components: {
        Header
        },
        methods:{
            ...mapMutations(['addGenes']),
         
        },
        computed: mapGetters(['genes']),
    mounted(){
        console.log(this.$route.params.gene)
        fetch(this.$route.params.gene._links.similar_artists.href, {
             method: 'GET',
            headers: {
              'X-Xapp-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODM0NDk2NzQsImlhdCI6MTU4Mjg0NDg3NCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNTg0YmNhY2E3N2E2MDAxMjdjM2MyMCJ9.Hup__6PY57_H_S9A6mkl4_11Ll60japGzKl9tG4wbfg',
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
          .then(response => response.json())
          .then(res => res._embedded.artists)
          .then(console.log)
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