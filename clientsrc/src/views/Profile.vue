<template>
  <div class="about text-center">
    <h1>Profile {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getFollowers", this.$auth.userInfo.email);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    followers() {
      return this.$store.state.followers;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
div {
  background: rgb(186, 27, 29);
  background: linear-gradient(
    305deg,
    rgba(186, 27, 29, 1) 0%,
    rgba(242, 139, 51, 1) 36%,
    rgba(242, 139, 51, 1) 68%,
    rgba(186, 27, 29, 1) 100%
  );
  height: 100rem;
}
</style>
