<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
    <!--<HelloSwiper/>-->
    <!--<HelloSwiper2/>-->
    <!--<lazyLoad/>-->
    <!--<sass/>-->
    <rem/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloSwiper from './components/HelloSwiper'
import HelloSwiper2 from './components/HelloSwiper2'
import lazyLoad from './components/lazyLoad'
import sass from './components/sass'
import rem from './components/rem'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloSwiper,
    HelloSwiper2,
    lazyLoad,
    sass,
    rem
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
