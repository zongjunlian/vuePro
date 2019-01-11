<template>
  <div class="footer">
    <p>Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合</p>
  </div>
</template>

<script>
    export default {
        name: "myFooter"
    }
</script>

<style scoped lang="scss">
  $gray:#ddd;
  .footer{
    height: 70px;
    line-height: 70px;
    background: $gray;
    color: #333;
    p{
      text-align: center;
    }
  }
</style>
