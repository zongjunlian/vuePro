<template>
    <div>
      <ul>
        <li v-for="list in listData">{{}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "axios_get",
        data(){
            return{
              listData:[]
            }
        },
        created() {
          this.$axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php', {
            params: {
              type:"junshi",
              count:30
            }
          })
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }

    }
</script>

<style scoped>

</style>
