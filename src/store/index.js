import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pipeData:[],
    grade:[],       //contain unique grade
    type:[],        //contain unique type
    size:[],        //contain unique size
    connection:[],  //contain unique connection
    ready:false
  },
  mutations: {
    setPipe(state,pipe,uniqueGrade,uniqueType,uniqueSize,uniqueConnection){
      state.pipeData=pipe
      state.grade=uniqueGrade
      state.type=uniqueType
      state.size=uniqueSize
      state.connection=uniqueConnection
      state.ready=true
    }
  },
  actions: {
    getPipe({commit}){
      axios.get("http://localhost:8080/pipe.json").then((dat)=>{
        
        let uniqueGrade=new Set()
        let uniqueType=new Set()
        let uniqueSize=new Set()
        let uniqueConnection=new Set()
        // find unique data for each listed collumn
        dat.data.forEach(element => {
          uniqueGrade.add(element["grade"])
          uniqueType.add(element['size'])
          uniqueSize.add(element["grade"])
          uniqueConnection.add(element['connection'])
        });
        // commit the data change
        commit('setPipe',dat.data,[...uniqueGrade],[...uniqueType],[...uniqueSize],[...uniqueConnection])
      })
    }
  },
  modules: {
  }
})
