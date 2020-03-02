<template>
  <div class="home setting container-fluid" id="lagoonUrl">
    <img alt src />
    <h1 class="text-center">Lagoon Park</h1>
    <posts id="postOpa" />
  </div>
</template>



<script>
import Posts from "../components/posts";
export default {
  name: "Home",
  components: {
    Posts
  },
  mounted() {
    console.log("hi");
    this.$store.dispatch("getPosts");
  }
};
</script>
<style scoped>
.setting {
  height: 100%;
}
#lagoonUrl {
  background-image: url("https://i.ytimg.com/vi/AbtiwaJGG3w/maxresdefault.jpg");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

</style>
