import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Profile from "../views/Profile.vue";
// @ts-ignore
import Followers from "../views/Followers.vue";
import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import PostDetails from "../views/PostDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/post/:postId",
    name: "PostDetails",
    component: PostDetails,
    beforeEnter: authGuard
  },
  {
    path: "/followers",
    name: "Followers",
    component: Followers,
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  routes
});

export default router;
