<template>
    <div>
        <Nav/>
        <div id="artwork-div">
            <div id="info-div">
                <p>{{inspiration.category}}
                {{inspiration.additional_information}}</p>
                {{inspiration.dimensions.in.text}}
                {{inspiration.medium}}
                 {{inspiration.date}}
            </div>
            <div>
            <img :src='inspiration._links.thumbnail.href'/>
            </div>
        </div>
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
    #artwork-div{
        padding: 20px;
        margin: 20px;
        box-shadow: 0px 0px 4px #666;
        display: flex;
        justify-content: space-between;
        #info-div{
            padding: 20px;
            width: 50%;
        }
          img{
                width: 150px;
                height: 150px;
                padding-right: 20px;
        }
    }
</style>