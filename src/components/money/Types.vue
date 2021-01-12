<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background: $color-base;
  text-align: center;
  display: flex;
  font-size: 24px;
  color: #fff;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.selected {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        bottom: 0;
        background-color: #333;
      }
    }
  }
}
</style>