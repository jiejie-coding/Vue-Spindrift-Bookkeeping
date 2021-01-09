<template>
  <div class="layout-wrapper">
    <div class="content">
      Money
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue';
export default {
  name: 'Money',
  components: {Nav}
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  //border: 1px solid blue;
}
.content {
  //border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
}
</style>