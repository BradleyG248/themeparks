<template>
  <div class="post-details">

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
  computed:{
    details(){
      
    }
  },
  mounted(){
    this.$store.dispatch("getPostById", this.$route.params.postId);
  }
};
</script>
<style>



</style>
