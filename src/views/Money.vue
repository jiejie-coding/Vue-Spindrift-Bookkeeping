<template>
  <Layout class-prefix="money">
    <Types/>
    <Tags :data-source="tagList" @update:value='onUpdateTags' :addNewTag="true"/>
    <Notes @update:value="onUpdateNotes"><DatePicker @update:value='onUpdateTimes'/></Notes>
    <NumberPad :value.sync="record.amount"  @submit="saveRecord"/>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
import Tags from '@/components/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import DatePicker from '@/components/money/DatePicker.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {NumberPad, Notes, Tags, Types, DatePicker},
})
export default class Money extends Vue{
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