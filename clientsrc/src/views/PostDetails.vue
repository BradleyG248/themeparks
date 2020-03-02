<template>
  <div class="post-details text-center pt-3" id="psdeets">
    <h1 v-if="details.closed">This post has been deleted!</h1>
    <div v-if="!details.closed">
      <h1>{{details.title}}</h1>
      <p>{{details.description}}</p>
      <img height="400" class="pic-size" :src="details.imgUrl" alt />
    </div>
    <div class="buttons-details p-1">
      <button class="btn btn-success m-1" @click="vote(details.votes++)">+</button>
      <button class="btn btn-info m-1" @click="vote(details.votes--)">-</button>
      <button class="btn btn-danger m-1" @click="this.delete">Delete!</button>
    </div>
    <h4>{{details.votes}} votes</h4>

    <create-comment class="m-1 mb-4" />
    <comments />
  </div>
</template>



<script>
import Post from "../components/post";
import Comments from "../components/comments";
import CreateComment from "../components/createComment";

export default {
  name: "PostDetails",
  data() {
    return {
      postData: {},
      commentData: {}
    };
  },

  methods: {
    delete() {
      this.$store.dispatch("deletePostById", this.$route.params.postId);
    },
    vote(vote) {
      console.log(vote);
      this.details.vote = vote;
      this.$store.dispatch("voteById", this.details);
    }
  },
  components: {
    Post,
    Comments,
    CreateComment
  },
  mounted() {
    let post = this.$store.dispatch("getPostById", this.$route.params.postId);
    this.$store.dispatch("getCommentsByPost", this.$route.params.postId);
  },
  computed: {
    details() {
      return this.$store.state.activePost;
    }
  }
};
</script>

<style>
#psdeets{
  background-color: darkorchid
}
</style>

