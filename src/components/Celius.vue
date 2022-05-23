<template>
  <div class="weather">
    <small>the.weather</small>

    <div class="weather-data"></div>
  </div>
</template>

<script>
export default {
  computed: {
    getWeatherInfo() {
      return this.$store.state.weather;
    },
  },

  mounted() {
    this.$store.dispatch('fetchWeather');
  },
};
</script>
<style scoped lang="scss">
.weather {
  background-color: black;
  margin: 10%;
  color: white;
}
</style>
