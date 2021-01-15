<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="labels"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icons name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  @extend %outerShadow;
  > .item {
    padding: 3px 0;
    width: 33.3333333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    filter: grayscale(85%);
    color: #777777;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
  .item.selected {
    filter: grayscale(0);
    color: #333333;
  }
}
</style>