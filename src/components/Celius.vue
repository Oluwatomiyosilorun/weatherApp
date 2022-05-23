<template>
  <div class="weather">
    <p class="weather-subtitle">the.weather</p>

    <div class="weather-output">
      <p class="weather-output-celcius">{{ allWeather.current.temp_c }}&#176;</p>
      <p class="weather-output-name">{{ allWeather.location.name}} <span>{{ allWeather.location.localtime}}</span></p>
      <p class="weather-output-cloudy">&#9729; <span>{{ allWeather.current.condition.text }}</span></p>
    </div>
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
    this.fetchWeather();
  },

  //   mounted() {
  //     this.$store.dispatch("fetchWeather");
  //   },
};
</script>
<style scoped lang="scss">
.weather {
  margin: 10%;
  color: white;
  width: 50%;
  &-subtitle {
    font-size: 13px;
    font-weight: bold;
  }
  &-output {
    margin-top: 50%;
    display: flex;
    align-items: center;
    flex-direction: row;
    &-celcius {
      font-size: 80px;
    }
    &-name {
      font-size: 40px;
      span {
        font-size: 14px;
        display: block;
      }
    }
    &-cloudy{
      font-size: 30px;
      margin-left: 3%;
      span{
        font-size: 14px;
        display: block;
      }
    }
  }
}
</style>
