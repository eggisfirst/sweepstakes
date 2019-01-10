const state = {
  beginLock: false,
  awardContent: true,
  awardPerson: false
}

const mutations = {
  setBeginLock: (state, arr) => state.beginLock = arr,
  setAwardContent: (state, arr) => state.awardContent = arr,
  setAwardPerson: (state, arr) => state.awardPerson = arr
}

const actions = {

}

const getters = {

}

export default {
  state,
  getters,
  actions,
  mutations
}