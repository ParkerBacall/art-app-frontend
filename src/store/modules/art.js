const state= {
    artworks:[],
}

const getters={
    artworks: (state) => state.artworks
}

const actions = {
    fetchArt({commit}){
        fetch('http://localhost:9001/genes')
        .then(res =>  res.json())
        .then(artworks => commit('addArtworks', artworks))
    }
}

const mutations= {
    addArtworks: (state, artworks) => state.artworks = artworks
}

export default {
    state,
    getters,
    actions,
    mutations
}