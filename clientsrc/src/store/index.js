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
let vApi = Axios.create({
  baseURL: baseUrl + "api/posts/vote",
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
    posts: [{"title": "great thunder is great", "description": "was thunderous", "imgUrl": ""}],
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
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createPost({ commit }, post) {
      try {
        console.log("This is totally working!");
        console.log(post);
        let res = await pApi.post("", post);
        commit("addPost", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getPostById({ commit }, id) {
      try {
        let res = await pApi.get(id);
        console.log(id);

        //let newPost = res.data.findById({p => id._id = p.id});
        commit("setActivePost", res.data);
        console.log(res.data);
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
    async getPosts({ commit }) {
      try {
        let res = await pApi.get("");
        commit("setPosts", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async voteById({ commit }, votes) {
      console.log(`/vote/${votes.id}`);
      console.log(votes);
      let res = await pApi.put("/" + votes.id + "/vote", votes);
      let posts = await pApi.get("");
      // console.log(res);
      commit("setPosts", posts);
    },
    async getComments({ commit }) {
      try {
        let res = await cApi.get("");
        commit("setComments", res.data);
      } catch (error) {
        console.log(error);
      }
    }
  },

});
