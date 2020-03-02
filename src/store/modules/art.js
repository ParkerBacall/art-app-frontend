const xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODM0NDk2NzQsImlhdCI6MTU4Mjg0NDg3NCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNTg0YmNhY2E3N2E2MDAxMjdjM2MyMCJ9.Hup__6PY57_H_S9A6mkl4_11Ll60japGzKl9tG4wbfg';


const state= {
    genes:[],
    selectedGenes:[]
}

const getters={
    genes: (state) => state.genes,
    selectedGenes: (state) => state.selectedGenes
}

const actions = {
    fetchGenes({commit}, count){
        fetch(`https://api.artsy.net/api/genes?size=${count}`,{
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
        .then(res =>  res.json())
        .then(genes => commit('addGenes', genes._embedded.genes))
    },
    filterCount({commit}, event){
        const count = parseInt(
            (event.target.options[event.target.options.selectedIndex]).innerText
            )       
            fetch(`https://api.artsy.net/api/genes?size=${count}`,{
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
        })
             .then(res =>  res.json())
             .then(genes => commit('addGenes', genes._embedded.genes))
}
}

const mutations= {
    addGenes: (state, genes) => state.genes = genes,
    addSelectedGene: (state, selectedGene) =>  state.selectedGenes.unshift(selectedGene),
    setSelectedGenes: (state, genes) => state.selectedGenes = genes,
    removeSelectedGene: (state, gene) => state.selectedGenes = state.selectedGenes.filter(selectedGene => gene.id !== selectedGene.id)
}

export default {
    state,
    getters,
    actions,
    mutations
}