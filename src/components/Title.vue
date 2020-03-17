<template>
    <div id='title'>
        <h2>  {{
            this.$route.name === 'Inspo' ? "Art insiration of the day!" :
            this.$route.name === 'Genres' ? "Select genres you like to add artists in that genre to your explore" :
            this.$route.name === 'Artists' ? "Select artist you like to add similar artists to explore" :
            this.$route.name === 'Explore' ? "Explore a feed of artists based on you influences!" 
            : null}}</h2>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: "Title",
    computed: mapGetters(['user'])
}
</script>

<style lang="scss" scoped>

    #title{
        display: flex;
        justify-content: center;
    }
    h2{
        font-size: 2.2vw;
    }
</style>