<template>
    <div id='title'>
        <h1>{{user.full_name}}</h1>
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
        padding-top: 130px;
    }
</style>