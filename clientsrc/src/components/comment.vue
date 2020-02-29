<template>
  <div class="component">
    <div class="col-12 col-md-6">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{commentData.description}}</h5>
          <p class="card-text">{{commentData.votes}}</p>
          <p class="card-text">{{commentData.creatorEmail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Comment",
  props: ["commentData"],
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