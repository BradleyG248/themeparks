<template>
  <div class="row d-flex flex-column justify-content-center align-items-center">
    <button @click="edit=!edit" class="btn btn-warning">Edit</button>
    <div v-if="edit" class="col-12">
      <input class="form-control" v-model="editedPost.title" placeholder="Title" type="text" />
      <input
        class="form-control"
        v-model="editedPost.description"
        placeholder="Description"
        type="text"
      />
      <button @click="editPost()" class="btn btn-warning">Submit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Post",
  props: ["postData"],
  data() {
    return {
      edit: false,
      editedPost: {
        title: this.postData.title,
        description: this.postData.description,
        id: this.postData.id
      }
    };
  },
  computed: {},
  methods: {
    editPost() {
      this.edit = false;
      this.$store.dispatch("editPost", this.editedPost);
    }
  },
  components: {}
};
</script>