<template>
  <div class="weather">
    <small>the.weather</small>

    <div class="weather-output" v-for="weatherData in allWeather" :key="weatherData.location.tz_id">
      <p>{{weatherData.location.name}}</p>
    </div>

    <!-- <div class="weather-data" v-for="weatherData in weather" :key="weatherData.country">
        <h2>Going home</h2>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("weather", {
      fetchWeather: "fetchWeather",
    }),
  },

  computed: mapGetters("weather", { allWeather: "allWeather" }),

  mounted() {
    this.$store.dispatch("fetchWeather");
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
