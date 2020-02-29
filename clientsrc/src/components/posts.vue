<template>
  <div class="component">
    <div class="container">
      <!-- <h1>These are posts!</h1> -->
      <div class="row">
        <post v-for="(postObj) in posts" :key="postObj.id" :postData="postObj" />
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
import Post from "../components/post.vue";
export default {
  name: "Posts",
  data() {
    return {};
  },
  computed: {
    posts() {
      let data = this.$store.state.posts;
      return data;
    }
  },
  methods: {},
  components: {
    Post
  },
  mounted() {}
};
</script>


<style scoped>
</style>