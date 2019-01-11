<template>
    <div>
      <input v-focus>
    </div>
</template>

<script>
    export default {
        name: "CusDirectives",
        directives: {
          focus: {
            // 指令的定义
            inserted: function (el) {
              el.focus()
            }
          }
        }
    }
</script>

<style scoped>

</style>
