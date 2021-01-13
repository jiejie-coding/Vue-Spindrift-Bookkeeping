<template>
  <Layout class-prefix="layout">
    <Types :value.sync="record.types"/>
    <Tags :data-source.sync="tags" @update:value='onUpdateTags' @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <NumberPad :value.sync="record.amount"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[];
  types: string;
  notes: string;
  amount: number;
}
@Component({
  components: {NumberPad, Notes, Tags, Types},
})
export default class Money extends Vue{
  tags: string[] = ["衣","食","住","行"]
  record: Record = {tags:[], notes:'', amount: 0, types: '-'}
  recordList:Record[] = [];
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord(){
    const record1 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record1);
  }
  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>