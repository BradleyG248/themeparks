<template>
  <div class="post-details text-center pt-3">    
    <h1 v-if="details.closed">This post has been deleted!</h1>
    <div v-if="!details.closed">
    <h1>{{details.title}}</h1>
    <p>{{details.description}}</p>
    <img height="400" class="pic-size" :src="details.imgUrl" alt="">
    <button class="btn btn-success" @click="vote(details.votes++)">+</button>
    <button class="btn btn-info" @click="vote(details.votes--)">-</button>
    <button class="btn btn-danger" @click="this.delete" >Delete!</button>
    <h4>{{details.votes}} votes</h4>
    </div>
    <comments/>
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

  methods:{
    delete(){
      this.$store.dispatch("deletePostById", this.$route.params.postId)
    },
    vote(vote){
      console.log(vote)
      this.details.vote = vote;
      this.$store.dispatch("voteById",this.details)
    }
  },
  components:{
    Post,
    Comments
  },

  mounted(){
    let post = this.$store.dispatch("getPostById", this.$route.params.postId);
    },
  computed:{
    details(){

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
<style scoped>
</style>
