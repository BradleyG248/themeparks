<template>
  <div class="home bg-info setting container-fluid">
    <img alt src />
    <h1 class="text-center">Lagoon Park</h1>
    <posts />
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
<style>
.setting {
  height: 100rem;
}
</style>
