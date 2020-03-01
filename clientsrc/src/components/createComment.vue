<template>
  <div class="component">
    <button class="btn btn-info" v-if="!comtoggle" @click="comtoggle = true">Create Comment</button>
    <div v-if="comtoggle">
      <input type="text" placeholder="Talk is cheap" v-model="newComment.description" />
      <button class="btn btn-success" @click="createComment">Post</button>
      <button class="btn btn-warning" @click="comtoggle=false">Cancel</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "CreateComment",
  data() {
    return {
      newComment: {
        postId: this.$route.params.postId,
        description: ""
      },
      comtoggle: false
    };
  },
  computed: {},
  methods: {
    async createComment() {
      await this.$store.dispatch("createComment", this.newComment);
      this.comtoggle = false;
      this.newComment.description = "";
    }
  },
  components: {}
};
</script>


<style scoped>
div.modal-content {
  background-color: #f7f4f3;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>