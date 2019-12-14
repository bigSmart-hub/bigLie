<template>
  <div id="home">
    <HomeContainTop/>
    <homeContainerContent/>
    <homeContainerBottom />
  </div>
</template>
<script>
import HomeContainTop from "../components/homeContainerTop";
import homeContainerContent from "../components/homeContainerContent";
import homeContainerBottom from "../components/homeContainerBottom";
export default {
  name: "homePage",
  components: {
    HomeContainTop,
    homeContainerContent,
    homeContainerBottom
  },
  data() {
    return {
      provinceId: this.$route.params.id
    };
  }
};
</script>
<style  scoped>
#home {
  width: 1200px;
  margin: 0 auto;
}
</style>