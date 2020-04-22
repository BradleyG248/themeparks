<template>
  <div class="component">
    <div class="col-12 col-md-6 p-2">
      <div v-if="!postData.closed" class="card" style="width: 17rem; height: 28rem;">
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
div.card {
  background: rgb(252, 117, 117);
  background: radial-gradient(
    circle,
    rgba(252, 117, 117, 1) 50%,
    rgba(250, 161, 55, 1) 100%
  );
}
</style>