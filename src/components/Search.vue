<template>
  <div class="search">
    <aside>
      <input type="search" placeholder="Another Location" name="location" v-model="searchInput" />
      <span>&#x1F50D;</span>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
};
</script>

<style scoped lang="scss">
.search {
  position: absolute;
  width: 400px;
  height: 100%;
  top: 0%;
  right: 0%;
  bottom: 0;
  background-color: #0d232f;
  border: 1px solid #0d232f;
  opacity: 0.9;
  aside {
    padding: 10%;
    display: flex;
    input {
      width: 80%;
      height: 35px;
      border: 0;
      background-color: inherit;
      border-bottom: 1px solid whitesmoke;
      box-shadow: none;
      outline: none;
      color: whitesmoke;
    }
    span {
      background-color: #d66c06;
      padding: 7%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
