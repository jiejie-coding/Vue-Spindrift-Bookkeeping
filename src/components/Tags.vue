<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.value">
        <div @click="selects(tag)" class="item-wrapper">
          <div :class="{'selected': selectedTags === tag}" class="icon-wrapper">
            <Icons :name="tag.name"/>
          </div>
          {{tag.value}}
        </div>
      </li>
      <li v-if="addNewTag" @click="goLabel">
        <div class="item-wrapper">
          <div class="icon-wrapper">
              <Icons name="define"/>
          </div>
          设置
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Tags extends Vue{
  @Prop() dataSource!: object[];
  @Prop({default: false}) addNewTag!: boolean;
  selectedTags = this.dataSource && this.dataSource[0];
  @Watch('dataSource')
  onDataSourceChanged(type: string) {
    this.selectedTags = this.dataSource && this.dataSource[0];
  }
  goLabel() {
    this.$router.replace('/labels');
  }
  selects(tag: object) {
    this.selectedTags = tag;
    this.$emit('update:value',this.selectedTags);
  }
  mounted() {
    this.$emit('update:value',this.selectedTags);
  }
  updated() {
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
  .icon {
    width: 32px;
    height: 32px;
    display: block;
  }
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

}
</style>