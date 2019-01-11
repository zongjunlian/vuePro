<template>
    <div>跨域</div>
</template>

<script>
    export default {
        name: "CrossDomain",
        created() {
          var url=this.HOST+"/movie/top250";
          this.$axios.get(url, {
            start:0,
            count:10
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>
