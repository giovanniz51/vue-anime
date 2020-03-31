import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

import * as anime from "@/store/modules/anime"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    anime
  }
})
