// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

const baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  price: {}
}

//to handle state
const getters = {
  price: state => state.price
}

//to handle actions
const actions = {
  getPrice({ commit }) {
    return new Promise((resolve) => {
      axios.get(baseURL)
      .then(res => {
        resolve(res)
        commit('setPrice', res.data)
      })
    })
  }
}

//to handle mutations
const mutations = {
  setPrice(state, price) {
    state.price = price
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
