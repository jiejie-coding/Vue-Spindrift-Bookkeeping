<template>
  <Layout>
    <div class="newTag">
      <ItemNav  :value.sync="value" :name="selectTag"/>
      <div class="input">
        <div class="input-text">
          <span>名称：</span>
          <input type="text" placeholder="4个字以内" v-model="value"/>
        </div>
        <div class="input-icon">选择图标</div>
      </div>
      <Tags :data-source="Tags" @update:value='onUpdateTags'/>
    </div>
  </Layout>
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
    font-size: 16px;
    .input-text {
      width: 100%;
      margin-top: 3px;
      padding-left: 20px;
      background: #EEEEEE;
      height: 48px;
      line-height: 48px;
      > input {
        background-color: inherit;
        margin-left: 10px;
        border: none;
      }
    }
    .input-icon {
        margin-top: 20px;
      text-align: center;
    }
  }
</style>