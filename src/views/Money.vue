<template>
  <Layout class-prefix="layout">
    <Types :value.sync="record.types"/>
    <Tags :data-source="Tags" @update:value='onUpdateTags'/>
    <Notes @update:value="onUpdateNotes"/>
    <NumberPad :value.sync="record.amount"  @submit="saveRecord"/>
    {{recordList}}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model.ts'

const recordLists = model.fetch();

@Component({
  components: {NumberPad, Notes, Tags, Types},
})
export default class Money extends Vue{
  Tags: Record<string, any>[] = [{name:"icon1-3",value:'衣服'},{name:"icon1-4",value:'餐饮'},
    {name:"icon1-5",value:'住房'},{name:"icon1-1",value:'交通'},{name:"icon1-8",value:'旅行'},{name:"icon1-2",value:'医疗'},
    {name:"icon1-7",value:'美容'},{name:"icon1-9",value:'通讯'},{name:"icon1-10",value:'休闲'},
    {name:"icon1-12",value:'知识'},
    {name:"icon1-11",value:'水果'},];

  record: recordItem = {tags:{name:"icon1-1",value:'衣服'}, notes:'', amount: 0, types: '-'}
  recordList: recordItem[] = recordLists;

  onUpdateTags(value: Record<string, any>) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord(){
    this.recordList.push(model.clone(this.record));
  }
  @Watch('recordList')
  onRecordListChanged() {
    model.save(this.recordList);
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>