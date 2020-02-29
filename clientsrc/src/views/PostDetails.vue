<template>
  <div class="post-details">
    <h1 v-if="details.closed">This post has been deleted!</h1>
    <div v-if="!details.closed">
    <h1>{{details.title}}</h1>
    <p>{{details.description}}</p>
    <img :src="details.imgUrl" alt="">
    <button class="btn btn-success" @click="vote(details.votes++)">+</button>
    <button class="btn btn-info" @click="vote(details.votes--)">-</button>
    <button class="btn btn-danger" @click="this.delete" >Delete!</button>
    <h4>{{details.votes}} votes</h4>
    </div>
    <comment/>
  </div>
</template>



<script>
import Post from "../components/post"
export default {
  name: "PostDetails",
  data(){
    return {
      postData:{}
    }
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
    Comment
  },
  mounted(){
    let post = this.$store.dispatch("getPostById", this.$route.params.postId);
    },
  computed:{
    details(){
      return this.$store.state.activePost;
    }
  }
};
</script>
<style>



</style>
