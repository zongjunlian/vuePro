<template>
  <!--异步数据例子-->
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
    export default {
        name: "HelloSwiper2",
        data(){
            return{
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination'
                }
              },
              swiperSlides: [1, 2, 3, 4, 5]
            }
        }

    }
</script>

<style scoped>

</style>
