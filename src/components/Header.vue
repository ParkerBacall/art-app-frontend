<template>
    <div class="sticky" id="header-div">
        <h1 id='main-title'>Artify</h1>
            <Title v-if="isLoggedIn"/>
            <div id="login-header" v-if="hideLogin && !isLoggedIn" @click="toggleHideLogin" >
                <h1 >Login</h1>
            </div>
            <LogOut v-if="isLoggedIn"/>
    </div>
    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import LogOut from './LogOut'
import Title from './Title'
export default {
    name: "Header",
    components: {
        LogOut,
        Title
    },
    methods: mapMutations(["toggleHideLogin"]), 
    computed: mapGetters(['hideLogin', 'isLoggedIn']),

}
</script>

<style lang="scss" >

  #hide{
        display: none;
    }
    #header-div{
        background-color: cadetblue;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 0px 4px #666; 
        #login-header:hover{
            color: #333;
            cursor: pointer;
        }
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