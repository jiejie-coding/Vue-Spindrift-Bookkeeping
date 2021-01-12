<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue {
    type = '-'
    selectType(type: string) {
      if(type !== '+' && type !== '-') {
        console.log(new Error('Type is wrong'));
      }
      this.type = type;
    }

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