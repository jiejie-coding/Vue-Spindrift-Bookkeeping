<template>
  <div class="numberPad">
    <div class="output">
      ￥{{output}}
    </div>
    <div class="buttons" @click="inputContent">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button @click="remove">删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button @click="clear">清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok" @click="ok">ok</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class NumberPad extends Vue{
    @Prop() readonly value!: string;
    output = this.value.toString();
    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if(this.output.length === 9) { return }
      if(this.output === '0') {
        if('0123456789'.indexOf(input) >= 0){
          this.output = input;
        } else if(input === '.') {
          this.output += button.textContent;
        }
        return;
      }
      if(input === '.' && this.output.indexOf('.') >= 0) { return ; }
      if('.0123456789'.indexOf(input) >= 0)this.output += button.textContent;
    }
    remove() {
      if(this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
    clear() {
      this.output = '0';
    }

    ok() {
      if (parseFloat(this.output) === 0) {
        alert("金额不能为0哦~")
        return ;
      }
      this.$emit('update:value',this.output);
      this.$emit('submit',this.output);
      this.output = '0';
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    //@extend %innerShadow;
    background-color: #f5f5f5;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
    height: 64px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      border: none;
      width: 25%;
      height: 7vh;
      float: left;
      //background-color: #EFEFEF;
      &.ok {
        height: 14vh;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: $color-base;
      &:nth-child(1) {
        background: lighten($bg, 6*6%);
      }
      &:nth-child(2), &:nth-child(5) {
        background: lighten($bg, 6*5%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: lighten($bg, 6*4%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: lighten($bg, 6*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: lighten($bg, 6*2%);
      }
      &:nth-child(14) {
        background: lighten($bg, 6%);
      }
      &:nth-child(12) {
        background: $bg;
      }
    }

  }
  .icon {
    margin-bottom: 8px;
    width: 25px;
    height: 25px;

  }
}
</style>