<template>
  <div>
    <div class="notes">
      <span class="name"><Icons name="notes"/></span>
      <input type="text" v-model="value" placeholder="请输入备注"/>
      <div class="times">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {Component,Watch} from 'vue-property-decorator';
@Component
export default class Notes extends Vue{
  value = '';
  @Watch('value')
  onValueChanged(type: string) {
    this.$emit('update:value',type)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  //border: 1px solid green;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  font-size: 14px;
  padding-left:16px;
  > .name {
    padding-right: 16px;
  }
  > input {
    height: 64px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
  .icon {
    width: 25px;
    height: 25px;
    margin-top: 3px;
  }
}
.times {
  width: 40%;
  padding-right: 8px;
  //border: 1px solid red;
  overflow: hidden;
}
</style>