<template>
    <div>
        <Nav/>
        {{inspiration.category}}
        {{inspiration.additional_information}}
        {{inspiration.dimensions.in.text}}
        {{inspiration.date}}
        {{inspiration.medium}}
        <img :src='inspiration._links.thumbnail.href'/>
    </div>
</template>

<script>
import Nav from '../components/Nav'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Inspo',
    components: {
        Nav
    },
    methods: {
        ...mapActions(['fetchArtworks'])
    },
    computed: {
        ...mapGetters(['artworks']),
         inspiration(){
            return this.artworks[(Math.floor((Math.random() *100)+1))]
        }
    },
    async mounted(){
       await this.fetchArtworks()
    }
}
</script>

<style lang="scss">
    
</style>