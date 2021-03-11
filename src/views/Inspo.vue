<template>
    <div>
        <div id="artwork-div">
            <div id="info-div">
                <p>{{inspiration.category}}
                {{inspiration.additional_information}}</p>
                {{inspiration.dimensions.in.text}}
                {{inspiration.medium}}
                 {{inspiration.date}}
            </div>
            <div class="image-container">
            <img class="lazyload" data-expand="-10" :data-src='inspiration._links.thumbnail.href'/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Inspo',
    components: {
        
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
        flex-direction: row-reverse;
        justify-content: space-between;
        #info-div{
            padding: 20px;
         
        }
    }
        @media only screen and (max-width: 600px) {
            #artwork-div{
            margin: 10px;
            margin-top: 40px;
                    flex-direction: column-reverse;

            .image-container{
                display: flex;
                justify-content: center;
                width:100%;
                img{
                    width:100%;
                    padding:10px;
                }
            }
            #info-div{
                padding:0px;
                width:100%;
                text-align:center;
            }
            }
        }
</style>