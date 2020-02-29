<template>
    <div>
          <select @change="filterCount($event)">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'FilterCount',
    methods: mapActions(["filterCount"])
}
</script>

<style lang="scss">

</style>