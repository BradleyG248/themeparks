<template>
  <div class="component">
    <div class="col-12">
      <div class="row pb-1">
        <div class="comment-body">
          <h6>
            {{comment.description}} -- {{comment.creatorEmail}} -- Votes: {{votes}}
            <button
              class="btn btn-success mr-2 ml-3"
              @click="vote(1)"
            >+</button>
            <button class="btn btn-warning" @click="vote(-1)">-</button>
            <button
              v-if="$auth.userInfo.email == comment.creatorEmail"
              class="btn btn-danger ml-3"
              @click="destroy()"
            >Delete</button>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Comment",
  props: ["commentData"],
  mounted() {},
  data() {
    return {};
  },
  computed: {
    comment() {
      let comment = this.commentData;
      return comment;
    },
    votes() {
      let value = 0;
      this.comment.votes.forEach(vote => {
        value += vote.value;
      });
      if (value) {
        return value;
      }
      return 0;
    }
  },
  methods: {
    async destroy() {
      await this.$store.dispatch("deleteCommentById", this.comment.id);
      await this.$store.dispatch("getCommentsByPost", this.comment.postId);
    },
    vote(vote) {
      let data = { vote, id: this.commentData.id };
      this.$store.dispatch("voteComment", data);
    }
  },
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