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
    setPipe(state,payload){
      console.log(payload)
      state.pipeData=payload.pipe.sort()
      state.grade=payload.uniqueGrade.sort()
      state.type=payload.uniqueType.sort()
      state.size=payload.uniqueSize.sort()
      state.connection=payload.uniqueConnection.sort()
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
          uniqueType.add(element['Product type'])
          uniqueSize.add(element["size"])
          uniqueConnection.add(element['connection'])
        });
        // commit the data change
        commit('setPipe',{'pipe':dat.data,'uniqueGrade':[...uniqueGrade],'uniqueType':[...uniqueType],'uniqueSize':[...uniqueSize],'uniqueConnection':[...uniqueConnection]})
      })
    }
  },
  modules: {
  }
})
