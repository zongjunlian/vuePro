<template>
  <div id="app">
    <img src="./assets/logo.png">
    <parent/>
    <outer/>
	<outer/>
	<outer/>
  </div>
</template>

<script>
import parent from './components/child/parent'
import outer from './components/outer'

export default {
  name: 'App',
  components: {
    parent,
    outer
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
