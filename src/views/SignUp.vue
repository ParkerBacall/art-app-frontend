<template>
  <div id='sign-up-panel-container'>
    <div id='sign-up-panel'>
        <h1>sign up</h1>
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
    ...mapMutations(['toggleLogin']),
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
        .then(res=> localStorage.setItem('token', res.token))
        .then(this.toggleLogin)
        .then(this.$router.push('/'))
      }

    }
}
</script>

<style lang="scss" scoped>
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
        input{
          width: 100%;
          height: 45px;
          margin: 10px;
        }
    }
    }
</style>