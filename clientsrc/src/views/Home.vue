<template>
  <div class="home setting container-fluid" id="lagoonUrl">
    <h1 class="text-center">Lagoon Park</h1>
    <div class="search-wrapper">
      <input class="form-control" type="text" v-model="search" placeholder="  search..." />
    </div>
    <div class="row">
      <post v-for="post in filteredList" :key="post.id" :postData="post" />
    </div>
  </div>
</template>



<script>
import Posts from "../components/posts";
import Post from "../components/post";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getPosts");
  },
  data() {
    return {
      search: ""
    };
  },
  components: {
    Posts,
    Post
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    postList() {
      return this.$store.state.posts;
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
