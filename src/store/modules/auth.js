const state={
    hideLogin: true,
    isLoggedIn: false,
    hideSignUp: true,
    user: {},
    test: true
}

const getters={
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
    hideLogin: (state) => state.hideLogin,
    hideSignUp: (state) => state.hideSignUp,
}

const actions={
     async getUser({commit}, token){

       await fetch('https://artify-backend.herokuapp.com/users',{
            method: 'GET',
            headers:{
                authorization: `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(user => commit('loggedInUser', user))
    },
   

}

const mutations={
    toggleLogin: (state) => state.isLoggedIn = !state.isLoggedIn,
    loggedInUser: (state, user) => state.user = user,
    toggleHideLogin: (state) => state.hideLogin = !state.hideLogin,
    clearUser: (state) => state.user = {},
    toggleHideSignUp: (state) => state.hideSignUp = !state.hideSignUp,
    addSelectedGene: (state, selectedGene) =>  state.user.genre.unshift(selectedGene),
    removeSelectedGene: (state, gene) => state.user.genre = state.user.genre.filter(selectedGene => gene.name !== selectedGene.name),
    addSelectedArtist: (state, selectedArtist) => state.user.artists.unshift(selectedArtist),
    removeSelectedArtist: (state, artist) => state.user.artists = state.user.artists.filter(selectedArtist => artist.name !== selectedArtist.name),
    toggleTest: (state) => state.test = !state.test
}


export default {
    state,
    getters,
    actions,
    mutations
}