<template>
    <div>
     
    </div>
</template>

<script>
 
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Home",
    components:{
    
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