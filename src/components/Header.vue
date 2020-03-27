<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <router-link to="/" class="navbar-brand">Top 50 Animes</router-link>
      <button @click="toggleMenu" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

  <div ref="collapsedMenu" class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
      </li>
    </ul>
    <AnimeSearch></AnimeSearch>
  </div>
</nav>
</template>

<script>
    import AnimeSearch from "@/components/AnimeSearch"
    export default {
        components: {
            AnimeSearch
        },
        methods: {
            toggleMenu(e){
                this.$refs.collapsedMenu.classList.toggle("show")
            }
        }
    }
</script>

<style scoped>
    nav {
        background: #b7080a;
    }
    
    .navbar a {
        color: #fff!important;
    }
</style>