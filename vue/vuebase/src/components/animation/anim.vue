<template>
    <div>
      <button @click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>


      <button @click="show1 = !show1">
        Toggle render
      </button>
      <transition enter-active-class="animated flip"  leave-active-class="animated flip">
        <p v-if="show1">hello</p>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "anim",
        data() {
          return{
            show: true,
            show1: true
          }
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
