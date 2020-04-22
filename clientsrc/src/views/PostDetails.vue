<template>
  <div class="post-details text-center pt-3" id="psdeets">
    <h1 v-if="details.closed">This post has been deleted!</h1>
    <div v-if="!details.closed">
      <h1>{{details.title}}</h1>
      <p>{{details.description}}</p>
      <img height="400" class="pic-size img-fluid" :src="details.imgUrl" alt />
    </div>
    <div class="buttons-details p-1">
      <button class="btn btn-success m-1" @click="vote(1)">+</button>
      <button class="btn btn-info m-1" @click="vote(-1)">-</button>
      <button class="btn btn-danger m-1" 
        v-if="$auth.userInfo.email == details.creatorEmail" 
        @click="this.delete">Delete!</button>
    </div>

    <div class="d-flex flex-column align-items-start justify-content-center ml-2">
      <h4>Creator: {{details.creator.name}}</h4>
      <img class="img-fluid" :src="details.creator.picture" alt />
    </div>
    <h4>{{votes}} votes</h4>

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
      commentData: {},
      edit: false
    };
  },

  methods: {
    delete() {
      this.$store.dispatch("deletePostById", this.$route.params.postId);
    },
    vote(vote) {
      let info = { id: this.$route.params.postId, vote };
      this.$store.dispatch("voteById", info);
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
    },
    votes() {
      let total = 0;
      this.details.votes.forEach(vote => {
        total += vote.value;
      });
      if (total) {
        return total;
      }
      return 0;
    }
  }
};
</script>

<style>
#psdeets {
  background-color: rgb(187, 235, 241);
  min-height: 100vh;
}
</style>

