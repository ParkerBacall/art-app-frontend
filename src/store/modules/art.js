const xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODQ2NTY4MjgsImlhdCI6MTU4NDA1MjAyOCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNmFiNzNjYmEzMjE3MDAwZTYwYTJmZCJ9.Z41l49vRa_YneaMUtdxECUm4kwOcxXxZGvlp3DQFnrs'

const state= {
    genes:[],
    artists:[],
    artworks: [],
    genreArtists: [],
    exploreArtists: [],
    exploreSimilarArtists: [],
    similarArtists: [],
    readGenre: {},
    readArtist: {}
}

const getters={
    genes: (state) => state.genes,
    artists: (state) => state.artists,
    genreArtists: (state) => state.genreArtists,
    exploreArtists: (state) => state.exploreArtists,
    similarArtists: (state) => state.similarArtists,
    exploreSimilarArtists: (state) => state.exploreSimilarArtists,
    readGenre: (state) => state.readGenre,
    readArtist: (state) => state.readArtist,
    artworks : (state) => state.artworks
}

const actions = {
     async fetchGenes({commit}, count){
        await fetch(`https://api.artsy.net/api/genes?size=${count}`,{
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
        .then(res =>  res.json())
        .then(genes => commit('addGenes', genes._embedded.genes))
    },
    async fetchArtworks({commit}){
      await fetch(`https://api.artsy.net/api/artworks?size=100`,{
          method: 'GET',
          headers: {
            'X-Xapp-Token': xappToken,
            'Accept': 'application/vnd.artsy-v2+json'
          }
        })
      .then(res =>  res.json())
      .then(artwork => commit('addArtwork', artwork._embedded.artworks))
  },
    async fetchAllArtists({commit}, count){
        await fetch(`https://api.artsy.net/api/artists?size=${count}`,{
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
          })
        .then(res =>  res.json())
        .then(artists => commit('addArtists', artists._embedded.artists))
    },
    filterGenreCount({commit}, event){
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
    filterArtistCount({commit}, event){
        const count = parseInt(
            (event.target.options[event.target.options.selectedIndex]).innerText
            )     
            fetch(`https://api.artsy.net/api/artists?size=${count}`,{
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
        })
             .then(res =>  res.json())
             .then(artists => commit('addArtists', artists._embedded.artists))
},
    async fetchArtists({commit}, url){
        await fetch(url, {
            method: 'GET',
            headers: {
              'X-Xapp-Token': xappToken,
              'Accept': 'application/vnd.artsy-v2+json'
            }
        })
        .then(res => res.json())
        .then(artists => commit('addExploreArtists', artists._embedded.artists))
    },
}

const mutations= {
    addGenes: (state, genes) => state.genes = genes,
    addArtists: (state, artists) => state.artists = artists,
    addGenreArtists: (state, genes) => state.genreArtists = genes,
    addExploreArtists: (state, artists) => artists.map(artist => !state.exploreArtists.map(artist=>artist.id).includes(artist.id) ? state.exploreArtists.push(artist) : null),
    addReadData: (state, genre) => state.readGenre = genre,
    addReadArtist: (state, artist) => state.readArtist = artist,
    addArtwork: (state, artwork) => state.artworks = artwork,
    addSimilarArtists: (state, artists) => state.similarArtists = artists
}

export default {
    state,
    getters,
    actions,
    mutations
}