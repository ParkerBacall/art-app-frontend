<template>
    <div>
        <h3>{{errorMessage}}</h3>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
         computed: mapGetters([ 'errorMessage'])
    }
</script>

<style lang="scss" scoped>
    div{
        color: red;
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>