<template>
    <div>
        <h1>FUCK</h1>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Dashboard',
    methods: {
    ...mapActions(['getUser'])
  },
  mounted(){
      this.getUser()
  }
}
</script>

<style lang="scss" scoped>

</style>