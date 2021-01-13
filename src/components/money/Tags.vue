<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource">
        <span @click="toggle(tag)" :class="{'selected': selectedTags.indexOf(tag) >= 0}">
          {{tag}}
        </span>
      </li>
      <li><span @click="create">新增</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if(index >= 0) {
      this.selectedTags.splice(index,1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags);
  }
  create() {
    const name = window.prompt("请输入标签名");
    if(name === '') {
      window.alert('标签名不为空');
    } else if(this.dataSource) {
        this.$emit('update:dataSource',[...this.dataSource,name]);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 14px;
  overflow: auto;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 25%;
      text-align: center;
      margin: 20px 0;
      > span {
        $bg: #d9d9d9;
        display: inline-block;
        background: $bg;
        $h:24px;
        line-height: $h;
        height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        &.selected {
          background-color: darken($bg, 20%);
          color: #ffffff;
        }
      }
    }
  }

}
</style>