<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-layout`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/TabBar.vue';
export default {
  name: "Layout",
  props:['classPrefix'],
  components: {Nav}
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>