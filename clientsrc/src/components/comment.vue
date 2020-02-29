<template>
  <div class="comment">
    <div class="col-12">
      <p class="comment-text">{{commentData.description}}</p>
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