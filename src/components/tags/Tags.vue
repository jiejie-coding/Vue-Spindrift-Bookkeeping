<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.name">
        <div @click="selects(tag)" class="item-wrapper">
          <div :class="{'selected': selectedTags === tag}" class="icon-wrapper">
            <Icons :name="tag.name"/>
          </div>
          {{tag.value}}
        </div>
      </li>
      <li v-if="addNewTag">
        <div class="item-wrapper">
          <div class="icon-wrapper">
            <router-link to="/Labels">
              <Icons name="define"/>
            </router-link>
          </div>
          新增
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Tags extends Vue{
  @Prop() dataSource!: object[];
  @Prop() addNewTag: boolean;
  selectedTags = this.dataSource && this.dataSource[0];
  selects(tag: object) {
    this.selectedTags = tag;
    this.$emit('update:value',this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.tags {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 14px;
  padding: 0 16px;
  overflow: auto;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20%;
      margin-top: 20px;
      > .item-wrapper {
        text-align: center;
        > .icon-wrapper {
          width: 50px;
          height: 50px;
          background-color: #f5f5f5;
          border-radius: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &.selected {
            @extend %outerShadow;
            background-color: #e3e3e3;

          }
        }
      }
    }
  }
  .icon {
    width: 32px;
    height: 32px;
    display: block;
  }
}
</style>