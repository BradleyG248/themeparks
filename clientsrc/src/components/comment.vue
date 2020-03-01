<template>
  <div class="component">
    <div class="col-12">
      <div class="row pb-1">
        <div class="comment-body">
          <h6>{{comment.description}} -- {{comment.creatorEmail}} -- Votes: {{comment.votes}}</h6>
          <button class="btn btn-success" @click="vote(comment.votes+1)">+</button>
          <button class="btn btn-warning" @click="vote(comment.votes -1)">-</button>
        </div>
        <button class="btn btn-danger" @click="destroy()">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Comment",
  props: ["commentData"],
  data() {
    return {
      votes: this.commentData.votes
    };
  },
  computed: {
    comment() {
      let comment = this.commentData;
      return comment;
    }
  },
  methods: {
    destroy() {
      this.$store.dispatch("deleteCommentById", this.comment.id);
    },
    vote(vote) {
      console.log(this.CommentData);
      this.comment.votes = vote;
      let data = { votes: vote, id: this.commentData.id };
      console.log(data);
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