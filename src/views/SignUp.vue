<template>
  <div id='sign-up-panel-container'>
    <div id='sign-up-panel'>
       
            <div id='backbtn'>
               <router-link class="fas fa-chevron-circle-left" to="/"> 
              </router-link>
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
    ...mapMutations(['toggleLogin','getUser', 'toggleHideLogin']),
      LoginFunctions(token){
        this.$router.push('/')
        this.toggleHideLogin()
        localStorage.setItem("token", token)
        this.getUser(token)
      },
      handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:9001/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.user)
        })
        .then(res => res.json())
        .then(res=> this.LoginFunctions(res.token))
      }

    }
}
</script>

<style lang="scss" scoped>
.fa-chevron-circle-left:hover{
  color: black
}
fa-chevron-circle-left{

}
a {  
  text-decoration: none
  }
a:hover{

}
    #sign-up-panel-container{
      display: flex;
      justify-content: center;
    #sign-up-panel{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 50%;
        box-shadow: 0px 0px 5px #666;
        padding: 10px;
        #backbtn{
          position: absolute;
          padding-right: 680px;
          font-size: 25px;
        }
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