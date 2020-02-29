<template>
  <div class="comment-component">
    <div class="container">
      <div class="row">
        <comment v-for="(commentObj) in comments" :key="commentObj.id" :postData="commentObj" />
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
// import Comment from "../components/post.vue";
export default {
  name: "Comments",
  data() {
    return {};
  },
  computed: {
    posts() {
      let data = this.$store.state.comments;
      return data;
    }
  },
  methods: {},
  components: {},
  mounted() {}
};
</script>


<style scoped>
</style>