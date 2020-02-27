<template>
    <div class="sticky" id="header-div">
        <h1>Cool Art App</h1>
            <button v-if="hideLogin" @click="toggleHideLogin" >login</button>
            <LogOut v-if="isLoggedIn"/>
    </div>
    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import LogOut from './LogOut'
export default {
    name: "Header",
    components: {
        LogOut
    },
    methods: mapMutations(["toggleHideLogin"]), 
    computed: mapGetters(['hideLogin', 'isLoggedIn']),
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
  #hide{
        display: none;
    }
    #header-div{
        background-color: cadetblue;
        display: flex;
        justify-content: space-between;
    }


    .sticky{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        h1{
            padding-left: 50px;
            padding-right: 50px;
        }
    }
    .sticky + .content {
    padding-top: 102px;
    }

</style>