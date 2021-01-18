<template>
  <div class="nav">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>


<script lang="ts">
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
  .nav {
    display: flex;
    background-color: $color-base;
    font-size: 16px;
    color: white;
    padding: 0 15px;
    > :first-child,
    > :nth-child(3) {
      > :first-child {
        text-align: center;
        width: 32px;
        margin-top: 30px;
      }
    }
    > :nth-child(2) {
      flex-grow: 1;
    }
  }
</style>