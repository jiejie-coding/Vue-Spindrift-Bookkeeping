<template>
  <Layout class-prefix="layout">
    <Types/>
    <TotalBar/>
    <Details/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TotalBar from '@/components/TotalBar.vue';
import Types from '@/components/Types.vue';
import Details from '@/components/statistics/Details.vue';
@Component({
  components: {Details, Types, TotalBar}
})
export default class Statistics extends Vue{
}
</script>

<style lang="scss">
  .dropDown-content {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  //.nulls {
  //  background-color: $color-base;
  //  height: 50px;
  //}

</style>