<template>
  <ul class="types">
    <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  get value() {
    return this.$store.state.selectedType;
  }

  selectType(type: string) {
    this.$store.commit('changeSelectType',type);
    this.$store.commit('fetchTags');
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background: $color-base;
  text-align: center;
  display: flex;
  font-size: 16px;
  color: #fff;
  padding: 10px 20%;
  > li {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #ffffff;
    margin-top: 20px;
    line-height: 30px;
    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:nth-child(2) {
      border-radius: 0 8px 8px 0;
    }
    &.selected {
      color: $color-base;
      background-color: #fff;
    }
  }
}
</style>