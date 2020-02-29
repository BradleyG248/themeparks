<template>
  <div class="component">
    <div class="col-12 col-md-6 p-2">
      <div class="card" style="width: 18rem;">
        <router-link :to="{ name:'PostDetails', params:{postId: this.postData._id}}">
          <img class="card-img-top" :src="postData.imgUrl" alt="Card image cap" />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{postData.title}}</h5>
          <p class="card-text">{{postData.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Post",
  props: ["postData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>