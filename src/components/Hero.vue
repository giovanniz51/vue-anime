<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" :style="{zIndex: showModal ? 0 : -1}">
          <div class="carousel-inner">
            <div class="carousel-item active" :style="{maxHeight: showModal ? '300px' : '200px'}">
              <slot name="img"></slot>
            </div>
           <div class="carousel-content" v-if="showModal">
               <small class="text-muted text-uppercase">Feature Anime</small>
               <h1>{{anime.title}}</h1>
               <p class="lead">One of the top selling Japanese mangas</p>
               <a :href="anime.url" target="_blank"><BaseButton>More Info</BaseButton></a>
           </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            showModal: {
                type: Boolean,
                default: true
            },
            anime: {
                type: Object
            }
        }
    }
</script>

<style lang="scss">
    .carousel-content {
        position: absolute;
        top: 4rem;
        left: 20%;
        background: rgba(255, 255, 255, 0.8);
        padding: 1rem;
    }
    
    @media only screen and (max-width: 599px) {
	    .carousel-content {
        position: absolute;
        top: 0rem;
        left: 0%;
        background: rgba(255, 255, 255, 0.8);
        padding: 1rem;
        }
    }
    
</style>