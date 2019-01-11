<template>
    <div>
      outer获取vuex的store仓库中的数据:{{getcount}}
      <button @click="add">加加</button>
    </div>
</template>

<script>
    export default {
        name: "outer",
        methods:{
            add(){
              //this.$store.commit('increment');
              this.$store.dispatch('increment');
            }
        },
        computed:{
            getcount(){
              //return this.$store.state.count;
              return this.$store.getters.getCount;
            }
        }
    }
</script>

<style scoped>

</style>
