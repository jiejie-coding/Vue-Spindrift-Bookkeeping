<template>
  <Layout>
    <div class="newTag">
      <ItemNav :value.sync="value" :name="selectTag"/>
      <div class="input">
        <div class="input-text">
          <span>名称：</span>
          <input type="text" placeholder="4个字以内" v-model="value" @update:value="onUpdateInputContent"/>
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
import {Component, Prop, Watch} from 'vue-property-decorator';
import ItemNav from '@/components/nav/ItemNav.vue';

@Component({
  components:{ItemNav, Tags,Nav}
})
export default class NewTag extends Vue{
  docHeight = document.documentElement.clientHeight;  //默认屏幕高度
  showHeight = document.documentElement.clientHeight;   //实时屏幕高度
  mounted() {
    // window.onresize监听页面高度的变化
    window.onresize = ()=>{
        this.showHeight = document.documentElement.clientHeight;
    }
  }

  @Watch('showHeight')
  onShowHeightChanged() {
    if(this.showHeight >= this.docHeight){
      this.$store.commit('changeHidden',true);
    } else {
      this.$store.commit('changeHidden',false);
    }
  }

  value = '';
  selectTag = '';
  inputContent = '';

  get Tags() {
    return this.$store.state.newTag;
  }
  onUpdateTags(value: tagItem) {
      this.selectTag = value.name;
  }
  onUpdateInputContent(content: string) {
    this.inputContent = content;
  }

}
</script>


<style lang="scss" scoped>
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