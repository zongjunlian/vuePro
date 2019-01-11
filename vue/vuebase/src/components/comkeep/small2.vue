<template>
    <div>small2
      <button @click="show">展开</button>{{msg}}
    </div>
</template>

<script>
    export default {
        name: "small2",
        data(){
          return{
            msg:"zjl"
          }
        },
        methods:{
          show(){
            this.msg="zjl haha"
          }
        }
    }
</script>

<style scoped>

</style>
