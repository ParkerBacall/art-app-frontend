<template>
    <div>
        <div id='artwork-grid'>
        <div @click="handleClick" id='artwork' v-for="artwork in artworks" :key="artwork.id">
            <img :src = "artwork._links.thumbnail.href"/>
            <div id="h3-div">
            <h3>
            {{artwork.name}}
            </h3>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'InfluencesGrid',
    methods: {
        ...mapActions(['fetchArt']),
        handleClick(e){
            console.log(e.target.id)
        }
    }, 
    computed: mapGetters(['artworks']),
    mounted(){
        this.fetchArt()
    }
}
</script>

<style lang="scss" scoped>
  
        #artwork-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        #selected{
             width:20%;
            height:20%;
            padding: 20px;
            margin: 10px;
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
        }
        #artwork:hover{
            background-color: #666
        }
    
</style>