<template>
  <div class="container">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
}
</style>
