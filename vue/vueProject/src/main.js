// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import './fonts/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
Vue.prototype.$axios = axios;

import qs from "qs"

import store from "./store/index"

// axios.defaults.baseURL = 'http://www.wwtliu.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
	// 参数格式转换
    if(config.method=="post"){
        config.data = qs.stringify(config.data);
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
