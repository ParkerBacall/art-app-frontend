<template>
    <div id='nav-div'>
             <router-link to="/artists"> Artists </router-link>
             <router-link to="/explore"> Explore </router-link>
             <router-link to="/genres"> Genres </router-link>
             <router-link to="/art-inspo-of-the-day"> Inspo </router-link>
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
         display: flex;
         justify-content: space-evenly;
    }
</style>