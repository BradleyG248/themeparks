<template>
  <div class="post-details">
    <img :src="details.imgUrl" alt="">
    <h1>{{details.title}}</h1>
    <p>{{details.description}}</p>
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
  components:{
    Post,
    Comment
  },
  mounted(){
    this.$store.dispatch("getPostById", this.$route.params.postId);
    },
  computed:{
    details(){
      console.log(this.$route.params.postId)
      return this.$store.state.activePost
    }
  }
};
</script>
<style>



</style>
