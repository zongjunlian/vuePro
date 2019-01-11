<template>
    <div>
      子组件
     <button @click="msgdata">点击</button>
    </div>
</template>

<script>
    export default {
        name: "mychild",
      data(){
          return{
            msg:'我是子组件的数据'
          }
      },
      props:{
        num:{
          type:Number,
          default:1
        }
      },
        methods:{
          msgdata(){
              this.$emit('msgdata',this.getNum)//两个参数， 参数1：key（父组件通过自定义事件调用）,  参数二：数据
          }
        },
      computed:{
          getNum(){
            return this.num*2
        }
      }
    }
</script>

<style scoped>

</style>
