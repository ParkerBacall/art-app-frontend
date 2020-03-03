const xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODM0NDk2NzQsImlhdCI6MTU4Mjg0NDg3NCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNTg0YmNhY2E3N2E2MDAxMjdjM2MyMCJ9.Hup__6PY57_H_S9A6mkl4_11Ll60japGzKl9tG4wbfg';

const state= {
    genes:[],
    exploreArtists: [],
    exploreSimilarArtists: [],
    similarArtists: []
}

const getters={
    genes: (state) => state.genes,
    exploreArtists: (state) => state.exploreArtists,
    similarArtists: (state) => state.exploreArtists.map(Artist => Artist._links.similar_artists.href),
    exploreSimilarArtists: (state) => state.exploreSimilarArtists
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
},
    fetchArtists({commit}, url){
        fetch(url, {
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
        })
        .then(res => res.json())
        .then(artists => commit('addArtists', artists._embedded.artists))
    },
    fetchSimilarArtists({commit}, url){
        console.log('hit')
        fetch(url, {
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
        })
        .then(res => res.json())
        .then(artists => console.log(artists._embedded.artists))
        .then(artists => commit('addSimilarArtists', artists._embedded.artists))
    }

}

const mutations= {
    addGenes: (state, genes) => state.genes = genes,
    addArtists: (state, artists) => state.exploreArtists = [...state.exploreArtists, ...artists],
    addSimilarArtists: (state, artists) => state.exploreSimilarArtists = [...state.exploreSimilarArtists, ...artists]
}

export default {
    state,
    getters,
    actions,
    mutations
}