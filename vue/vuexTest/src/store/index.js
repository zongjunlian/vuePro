import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//创建一个 store
export  default  new Vuex.Store({
  state: {
    count:5
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decreament (state) {
      if(state.count>0){
        state.count--;
      }
    },
  },
  actions: {
    //Action 类似于 mutation，不同在于：
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    increment (context) {
      setTimeout(function(){
        context.commit('increment');
      })

    },
    decreament(context) {
      setTimeout(function(){
        context.commit('decreament')
      })
    }
  },
  getters: {
    getCount: (state) => {
      return state.count>0?state.count:0;
    }
  }

});
