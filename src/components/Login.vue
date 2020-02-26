<template>
    <div id=login-panel>
        <h1>login</h1>
        <form @submit='handleSubmit'>
        <input v-model="user.email" type="text" placeholder="=E-mail">
        <input v-model="user.password" type="password" placeholder="Password">
        <input type="submit">
        </form>
        <router-link to="/sign-up"> Sign up! </router-link>
    </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
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
      ...mapActions(["postLogin", "getUser"]),
      ...mapMutations(["loggedInUser", "toggleLogin"]),
      holyFuckinShit(token){
          this.getUser(token)
          localStorage.setItem('token', token)
      },
      handleSubmit(event){
        event.preventDefault()
        fetch('http://localhost:9001/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.user)
        })
        .then(res => res.json())
        .then(res => this.holyFuckinShit(res.token))
        .then(this.toggleLogin)
      }
    },
   
}
</script>

<style lang="scss" scoped>
    #login-panel{
        float: right;
        width: 20%;
        box-shadow: 0px 0px 5px #666;

    h1{
        padding-left: 55px;
        color: cadetblue;
    }
    form{

    input{
        padding: 15px;
        margin: 10px;
        width: 60%;
    }
    }
    }
</style>