<template>
  <div>
    <navList></navList>
    <ul class="fl">
      <li><router-link to="/course/java">java</router-link></li>
      <li><router-link to="/course/web">web</router-link></li>
    </ul>
    <ul class="fl" style="margin-left: 100px">
      <li>
        <router-view></router-view>
      </li>
    </ul>
  </div>
</template>

<script>
  import  navList from './navList'
    export default {
        name: "course",
        components:{
          navList
        }
    }
</script>

<style scoped>
.fl{
  float: left;
}
</style>
