const state={

    user: {name: "placeholder", artists: [], genre: []},
    
}

const getters={
    user: (state) => state.user,
   
}

const actions={


}

const mutations={
   
    addSelectedGene: (state, selectedGene) =>  state.user.genre.unshift(selectedGene),
    removeSelectedGene: (state, gene) => state.user.genre = state.user.genre.filter(selectedGene => gene.name !== selectedGene.name),
    addSelectedArtist: (state, selectedArtist) => state.user.artists.unshift(selectedArtist),
    removeSelectedArtist: (state, artist) => state.user.artists = state.user.artists.filter(selectedArtist => artist.name !== selectedArtist.name),
   
}


export default {
    state,
    getters,
    actions,
    mutations
}