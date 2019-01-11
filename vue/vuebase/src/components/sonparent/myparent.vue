<template>
    <div>
      父组件
      <input type="text" v-model="num">
      <mychild @msgdata="getmsg" :num="getNum"/>
      {{info}}
    </div>
</template>

<script>
  import mychild from './mychild'
    export default {
        name: "myparent",
        components: {
          mychild
        },
        data(){
          return{
            info:'',
            num:10
          }
        },
      methods:{
        getmsg(data){
          this.info=data;
        }
      },
      computed:{
          getNum(){
            return this.num-0
          }
      }
    }
</script>

<style scoped>

</style>
