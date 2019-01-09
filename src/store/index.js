import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import awardName from './modules/awardName'

export default new Vuex.Store({
  modules: {
    awardName
  }
})