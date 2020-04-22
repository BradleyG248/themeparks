<template>
  <div>
    <button @click="edit=!edit" class="btn btn-warning">Edit</button>
    <div v-if="edit" class="card" style="width: 17rem; height: 28rem;">
      <input v-model="editedPost.title" placeholder="Title" type="text" />
      <input v-model="editedPost.description" placeholder="Description" type="text" />
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
        description: this.postData.description
      }
    };
  },
  computed: {},
  methods: {
    edit() {}
  },
  components: {}
};
</script>