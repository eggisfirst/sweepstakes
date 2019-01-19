const state = {
  beginLock: false,
  awardContent: true,
  awardPerson: true,
  emptyShow: false
}

const mutations = {
  setBeginLock: (state, arr) => state.beginLock = arr,
  setAwardContent: (state, arr) => state.awardContent = arr,
  setAwardPerson: (state, arr) => state.awardPerson = arr,
  setEmptyShow: (state, arr) => state.emptyShow = arr
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