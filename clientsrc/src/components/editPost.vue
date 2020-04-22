<template>
  <div v-if="!postData.closed" class="card" style="width: 17rem; height: 28rem;">
    <router-link :to="{ name:'PostDetails', params:{postId: this.postData._id}}">
      <img class="card-img-top" :src="postData.imgUrl" alt="Card image cap" />
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{postData.title}}</h5>
      <p class="card-text">{{postData.description}}</p>
    </div>
    <button @click="edit = !edit" class="btn btn-warning">Edit</button>
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