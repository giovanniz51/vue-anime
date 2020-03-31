import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import NProgress from "nprogress"

import store from "@/store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    beforeEnter(to, from, next){
       store.dispatch("setAnimes").then(animes => {
         to.params.animes = animes
         next()
       })
    }
  },
  {
    path: '/anime/:id',
    name: 'anime-show',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Anime.vue'),
    props: true,
    beforeEnter(to, from, next){
      store.dispatch("setAnime", to.params.id).then(anime => {
        to.params.animeObj = anime
        next()
      })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
