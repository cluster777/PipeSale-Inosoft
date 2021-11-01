import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pipeData:[],
    ready:false
  },
  mutations: {
    setPipe(state,data){
      state.pipeData=data.data
      state.ready=true
    }
  },
  actions: {
    getPipe({commit}){
      axios.get("http://localhost:8080/pipe.json").then((dat)=>{
        commit('setPipe',dat)
      })
    }
  },
  modules: {
  }
})
