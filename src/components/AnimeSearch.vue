<template>
    <div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2 bg-dark border-0" type="search" placeholder="Search Anime" aria-label="Search" @input="search" ref="searchInput">
        </form>
        <div class="search-container" v-if="animes.length > 0">
            <ul>
                <router-link :to="'/anime/' + a.mal_id" v-for="a in limitAnimes" :key="a.mal_id">
                    <li class="py-1 px-3" @click="hide">
                        <div class="row">
                            <div class="col">
                                <img :src="a.image_url" width="100"></img>    
                            </div>
                            <div class="col">
                                <p>{{a.title}}</p>
                            </div>
                        </div>
                        <hr>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return {
                query: null,
                animes: [],
            }
        },
        computed: {
            limitAnimes(){
                const limited = []
                for(let i = 0; i < 5; i++){
                    limited.push(this.animes[i])
                }      
                return limited
              }  
        },
        methods: {
            search(e){
                axios.get(`https://api.jikan.moe/v3/search/anime?q=${e.target.value}&page=1`)
                    .then(res => this.animes = res.data.results)
            },
            hide(){
                this.animes = []
                this.$refs.searchInput.value = ""
            }
        }
    }
</script>

<style lang=scss scoped>
    .search-container {
        position: absolute;
        right: 100px;
        width: 250px;
        background: #fff;
        z-index: 2;
        overflow: hidden;
        
        ul {
            padding: 0;
        }
        
        li {
            list-style: none;
        }
    }
</style>