<template>
  <div class="nav" :class="classPrefix && `${classPrefix}-content`">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Nav extends Vue{
  @Prop() classPrefix!: string;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.nav {
  background-color: $color-base;
  color: white;
}
</style>