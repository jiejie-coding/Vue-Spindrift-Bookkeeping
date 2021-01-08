<template>
  <div id="app">
    <div id="nav">
      <router-link to="/money">Money</router-link> |
      <router-link to="/labels">Labels</router-link> |
      <router-link to="/statistics">Statistics</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
