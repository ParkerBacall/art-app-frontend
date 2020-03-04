<template>
    <div>
        <Nav/>
        <h1>Artists</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "Artists",
    methods: {
        ...mapActions(['getUser']),
    },
    mounted(){
        this.getUser(localStorage.getItem('token'))
    }
}
</script>

<style lang="scss" scoped>
    
</style>