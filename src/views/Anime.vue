<template>
  <div class="anime">
    <div class="container bg-white p-3 rounded my-5">
      <div class="row">
        <div class="col-12 col-md-3">
          <img :src="anime.image_url" class="img-fluid my-3" style="display: block; margin: 0 auto"></img>
        </div>
        <div class="col-12 col-md-9">
          <h3 class="my-3">{{anime.title}}</h3>
          <hr>
          <p>Genre: <span v-for="g in anime.genres"><a :href="g.url" target="_blank">{{g.name}} </a></span></p>
          <p>Episodes: <span>{{anime.episodes}}</span></p>
          <p class="lead">{{anime.background}}</p>
          <h3>Trailers</h3>
          <hr>
          <div class="row">
            <div class="col-12 col-md-6" v-for="v in youtubeVideos">
              <iframe :key="v.id.videoId" width="100%" height="315" :src="'https://www.youtube.com/embed/' + v.id.videoId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Hero from "@/components/Hero"
  export default {
    props: ["id"],
    components: {
      Hero
    },
    watch: {
      $route(to, from, next) {
        this.getContent(to.params.id)
      }
    },
    data(){
      return {
        anime: null,
        youtubeVideos: null
      }
    },
    methods: {
      getContent(id){
        axios.get(`https://api.jikan.moe/v3/anime/${id}`)
          .then(res => {
            console.log(res.data)
            this.anime = res.data
            return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${res.data.title}&key=AIzaSyAajwnLWcSuJbBLGC_M-7HyDJAEM3NFeLk`)
          }).then(res => this.youtubeVideos = res.data.items)
            .catch(e => console.log(e))
        }
    },
    mounted(){
      this.getContent(this.id)
    }
  }
</script>

<style scoped>
  a {
    color: #b7080a;
  }
</style>