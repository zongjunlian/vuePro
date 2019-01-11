<template>
    <div>父亲
      <child :title="msg" @test="getson"/>
      {{msg2}}
    </div>
</template>

<script>
  import  child from './child'
    export default {
        name: "parent",
        data(){
            return{
              msg:'zjl',
              msg2:''
            }
        },
        components:{
          child
        },
        methods:{
          getson(data){
              this.msg2=data;
          }
        }
    }
</script>

<style scoped>

</style>
