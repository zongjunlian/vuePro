<template>
    <div>22</div>
</template>

<script>
    // ***********
    //import qs from 'qs'
    export default {
        name: "axios_post",
      created() {
        // *************
        //   this.$axios.post('/sxtstu/blueberrypai/login.php', qs.stringify({
        //     user_id: 'iwen@qq.com',
        //     password: 'iwen123',
        //     verification_code:'crfvw'
        //   }))
        this.$axios.post('/sxtstu/blueberrypai/login.php', {
          user_id: 'iwen@qq.com',
          password: 'iwen123',
          verification_code:'crfvw'
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
