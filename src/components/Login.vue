<template>
    <div id='login-panel-container'>
    <div :id = "hideLogin ? 'hide' : 'login-panel'">
        <div  id="close">
        <div @click="toggleHideLogin" class="fas fa-times-circle">
         </div>
         </div>
        <h1>login</h1>
        <form @submit='handleSubmit'>
        <input v-model="user.email" type="text" placeholder="E-mail">
        <input v-model="user.password" type="password" placeholder="Password">
        <input type="submit">
        </form>
        <div> 
            <h3 @click="handleClick" id="sign-up-link">Sign up</h3>
        </div>
    </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: 'Login',
 
     data(){
        return{
            user:{
            email: '',
            password: ''
            }
        }
    },
    methods: {
      ...mapActions(["fetchArtists","postLogin", "getUser"]),
      ...mapMutations(["loggedInUser", "toggleLogin", "toggleHideLogin", 'toggleHideSignUp', 'sendErrorMessage', '']),
      addExplore(){
          ([...this.user.genre.map(genre => genre.artists), ...this.user.artists.map(artist => artist.similar_artists)]).map(artist =>  {
                console.log(artist)
                // this.fetchArtists(artist)
            })  
      },
      async loginFunctions(token){
          await this.getUser(token)
          localStorage.setItem('token', token)
          this.toggleLogin()
      },
      handleSubmit(event){
        event.preventDefault()
        fetch('https://artify-backend.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.user)
        })
        .then(res => res.json())
        .then(res => { if(res.token){
            this.loginFunctions(res.token)
        } else{
            alert(res.error)
        }
        })
      },
      handleClick(){
          this.toggleHideLogin()
          this.toggleHideSignUp()
      }
    },
    computed: mapGetters(["user", "hideLogin", 'errorMessage'])
   
}
</script>

<style lang="scss" scoped>

    h3{
        padding: 0px;
    }
  
    #sign-up-link:hover{
        color: cadetblue;
        cursor: pointer;
    }

    #hide{
        position: absolute;
        display: flex;
        opacity: 0;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0px 0px 5px #666;
        width: 255px;
        transition: all 0.5s;

        #close{
        padding-top: 12px;
        font-size: 25px;
        color: red;
        position: static;
        padding-left: 210px;
    }
    

    h1{
        margin-top: 0px;
        color: cadetblue;
    }
    form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

    input{
        padding: 15px;
        margin: 10px;
        width: 60%;
    }
    }
    router-link{
        padding-top: 20px; 
        padding-bottom: 10px;
    }
    }

    #login-panel-container{
        float: center;
        // padding-top: 120px;
        // display: flex;
        // justify-content: center;

    }
    #login-panel{
        margin-top:120px;
        margin-left: 50px;
        position: absolute;
        background-color: white;
        display: flex;
        opacity: 1;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0px 0px 5px #666;
        width: 255px;
        transition: all 0.5s;

    #close{
        padding-top: 12px;
        font-size: 25px;
        color: red;
        position: static;
        padding-left: 210px;
    }
    .fa-times-circle:hover{
        color: black;
        cursor: pointer;
    }

    h1{
        margin-top: 0px;
        color: cadetblue;
    }
    form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

    input{
        padding: 15px;
        margin: 10px;
        width: 60%;
    }
    }
    router-link{
        padding-top: 20px; 
        padding-bottom: 10px;
    }
    }
</style>