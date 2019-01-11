<template>
  <div id="app">
    <img src="./assets/logo.png">
    <CrossDomain></CrossDomain>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import formdata from './components/formdata'
import parent from './components/parent'//父子组件传值
import myparent from './components/sonparent/myparent'//父子组件传值
import slotParent from './components/slots/parent'//插槽
import Biger from './components/comkeep/big'//动态组件
import anim from './components/animation/anim'//过渡&动画
import CusDirective from './components/CusDirectives'//自定义指令
import axiosGet from './components/axios_get'//axios get
import axiosPost from './components/axios_post'//axios post
import CrossDomain from './components/CrossDomain'//跨域

export default {
  name: 'App',
  components: {
    HelloWorld,
    formdata,
    parent,
    myparent,
    slotParent,
    Biger,
    anim,
    CusDirective,
    axiosGet,
    axiosPost,
    CrossDomain
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
