<template>
    <div>
      11
      <child>
        <p slot="slot1">我是插槽1</p>
        <p slot="slot2"  slot-scope="key">我是插槽2--{{key.text}}</p>
      </child>
    </div>
</template>

<script>
  import child from './child'
    export default {
        name: "parent",
        components:{
            child
        }
    }
</script>

<style scoped>

</style>
