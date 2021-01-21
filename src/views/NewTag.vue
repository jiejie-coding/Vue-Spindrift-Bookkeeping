<template>
  <div class="newTag">
    <ItemNav  :value.sync="value" :name="selectTag"/>
    <div class="input">
      <div class="input-text">
        <span>名称</span>
        <input type="text" placeholder="4个字以内" v-model="value"/>
      </div>
      <div class="input-icon">图标</div>
    </div>
    <Tags :data-source="Tags" @update:value='onUpdateTags'/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tags from '@/components/Tags.vue';
import Nav from '@/components/nav/Nav.vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';
import ItemNav from '@/components/nav/ItemNav.vue';

@Component({
  components:{ItemNav, Tags,Nav}
})

export default class NewTag extends Vue{
  Tags: object[] = [{name:"icon1-3"},{name:"icon1-4"},
    {name:"icon1-5"},{name:"icon1-1"},{name:"icon1-8"},{name:"icon1-2"},
    {name:"icon1-7"},{name:"icon1-9"},{name:"define"},
    {name:"icon1-12"},
    {name:"icon1-11"}];
  value = '';
  selectTag = '';
  onUpdateTags(value: { name: string;value: string }) {
      this.selectTag = value.name;
  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
  .input {
    padding: 0 40px;
    font-size: 18px;
    .input-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 84px;
      > input {
        padding-left: 18px;
        font-size: 14px;
        height: 32px;
        width: 80%;
        border: none;
        border-bottom: 1px solid #777777;
      }
    }
  }
</style>