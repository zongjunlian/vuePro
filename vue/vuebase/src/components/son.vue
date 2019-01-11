<template>
    <div>儿子{{title}}-{{lifemsg}}-{{num}}-{{objdata.name}}</div>
</template>

<script>
    export default {
        name: "son",
        //props: ['title','lifemsg','num'],//接收父组件数据
        props:{
          title:[String,Number],//可以是string，也可以是number
          lifemsg:String,
          num:{
            type: Number,
            default: 1000
          },
          objdata:{
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
              return {
                name: 'ngc',
                age:'30'
              }
            }
          }

        }

    }
</script>

<style scoped>

</style>
