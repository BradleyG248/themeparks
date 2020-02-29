<template>
  <div class="postDetails">
    <img :src="details.imgUrl" alt />
    <h1>{{details.title}}</h1>
    <p>{{details.description}}</p>
    <comments />
  </div>
</template>



<script>
import Post from "../components/post";
import Comments from "../components/comments";

export default {
  name: "PostDetails",
  data() {
    return {
      postData: {},
      commentData: {}
    };
  },
  components: {
    Post,
    Comments
  },
  mounted() {
    this.$store.dispatch("getPostById", this.$route.params.postId);
    this.$store.dispatch("getComments");
  },
  computed: {
    details() {
      console.log(this.$route.params.postId);
      return this.$store.state.activePost;
    }
  }
};
</script>
<style>
</style>
