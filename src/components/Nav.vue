<template>
    <div id='nav-div'>
             <router-link to="/read"> Artists </router-link>
             <router-link to="/read"> Explore </router-link>
    </div>
</template>

<script>
export default {
     name: "Nav"
}
</script>

<style lang="scss" scoped>
    #nav-div{
         padding-top: 90px;
        // padding-bottom: 25px;
         display: flex;
         justify-content: space-evenly;
    }
</style>