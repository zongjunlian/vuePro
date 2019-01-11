import Vue from 'vue'
import VueRouter  from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Hellozjl from '../components/Hellozjl'
Vue.use(VueRouter)
export default
  new VueRouter({
    routes: [
      { path: '/', component: HelloWorld },
      { path: '/hello', component: Hellozjl }
    ]
  })

