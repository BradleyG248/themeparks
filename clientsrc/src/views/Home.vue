<template>
  <div class="home setting container-fluid" id="lagoonUrl">
    <img alt src />
    <h1 class="text-center">Lagoon Park</h1>
        <div class="search-wrapper">
          <input type="text" v-model="search" placeholder="  search..." />
        </div>
    <posts id="postOpa" />
  </div>
</template>



<script>
import Posts from "../components/posts";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      postList: this.$store.state.posts
    };
  },
  components: {
    Posts
  },
  mounted() {
    console.log("hi");
    this.$store.dispatch("getPosts");
  },
  computed: {
    filteredList() {
      return this.Posts.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};
</script>
<style scoped>
.setting {
  height: 100%;
}
#lagoonUrl {
  background-image: url("https://i.ytimg.com/vi/AbtiwaJGG3w/maxresdefault.jpg");
  background-color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  min-height: 100vh;
}
</style>
