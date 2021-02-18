<template>
  <layout class-prefix="details">
      <Types/>
    <div class="wrapper">
      <div class="dropdown">
        <Dropdown :data-source="showYear"/>
        <Dropdown :data-source="showMonth"/>
      </div>
      <DateLine/>
      <DatePie/>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import DateLine from '@/components/echarts/DateLine.vue';
import Types from '@/components/Types.vue';
import Dropdown from '@/components/details/Dropdown.vue';
import DatePie from '@/components/echarts/DatePie.vue';
@Component({
  components: {DatePie, Types, DateLine,Dropdown}
})
export default class Statistics extends Vue{
  get showMonth() {
    return this.$store.state.showMonth;
  }
  get showYear() {
    return this.$store.state.showYear;
  }
  created() {
    this.$store.commit('fetchYear');
    this.$store.commit('fetchMonth');
  }
};
</script>

<style lang="scss">
.details-layout {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss" scoped>
  .wrapper {
    flex-grow: 1;
    overflow: auto;
    .dropdown {
      margin: auto;
      display: flex;
      width: 30%;
      justify-content: space-between;
      text-align: center;
      padding: 10px 0;
    }
  }
</style>