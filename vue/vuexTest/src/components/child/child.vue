<template>
    <div>
      儿子{{title}}
      <button @click="getmsg">传递</button>
      <p>
        儿子获取vuex的store仓库中的数据：{{getcount}}
        <button @click="min">减减</button>
      </p>
    </div>

</template>

<script>
    export default {
        name: "child",
        data(){
          return{
            info:'子传父的数据'
          }
        },
        props:{
          title: {
            title: 'String',
            default: ''
          }
        },
      methods:{
        getmsg(){
            this.$emit('test',this.info);
        },
        min(){
          //this.$store.commit('decreament')
          this.$store.dispatch('decreament')
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
