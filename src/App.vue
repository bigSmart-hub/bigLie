<template>
  <div id="app">
    <Header />
    <!-- <HomePage /> -->
    <Login />
    <Register />
    <City />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Login from "./components/login";
import Footer from "./components/footer.vue";
import Register from "./components/register";
import City from "./components/city";
// import HomePage from "./components/homePage.vue";
export default {
  // name: "header",
  components: {
    // HomePage,
    Header,
    Login,
    Footer,
    Register,
    City
  },
  mounted() {}
};
</script>

<style>
</style>
