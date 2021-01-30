<template>
  <Layout class-prefix="money">
    <Types/>
    <Tags :data-source="tagList" @update:value='onUpdateTags' :addNewTag="true"/>
    <Notes @update:value="onUpdateNotes"><DatePicker @update:value='onUpdateTimes'/></Notes>
    <NumberPad :value.sync="record.amount"  @submit="saveRecord" v-show="hidden"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
import Tags from '@/components/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import DatePicker from '@/components/money/DatePicker.vue';
import {Component, Watch} from 'vue-property-decorator';

@Component({
  components: {NumberPad, Notes, Tags, Types, DatePicker},
})

export default class Money extends Vue{
  docHeight = document.documentElement.clientHeight;  //默认屏幕高度
  showHeight = document.documentElement.clientHeight;   //实时屏幕高度
  hidden = true;
  mounted() {
    // window.onresize监听页面高度的变化
    window.onresize = ()=>{
      return(()=>{
        this.showHeight = document.documentElement.clientHeight;
      })()
    }
  }

  @Watch('showHeight')
  onShowHeightChanged() {
    if(this.showHeight >= this.docHeight){
      this.hidden=true;
      this.$store.commit('changeHidden',true);
    } else {
      this.hidden=false;
      this.$store.commit('changeHidden',false);
    }
  }


  get recordList() {
    return this.$store.state.recordList;
  }
  get tagList() {
    if(this.$store.state.selectedType === '-') {
      return this.$store.state.tagList.filter(item => item.type === '-');
    } else if(this.$store.state.selectedType === '+') {
      return this.$store.state.tagList.filter(item => item.type === '+');
    }
  }

  created() {
    this.$store.commit('fetchTags');
    this.$store.commit('fetchRecords');
  }

  record: recordItem = {tags:{}, notes:'', amount: 0, types: '-',times: ''}

  onUpdateTags(value: object) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateTimes(times: string) {
    this.record.times = times;
  }
  saveRecord(){
    this.record.types = this.$store.state.selectedType;
    this.$store.commit('createRecord', this.record);
  }

}
</script>

<style lang="scss">
  .money-layout {
    display: flex;
    flex-direction: column;
  }
</style>