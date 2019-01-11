<template>
  <!--静态-->
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
    export default {
        name: "HelloSwiper",
      data(){
          return{
            swiperOption: {
              autoplay:true,
              pagination: {
                el: '.swiper-pagination',
              }

            }
          }
      }

    }
</script>

<style scoped>

</style>
