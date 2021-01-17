<template>
  <Layout class-prefix="newTag">
    <h3 class="title">新增支出标签：</h3>
    <div class="input">
      <div class="input-text">
        <span>名称</span>
        <input type="text" placeholder="4个字以内" v-model="value"/>
      </div>
      <div class="input-icon">图标</div>
    </div>
    <Tags :data-source="Tags" @update:value='onUpdateTags'/>
    <div class="save">
      <button class="save" @click="save">保存</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Tags from '@/components/money/Tags.vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';


@Component({
  components:{Tags}
})

export default class NewTag extends Vue{
  Tags: object[] = [{name:"icon1-3"},{name:"icon1-4"},
    {name:"icon1-5"},{name:"icon1-1"},{name:"icon1-8"},{name:"icon1-2"},
    {name:"icon1-7"},{name:"icon1-9"},{name:"icon1-10"},
    {name:"icon1-12"},
    {name:"icon1-11"},];
  value:string = '';
  selectTag: string;
  onUpdateTags(value: object) {
    this.selectTag = value.name;
  }
  save() {
    if(this.value === '') {
      alert("请输入标签名");
    } else {
      console.log(11);
      console.log(tagListModel.data);
      tagListModel.add({name:this.selectTag,value:this.value})
      console.log(tagListModel.data);
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
  .title {
    position: relative;
    height: 64px;
    line-height: 64px;
    margin-left: 20px;
    &::after {
      content: '';
      position: absolute;
      width: 120px;
      height: 2px;
      background-color: $color-base;
      bottom: 10px;
      left: -2px;
    }
  }
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
  .save {
    width: 58px;
    height: 32px;
    margin: 30px auto;
  }
</style>