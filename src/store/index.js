import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList:[]
  },
  mutations: {
    addCar(state,item){
      state.carList.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
