<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="labels"/>
      Labels
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icons name="money"/>
      Money
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="statistics"/>
      Statistics
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  > .item {
    padding: 2px 0;
    width: 33.3333333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    filter: grayscale(85%);
  }
  .icon {
    width: 32px;
    height: 32px;
  }
  .item.selected {
    filter: grayscale(0);
  }
}
</style>