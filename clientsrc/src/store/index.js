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

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    comments: []

  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    addPost(state,post){
      state.posts.push(post)
    },
    addComment(state,comment){
      state.comments.push(comment)
    },
    setPosts(state,posts){
      state.posts = posts;
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
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
        let res = await api.post(post);
        commit("addPost", post)
      } catch (error) {
        console.error(error)
      }
    },
    async getPostById({commit}, id){
      try {
        let res = await api.get("posts",id);
        return res.data;
      } catch (error) {
        console.error(error)
      }
    },
    async getPosts({commit}){
      try {
        let res = await api.get("posts");
        commit("setPosts",res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
});
