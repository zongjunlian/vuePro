<template>
  <div class="footer">
    <p @click="send">Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合</p>
  </div>
</template>

<script>
	import bus from '../assets/js/eventBus.js'
    export default {
        name: "myFooter",
				data() {
					return {
						key: 'zjl'
					}
				},
				methods: {
					send() {
						bus.$emit("key",this.key);
					}
				},
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
