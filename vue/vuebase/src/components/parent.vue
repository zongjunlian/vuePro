<template>
    <div>
      父亲
      <input type="text" v-model="lifemsg">
      <son :title="zjl" :lifemsg="lifemsg" :num="num" :objdata="objdata"/>
    </div>
</template>

<script>
  import son from './son'
    export default {
        name: "parent",
        components: {
          son
        },
        data(){
          return{
            zjl:'zongjl',
            lifemsg:'hello',
            num:10,
            objdata:{
              name:'zjl',
              age:'26'
            }
          }
        }


    }
</script>

<style scoped>

</style>
