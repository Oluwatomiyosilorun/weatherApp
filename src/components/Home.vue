<template>
  <div class="hello">
    <Celius :allWeather="ongetData" />
    <Search @data="getAll" />
  </div>
  
</template>

<script>
import Search from "./Search";
import Celius from "./Celius";

export default {
  data() {
    return {
      ongetData: [],
    };
  },
  components: {
    Search,
    Celius,
  },
  methods: {
    getAll(param) {
      this.ongetData = param;
    },
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
  background-size: cover;
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
