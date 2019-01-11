<template>
    <div>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
      <p><img v-lazy="imgObj"/></p>
    </div>
</template>

<script>
    export default {
        name: "lazyLoad",
        data () {
          return {
            imgObj: {
              src: require("../assets/logo.png"),
              error: require("../assets/error.jpg"),
              loading: require("../assets/loading.gif")
              //loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545802884336&di=593e080dd481c3ab0d2e72fcfe0e3567&imgtype=0&src=http%3A%2F%2Fimgs.xueui.cn%2Fwp-content%2Fuploads%2F2016%2F06%2Floading-02.gif'
              //不是本地地址可以不用require
            },
            //imgUrl: 'http://xx.com/logo.png' // String
          }
        }
    }
</script>

<style scoped>

</style>
