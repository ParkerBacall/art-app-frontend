const state={
    isLoggedIn: false,
    user: {}
}

const getters={
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user
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
    loggedInUser: (state, user) => state.user = user
}


export default {
    state,
    getters,
    actions,
    mutations
}