<template>
    <div>
        <button @click="handleClick">Log out</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "LogOut",
    methods: {
        ...mapMutations(['toggleLogin']),
        handleClick(){
            localStorage.removeItem('token')
            this.toggleLogin()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>