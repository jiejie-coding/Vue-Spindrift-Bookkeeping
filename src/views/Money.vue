<template>
  <Layout class-prefix="layout">
    <Types/>
    <Tags :data-source="tagList" @update:value='onUpdateTags' :addNewTag="true"/>
    <Notes @update:value="onUpdateNotes"><DatePicker @update:value='onUpdateTimes'/></Notes>
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
import DatePicker from '@/components/money/DatePicker.vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component({
  components: {NumberPad, Notes, Tags, Types, DatePicker},
})
export default class Money extends Vue{
  get recordList() {
    return this.$store.state.recordList;
  }
  get tagList() {
    return this.$store.state.tagList;
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
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>