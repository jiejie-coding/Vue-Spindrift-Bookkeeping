<template>
  <Nav class-prefix="itemNav">
    <div slot="left" @click="goBack" class="left"><Icons name="return"/></div>
    <div class="center" slot="center">新增支出标签</div>
    <div slot="right" class="right" @click="save">保存</div>
  </Nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';
import Nav from '@/components/nav/Nav';

@Component({
  components:{Nav}
})
export default class ItemNav extends Vue{
  save() {
    if(this.value === '') {
      alert("请输入标签名");
    } else {
      tagListModel.add({name:this.selectTag,value:this.value});
      this.value = '';
    }
  }
  goBack() {
    this.$router.replace({
      path:'/labels'
    })
  }

}
</script>

<style lang="scss">
  .itemNav-content {
    display: flex;
    height: 64px;
    line-height: 72px;
}
</style>

<style lang="scss" scoped>
  .left,
  .right {
    flex: 1;
    text-align: center;
  }
  .center {
    text-align: center;
    font-size: 20px;
    flex: 6;
  }
</style>