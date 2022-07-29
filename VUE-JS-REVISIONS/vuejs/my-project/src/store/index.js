import Vue from 'vue'
import Vuex from 'vuex'
import Todos from '../store/modules/todos.js'

// load vuex into our application

Vue.use(Vuex)
// create a store  of our application
export default new Vuex.Store({
  modules: {
    Todos
  }
})
