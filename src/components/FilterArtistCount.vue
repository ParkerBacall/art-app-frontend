<template>
    <div id="filter-div">
          <select @change="filterArtistCount($event)">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
             <option value="1000">1000</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'FilterArtistCount',
    methods: mapActions(["filterArtistCount"])
}
</script>

<style lang="scss">
    #filter-div{
        display: flex;
        justify-content: center;
        padding: 15px;
    }
</style>