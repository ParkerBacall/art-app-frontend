<template>
    <div>
        <Login v-if="!isLoggedIn"/>
        <Sign-up v-if="!hideSignUp"/>
    </div>
</template>

<script>
 import Login from "../components/Login"
 import SignUp from "../components/SignUp"
import { mapGetters } from 'vuex'
export default {
    name: "Home",
    components:{
        Login,
        SignUp
    },
    methods:{

    },
    computed: mapGetters(['hideSignUp']),
}
</script>

<style lang="scss" scoped>
    
</style>