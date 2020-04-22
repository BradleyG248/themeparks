<template>
  <div v-show="!postData.closed" class="component col-6 col-md-3 p-2">
    <div>
      <div v-if="!postData.closed" class="card">
        <router-link :to="{ name:'PostDetails', params:{postId: this.postData._id}}">
          <img class="card-img-top img-fluid" :src="postData.imgUrl" alt="Card image cap" />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{postData.title}}</h5>
          <p class="card-text">{{postData.description}}</p>
          <i class="card-text">{{postData.creatorEmail}}</i>
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