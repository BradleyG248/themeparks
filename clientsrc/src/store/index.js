import Vue from "vue";
import Vuex, { Store } from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});
let pApi = Axios.create({
  baseURL: baseUrl + "api/posts",
  timeout: 3000,
  withCredentials: true
});
let cApi = Axios.create({
  baseURL: baseUrl + "api/comments",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    comments: [],
    activePost: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    addComment(state, comment) {
      state.comments.push(comment);
    },
    editComment(state, comment) {
      let index = state.comments.findIndex(c => c.id == comment.id);
      Vue.set(state.comments, index, comment);
      state.comments[index] = comment;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setComments(state, comment) {
      state.comments = comment;
    },
    setActivePost(state, post) {
      state.activePost = post;
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
      pApi.defaults.headers.authorization = bearer;
      cApi.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createPost({ commit }, post) {
      try {
        let res = await pApi.post("", post);
        commit("addPost", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createComment({ commit }, comment) {
      try {
        let res = await cApi.post("", comment);
        commit("addComment", res.data);
      } catch (error) {
        console.error(error)
      }
    },
    async getPostById({ commit }, id) {
      try {
        let res = await pApi.get(id);

        //let newPost = res.data.findById({p => id._id = p.id});
        commit("setActivePost", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async deletePostById({ commit }, id) {
      let res = await pApi.delete(id);
      commit("setActivePost", null);
      router.push({ name: "Home" });
      return res;
    },
    async deleteCommentById({ commit }, id) {
      let res = await cApi.delete(id);
      return res;
    },
    async getPosts({ commit }) {
      try {
        let res = await pApi.get("");
        commit("setPosts", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async voteById({ commit }, votes) {
      let res = await pApi.put("/" + votes.id + "/vote", votes);
      let posts = await pApi.get("");
      commit("setPosts", posts);
    },
    async voteComment({ commit }, votes) {
      let res = await cApi.put("/" + votes.id + "/vote", votes);
      commit("editComment", res.data);
    },
    async getCommentsByPost({ commit }, postId) {
      try {
        let res = await pApi.get(postId + "/comments");
        commit("setComments", res.data);
      } catch (error) {
        console.error(error);
      }
    }
  },

});
