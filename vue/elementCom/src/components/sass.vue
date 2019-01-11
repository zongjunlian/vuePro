<template>
    <div class="test">
      11
    </div>
</template>

<script>
    export default {
        name: "sass"
    }
</script>

<style lang="scss" scoped>
  $primary-color: #f00;
  .test {
    color: $primary-color;  //编译后就成了 color:#333;类似于js的变量！
  }
</style>
