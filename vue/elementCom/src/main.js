// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Row,Button,Carousel,CarouselItem } from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueLazyload from 'vue-lazyload'

Vue.use(Button)
Vue.use(Row)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
