<template>
  <div class="component">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#post-creator">create post</button>
    <div class="modal" tabindex="-1" role="dialog" id="post-creator" @submit.prevent="createPost">
      <div class="modal-dialog" role="document">
        <div class="modal-content form-group rounded input-group-default">
          <div class="modal-header d-flex flex-column">
            <h2>Title</h2>
            <input class="modal-title rounded form-control" placeholder="Hyped?" aria-describedby="inputGroup-sizing-default" v-model="newPost.title"/>
          </div>
          <div class="modal-body">
            <h3>Description</h3>
            <input class="rounded form-control" placeholder="Elaborate..." v-model="newPost.description"/>
          </div>
          <div class="modal-body">
            <h3>Image</h3>
            <input class="rounded form-control" placeholder="Hands in the air like you just don't care" v-model="newPost.imgUrl" />
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary" @submit="createPost(newPost)">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AddPost',
  data(){
    return {
      newPost:{}
    }
  },
  computed:{

  },
  methods:{
    createPost(){
      this.$store.dispatch("createPost", this.newPost)
      console.log("working?")
    }
  },
  components:{

  }
}
</script>


<style scoped>
div.modal-content{
  background-color: #F7F4F3;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>