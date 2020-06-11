<template>
    <div class="sticky" id="header-div">
        <h1 id='main-title'>Artify</h1>
            <h3 v-if="!isLoggedIn">Welcome to artify! Login or create an account to save favorited artists and genres</h3>
            <div id="userOptions">
                <div id="login-header" v-if="hideLogin && !isLoggedIn" @click="toggleHideLogin" >
                <h1>Login</h1>
            </div>
            <div id="login-header" v-if="hideLogin && !isLoggedIn" @click="toggleHideSignUp" >
                <h1>Sign Up</h1>
            </div>
            </div>
            <div v-if="isLoggedIn" id="userOptions">
                 <h1 v-if="isLoggedIn">Hello, {{user.full_name}}</h1>
                 <LogOut v-if="isLoggedIn"/>     
            </div>
    </div>
    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import LogOut from './LogOut'
export default {
    name: "Header",
    components: {
        LogOut,
        
    },
    methods: mapMutations(["toggleHideLogin", "toggleHideSignUp"]), 
    computed: mapGetters(['user','hideLogin', 'isLoggedIn', 'hideSignUp']),

}
</script>

<style lang="scss" >

    #userOptions{
        display: flex;
        justify-content: space-between;
    }

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