<template>
    <div>
      <ul>
        <li><router-link to="/" exact>首页</router-link></li>
        <li><router-link to="/course">课程</router-link></li>
        <li><router-link :to="{ name: 'master', params: { count: 123,type:obj }}">专家</router-link></li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "navList",
      data(){
          return{
            obj:{
              name:'zjl'
            }
          }
      }
    }
</script>

<style scoped>
div{
  height: 50px;
  line-height: 50px;
  width:100%;
  background: #f1f1f1;
}
  ul li{
    float: left;
    list-style: none;
    margin: 0 20px;
  }

</style>
