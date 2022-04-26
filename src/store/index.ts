import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import test from './modules/test'
export default createStore({
  getters,
  modules: {
    user
  }
})
