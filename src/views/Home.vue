<template>
    <div>
        <Login v-if="!isLoggedIn"/>
        <Sign-up v-if="!isLoggedIn"/>
    </div>
</template>

<script>
 import Login from "../components/Login"
 import SignUp from "../components/SignUp"
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Home",
    components:{
        Login,
        SignUp
    },
    methods:{
    ...mapActions(['getUser']),
    checkLoggedin(){
      localStorage.token
      ?
      this.$router.push('/')
      :
      null
      }
    },
    computed: mapGetters(['hideSignUp', 'isLoggedIn']),
    created(){
       
    },
    mounted(){
        this.checkLoggedin()
    }
}
</script>

<style lang="scss" scoped>
    
</style>