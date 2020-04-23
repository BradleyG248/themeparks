<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand pl-3 pr-3" :to="{ name: 'Home' }">Lagoon</router-link>
    <button
      class="navbar-toggler border-0"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }"></li>
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link">Posts</router-link>
        </li>
        <li
          class="nav-item pl-3"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
        <li
          class="nav-item pl-3"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Followers' }"
        >
          <router-link class="nav-link" :to="{ name: 'Followers' }">Followers</router-link>
        </li>
        <li class="nav-item pl-3">
          <add-post />
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success mr-4" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger mr-4" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
import addPost from "../components/addPosts";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      await this.$auth.logout();
      this.$store.dispatch("resetBearer");
      this.$router.push({ name: "home" });
    }
  },
  components: {
    addPost
  }
};
</script>

<style>
.query {
  max-width: 50%;
}

nav {
  background: rgb(186, 27, 29);
  background: linear-gradient(
    305deg,
    rgba(186, 27, 29, 1) 0%,
    rgba(242, 67, 51, 1) 100%
  );
}
button.navbar-toggler {
  box-shadow: white;
}
.nav-link {
  font-size: 1.3rem;
  font-weight: 700;
}
</style>
