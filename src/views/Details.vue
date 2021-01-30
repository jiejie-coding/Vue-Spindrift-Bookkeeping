<template>
  <Layout class-prefix="details">
    <Types/>
    <TotalBar/>
    <DateShow/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TotalBar from '@/components/details/TotalBar.vue';
import Types from '@/components/Types.vue';
import DateShow from '@/components/details/DateShow.vue';
@Component({
  components: {DateShow, Types, TotalBar}
})
export default class Statistics extends Vue{
}
</script>

<style lang="scss">
.details-layout {
  display: flex;
  flex-direction: column;
}
</style>
