<template>
  <div class="anime">
    <div class="container bg-white p-3 rounded my-5">
      <div class="row">
        <div class="col-12 col-md-3" v-if="anime">
          <img :src="anime.image_url" class="img-fluid my-3" style="display: block; margin: 0 auto"></img>
        </div>
        <div class="col-12 col-md-9">
          <div v-if="anime">
            <h3 class="my-3">{{anime.title}}</h3>
            <hr>
            <p>Genre: <span v-for="g in anime.genres"><a :href="g.url" target="_blank">{{g.name}} </a></span></p>
            <p>Episodes: <span>{{anime.episodes}}</span></p>
            <p class="lead">{{anime.background}}</p>
          </div>
          <h3>Trailers</h3>
          <hr>
          <div class="row">
            <div class="col-12 col-md-6" v-for="v in videos">
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
import Hero from "@/components/Hero"
import {mapState} from "vuex"
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
    computed: {
      anime(){
        return this.$store.getters.getAnime.info
      },
      videos(){
        return this.$store.getters.getAnimeVideos
      }
    },
    mounted(){
      this.$store.dispatch("setAnime", this.id)
    }
  }
</script>

<style scoped>
  a {
    color: #b7080a;
  }
</style>