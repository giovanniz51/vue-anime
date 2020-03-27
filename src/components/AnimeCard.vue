<template>
    <div class="">
        <router-link :to="{name: 'anime-show', params: {id: anime.mal_id} }">
            <div class="card" style="">
                <img :src="anime.image_url" class="card-img-top" :alt="anime.title">
                <div class="card-body bg-dark text-white">
                    <h5>{{anime.title}}</h5>
                    <small class="text-muted">{{anime.start_date}} - {{anime.end_date}}</small><br>
                  <small class="card-text">Score: {{anime.score}}</small> <br>
                  <small class="card-text">Episodes: {{anime.episodes}}</small>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ["anime"]
    }
</script>

<style scoped>
    .card {
        border: none;
    }
    
    p {
        margin: 0;
    }
</style>