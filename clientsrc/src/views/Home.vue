<template>
  <div class="home bg-info setting">
    <img alt="" src="" />
    <h1>Lagoon Parks</h1>
    <posts/>
  </div>
</template>



<script>
import Posts from "../components/posts"
export default {
  name: "Home",
  components:{
    Posts
  },
  mounted(){
    console.log("hi")
    this.$store.dispatch("getPosts")
  }
};
</script>
<style>
.setting{
  height: 100rem
}
</style>
