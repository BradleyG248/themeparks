<template>
  <!-- <div class="component"> -->
  <div class="col-12">
    <div class="row pb-1">
      <div class="comment-body">
        <h6>{{commentData.description}} -- {{commentData.creatorEmail}} -- Votes: {{commentData.votes}}</h6>
        <img src alt />
        <img src alt />
      </div>
    </div>
  </div>
  <!-- </div> -->
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
.comment-body {
  width: 65vw;
  font-size: 0.6rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  text-shadow: 1px 1px 7px black;
  padding: 0.5rem;
  border-radius: 25px;
  border: 2px solid black;
  text-align: center;
}
</style>