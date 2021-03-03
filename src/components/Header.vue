<template>
    <div class="sticky" id="header-div">
        <a href="/" class="router-link logo">
        <h1 id='main-title'>Artify</h1>
        </a>
         
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

  .logo{
      text-decoration: none;
      color:black!important;
  }

  #hide{
        display: none;
    }
    #header-div{
        background-color: cadetblue;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 0px 4px #666; 
        z-index:99999999999999;
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

    @media only screen and (max-width: 600px) {
 #header-div{
     flex-direction: column;
     #main-title{
         text-align:center;
         margin-bottom: 0px;
     }
 }
}

</style>