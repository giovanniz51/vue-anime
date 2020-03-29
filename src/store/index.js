import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animes: [],
    anime: {
      info: null,
      videos: []
    }
  },
  mutations: {
    SET_ANIMES(state, animes){
      state.animes = animes
    },
    SET_ANIME(state, anime){
      state.anime.info = anime
    },
    SET_ANIME_VIDEO(state, videos){
      state.anime.videos = videos
    }
  },
  getters: {
    getAnime(state){
      return state.anime
    },
    getAnimeVideos(state){
      return state.anime.videos
    }
  },
  actions: {
    setAnimes(context){
      axios.get("https://cors-anywhere.herokuapp.com/https://private-anon-e5d408a1f8-jikan.apiary-proxy.com/v3/top/anime/1/tv")
        .then(res => context.commit("SET_ANIMES", res.data.top))
    },
    setAnime(context, id){
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/anime/${id}`)
        .then(res => {
          context.commit("SET_ANIME", res.data) 
          return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${res.data.title}&key=AIzaSyAajwnLWcSuJbBLGC_M-7HyDJAEM3NFeLk`)
        }).then(res => context.commit("SET_ANIME_VIDEO", res.data.items))
          .catch(e => console.log(e))
    }
  },
  modules: {
  }
})
