<template>
    <div id='title'>
        <h2> Hello {{user.full_name}}, please select your influences</h2>
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
        padding-top: 100px;
        display: flex;
        justify-content: center;
    }
</style>