<template>
    <div>
        <div id='grid'>
        <h1>grid</h1>
        </div>
        <div id='artwork-grid'>
        <div v-for="artwork in artworks" :key="artwork.id">
            {{artwork.title}}
            <img :src = "artwork._links.thumbnail.href"/>
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
    #grid{
        display: flex;
        justify-content: center;
        #artwork-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        }
    }
</style>