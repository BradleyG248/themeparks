<template>
  <div class="component">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#post-creator">create post</button>
    <div class="modal" tabindex="-1" role="dialog" id="post-creator">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded input-group-default">
          <div class="modal-header d-flex flex-column">
            <h2>Title</h2>
            <input class="modal-title rounded form-control" placeholder="Hyped?" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="modal-body">
            <h3>Description</h3>
            <input class="rounded form-control" placeholder="Elaborate..." />
          </div>
          <div class="modal-body">
            <h3>Image</h3>
            <input class="rounded form-control" placeholder="Hands in the air like you just don't care" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
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
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>
div.modal-content{
  background-color: #F7F4F3;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>