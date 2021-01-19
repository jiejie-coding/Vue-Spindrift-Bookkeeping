<template>
  <Layout class-prefix="layout">
    <Types :value.sync="record.types"/>
    <Tags :data-source="Tags" @update:value='onUpdateTags' :addNewTag="true"/>
    <Notes @update:value="onUpdateNotes"/>
    <NumberPad :value.sync="record.amount"  @submit="saveRecord"/>
<!--    {{recordList}}-->
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/nav/MoneyNav.vue';
import Tags from '@/components/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/model/recordListModel'
import tagListModel from '@/model/tagListModel';

const recordLists = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {NumberPad, Notes, Tags, Types},
})
export default class Money extends Vue{
  Tags: object[] | object = tagList;

  created() {
    this.Tags = tagListModel.fetch();
    console.log(111);
  }
  record: recordItem = {tags:{name:"icon1-1",value:'衣服'}, notes:'', amount: 0, types: '-'}
  recordList: recordItem[] = recordLists;

  onUpdateTags(value: object) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord(){
    this.recordList.push(recordListModel.clone(this.record));
  }
  @Watch('recordList')
  onRecordListChanged() {
    recordListModel.save(this.recordList);
  }

}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>