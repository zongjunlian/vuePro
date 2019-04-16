<template>
  <div>
    专家{{$route.params.count}}-{{$route.params.type.name}}
		<!-- 专家{{$route.query.count}}-{{$route.query.type.name}} -->
  </div>
</template>

<script>
    export default {
        name: "course"
    }
</script>

<style scoped>

</style>
