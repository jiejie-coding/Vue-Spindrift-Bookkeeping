<template>
  <div>
    <router-link to="/labels">
      <Icons name="labels"/>
      Labels
    </router-link>
    <router-link to="/money">
      <Icons name="money"/>
      Money
    </router-link>
    <router-link to="/statistics">
      <Icons name="statistics"/>
      Statistics
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>

</style>