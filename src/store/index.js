import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import awardName from './modules/awardName'
import beginLock from './modules/lock'
import awardContent from './modules/lock'
import awardPerson from './modules/lock'
import awardList from './modules/awardList'

export default new Vuex.Store({
  modules: {
    awardName,
    beginLock,
    awardContent,
    awardPerson,
    awardList
  }
})