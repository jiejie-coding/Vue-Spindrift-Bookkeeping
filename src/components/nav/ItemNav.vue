<template>
  <Nav class-prefix="itemNav">
    <div slot="left" @click="goBack" class="left"><Icons name="return"/></div>
    <div class="center" slot="center">新增{{showStr}}标签</div>
    <div slot="right" class="right" @click="save">保存</div>
  </Nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Nav from '@/components/nav/Nav.vue';

@Component({
  components:{Nav}
})
export default class ItemNav extends Vue{
  @Prop() value!: string;
  @Prop() name!: string;
  showStr = '';
  type = '';
  created() {
    this.type = this.$store.state.selectedType;
    if(this.type === '+') {
      this.showStr = '收入';
    } else if(this.type === '-') {
      this.showStr = '支出';
    }
  }
  save() {
    if(this.value === '') {
      alert("请输入标签名");
    } else {
      const item = {name:this.name,value:this.value,type:this.type};
      this.$store.commit('createTag',item);
      this.$emit('update:value','');
    }
  }
  goBack() {
    this.$router.replace('/labels');
  }
}
</script>

<style lang="scss">
  .itemNav-nav {
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