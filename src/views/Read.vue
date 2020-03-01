<template>
    <div>
        {{$route.params.gene.name}}
        {{$route.params.gene.description}}
        {{$route.params.gene._links.artists.href}}
    </div>
</template>

<script>
export default {
    name: 'Read',
    props: ["gene", "id"],
    mounted(){
        fetch(this.$route.params.gene._links.artists.href, {
             method: 'GET',
            headers: {
              'X-Xapp-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODM0NDk2NzQsImlhdCI6MTU4Mjg0NDg3NCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNTg0YmNhY2E3N2E2MDAxMjdjM2MyMCJ9.Hup__6PY57_H_S9A6mkl4_11Ll60japGzKl9tG4wbfg',
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
          .then(response => response.json())
          .then(console.log)
    }
}
</script>

<style lang="scss" scoped>

</style>