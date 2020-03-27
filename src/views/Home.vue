<template>
  <div class="home bg-dark">
    <Hero :anime="animes[Math.floor(Math.random() * 50)]">
      <img slot="img" src="https://static.giga.de/wp-content/uploads/2018/01/Animes-Kindheit-rcm950x0.png" class="d-block w-100" alt="...">
    </Hero>
    <div class="container my-5 text-white">
      <div class="row">
        <div class="col">
          <h1 class="text-uppercase">Top Animes</h1>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-6 col-md-4" v-for="a in animes" :key="a.mal_id">
          <AnimeCard :anime="a"></AnimeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero"
import AnimeCard from "@/components/AnimeCard"

import axios from "axios"

export default {
  name: 'Home',
  components: {
    Hero,
    AnimeCard
  },
  data(){
    return {
      animes: []
    }
  },
  computed() {
    
  },
  mounted(){
    axios.get("https://private-anon-e5d408a1f8-jikan.apiary-proxy.com/v3/top/anime/1/tv")
      .then(res => this.animes = res.data.top)
  }
}
</script>
