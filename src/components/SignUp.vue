<template>
  <div id='sign-up-panel-container'>
    <div id='sign-up-panel'>
            <div id='backbtn'>
               <div @click="handleClick" class="fas fa-times-circle" /> 
            </div>
      <div id=header-div>
          <h1>sign up</h1>
      </div>
        <form @submit="handleSubmit">
        <input v-model="user.full_name" type="text" placeholder="Full Name">
        <input v-model="user.email" type="text" placeholder="E-mail">
        <input v-model="user.password" type="password" placeholder="Password">
        <input type="submit">
        </form>
    </div>
  </div> 
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "SignUp",
    data(){
        return{
          user: {
            full_name: '',
            email: '',
            password: ''
          }
        }
    },
    methods: {      
    ...mapMutations(['toggleLogin','getUser', 'toggleHideLogin','toggleHideSignUp']),
       LoginFunctions(token){
        this.getUser(token)
        .then(this.$router.push('/genres'))
        this.toggles()
        localStorage.setItem("token", token)
      },
      toggles(){
        this.toggleLogin()
        this.toggleHideLogin()
        this.toggleHideSignUp()
      },
      handleClick(){
        this.toggleHideSignUp()
      },
      async handleSubmit(event){
        event.preventDefault()
        fetch('http://localhost:9001/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.user)
        })
        .then(res => res.json())
        .then(res=> this.LoginFunctions(res.token))
      },
    }
}
</script>

<style lang="scss" scoped>
    #backbtn{
      width: 100%;
      display: flex;
      justify-content: flex-start;
       font-size: 25px;
    }
     .fa-times-circle{
        color: red;
    }
    .fa-times-circle:hover{
        color: black;
    }

    #sign-up-panel-container{
      position: absolute;
      display: flex;
      justify-content: center;
      
    #sign-up-panel{
       margin-top: 6%;
       margin-left: 36%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 900px;
        box-shadow: 0px 0px 5px #666;
        padding: 10px;
        background-color: white;
        #header-div{
          width: 100%;
          display: flex;
          justify-content: center;
        }
        input{
          width: 100%;
          height: 45px;
          margin: 10px;
        }
    }
    }
</style>