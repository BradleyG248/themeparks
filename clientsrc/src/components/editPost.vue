<template>
  <div>
    <button @click="edit=!edit" class="btn btn-warning">Edit</button>
    <div v-if="edit" class="card" style="width: 17rem; height: 28rem;">
      <input placeholder="Title" type="text" />
      <input placeholder="Description" type="text" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Post",
  props: ["postData"],
  data() {
    return {
      edit: false
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>