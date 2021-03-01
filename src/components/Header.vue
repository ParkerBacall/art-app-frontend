<template>
    <div class="sticky" id="header-div">
        <h1 id='main-title'>Artify</h1>
         
        <Nav/>  
        <div class="user-div">   
        <!-- <i class="far fa-user"></i> -->
        </div>

    </div>
    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Nav from './Nav'
export default {
    name: "Header",
    components: {
        Nav,
        
    },
    methods: mapMutations(["toggleHideLogin", "toggleHideSignUp"]), 
    computed: mapGetters(['user','hideLogin', 'isLoggedIn', 'hideSignUp']),

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
    .user-div{
    width: 211px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    }
    .fa-user{
        margin-right:40px;
    }
</style>