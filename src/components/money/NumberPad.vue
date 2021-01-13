<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
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
      if(this.output.length === 16) { return }
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
      this.$emit('update:value',this.output)
      this.$emit('submit',this.output)
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
    height: 72px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      border: 1px solid #777;
      width: 25%;
      height: 48px;
      float: left;
      background-color: #EFEFEF;
      &.ok {
        height: 48*2px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
    }

  }
  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>