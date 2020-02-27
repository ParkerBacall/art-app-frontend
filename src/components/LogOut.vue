<template>
    <div id="log-out-div">
        <button @click="handleClick">Log out</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "LogOut",
    methods: {
        ...mapMutations(['toggleLogin', 'toggleHideLogin', 'clearUser']),
        handleClick(){
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
    
    }
</style>