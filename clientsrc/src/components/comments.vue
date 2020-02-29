<template>
  <div class="component">
    <div class="container">
      <div class="row">
        <comment v-for="commentObj in comments" :key="commentObj.id" :commentData="commentObj" />
      </div>
      <div class="row pt-3 mt-3"></div>
    </div>
  </div>
</template>


<script>
import Comment from "../components/comment.vue";
export default {
  name: "Comments",
  data() {
    return {};
  },
  computed: {
    comments() {
      let data = this.$store.state.comments;
      return data;
    }
  },
  methods: {},
  components: {
    Comment
  },
  mounted() {}
};
</script>


<style scoped>
</style>