<template>
  <div class="main-container">
    <NavBar />
    <Banner />
    <router-view></router-view>
  </div>
</template>
  
<script>
import NavBar from "./NavBar.vue";
import Banner from "./Banner.vue";

export default {
  name: "Principal",
  components: {
    NavBar,
    Banner,
  },
};
</script>
  
<style scopped>
.main-container {    
  background-image: url('../static/banner.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
}
</style>  