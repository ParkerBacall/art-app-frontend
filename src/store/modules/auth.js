const state={
    hideLogin: true,
    isLoggedIn: false,
    hideSignUp: true,
    user: {},
}

const getters={
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
    hideLogin: (state) => state.hideLogin,
    hideSignUp: (state) => state.hideSignUp,
    artists: (state) => state.user.genre.map(genre => genre.artists)
    
}

const actions={
     getUser({commit}, token){

        fetch('http://localhost:9001/users',{
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
    removeSelectedGene: (state, gene) => state.user.genre = state.user.genre.filter(selectedGene => gene.name !== selectedGene.name)
}


export default {
    state,
    getters,
    actions,
    mutations
}