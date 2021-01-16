<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  export default {
    name:"App"
  }
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  color: #333;
  background-color: #fdfdfd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
