<template>
  <Layout class-prefix="statistics">
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
.statistics-layout {
  display: flex;
  flex-direction: column;
}
</style>
