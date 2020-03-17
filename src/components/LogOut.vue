<template>
    <div id="log-out-div">
        <div @click="handleClick">
            <h1>Log out</h1>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "LogOut",
    methods: {
        ...mapMutations(['toggleLogin', 'toggleHideLogin', 'clearUser']),
        handleClick(){
            this.$router.push('/')
            localStorage.removeItem('token')
            this.toggleLogin()
            this.toggleHideLogin()
            this.clearUser()
        }
    },
}
</script>

<style lang="scss" scoped>
    #log-out-div{
        padding-right: 35px;
    }

    #log-out-div:hover{
            color: #333;
            cursor: pointer;
    }

    h1{
        font-size: 3vh;
    }
</style>