<template>
  <div class="component container">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <h3>Followers</h3>
          </div>
          <div v-for="follower in followers" :key="follower.id" class="col-12 d-flex flex-row align-items-center justify-content-center">
            <img class="img-fluid rounded-pill follower-img" :src="follower.follower.picture" alt="...">
            <p>{{follower.follower.name}}</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <h3>Creators</h3>
          </div>
          <div v-for="creator in creators" :key="creator.id" class="col-12 d-flex flex-row align-items-center justify-content-center">
            <img class="img-fluid rounded-pill follower-img" :src="creator.creator.picture" alt="...">
            <p>{{creator.creator.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'followers',
  async mounted(){
    if (await this.$auth.isAuthenticated){
    this.$store.dispatch("getCreators");
    this.$store.dispatch("getFollowers");
    }
  },
  data(){
    return {}
  },
  computed:{
    followers(){
      return this.$store.state.followers;
    },
    creators(){
      return this.$store.state.creators;
    }
  },
  methods:{},
  components:{}
}
</script>


<style scoped>
.follower-img{
  max-height:3rem;
}
p{
  margin-bottom:0px;
  margin-left: 1rem;
}
</style>