<template>
    <div>
        <div id='artwork-grid'>
        <div id='artwork' v-for="artwork in artworks" :key="artwork.id">
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
    methods: mapActions(['fetchArt']),
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
        #artwork{
            width:20%;
            height:20%;
            padding: 20px;
            img{
                width: 250px;
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
            box-shadow: 0px 0px 4px #666
        }
    }
</style>