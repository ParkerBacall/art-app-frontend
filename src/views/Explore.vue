<template>
    <div>
        <Header/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header'
export default {
    name: 'Explore',
    components: {
        Header
    },
    computed: mapGetters(['selectedGenes']),
 
}
</script>

