<template>
  <div class="hello">
    <Celius />
    <Search />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Celius from "./Celius.vue";

export default {
  components: {
    Search,
    Celius
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url("../assets/night.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
