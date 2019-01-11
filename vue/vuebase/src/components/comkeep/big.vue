<template>
    <div>
      big
      <!--<component :is="currentView"></component>-->
      <!-- keep-alive 避免反复重渲染导致的性能问题-->
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>

      <button @click="changeView">点击切换组件</button>
    </div>
</template>

<script>
  import Small1 from './small1'
  import Small2 from './small2'
    export default {
        name: "big",
        data(){
            return{
              currentView:'Small1',
              flag:false
            }
        },
        components:{
          Small1,
          Small2
        },
      methods:{
        changeView(){
          if(this.flag){
            this.currentView='Small2';
            this.flag=false;
          }else{
            this.currentView='Small1';
            this.flag=true;
          }

        }
      }
    }
</script>

<style scoped>

</style>
