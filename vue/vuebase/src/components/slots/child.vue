<template>
    <div>
      <!--slot标签内有值的话是默认值-->
      <slot name="slot1"></slot>
      <slot name="slot2" :text="text"></slot>
    </div>
</template>

<script>
    export default {
        name: "child",
      data(){
          return{
            text:"我是数据传递11"
          }
      }
    }
</script>

<style scoped>

</style>
