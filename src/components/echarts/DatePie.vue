<template>
  <Chart class="chart" :options="DatePieOptions"/>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Chart from '@/components/echarts/Chart.vue';
import Any = jasmine.Any;

@Component({
  components: {Chart}
})
export default class DatePie extends Vue {
  created() {
    this.$store.commit('fetchRecords');
  }
  get newMap() {
    const map: {[key: string]: number} = {};

    for(const item of this.$store.state.oneMonthRecord) {
      const date = item.tags.value;
      map[date] = map[date] || 0;
      map[date] += parseFloat(item.amount.toString());
    }

    let newMap = [] as {name:string,value:number}[];
    Object.keys(map).forEach(key => {
      newMap.push({name:key,value:map[key]})
    })

    newMap.sort(function (a:any,b:any) {
      return b.value - a.value;
    })
    return newMap;
  }
  get DatePieOptions() {

    return {
      title: {
        text: '分类消费总览',
        x: 10,
        y:0
      },
      grid: {
        left: 100,
        right: 100,
        top: 100,
        bottom: 100
      },
      tooltip: {
        trigger: 'item',
        x: 'center',
        y: 'bottom',
        formatter: '{b} : {c} ({d}%)'
      },

      series: [
        {
          type: 'pie',
          radius: [10, 100],
          center: ['50%', '50%'],

          label: {
            length: 8,
            show: true,
            position: 'outside',
            color:'#333'
          },
          labelLine: {
            length: 20,
            length2: 10,
          },
          color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
          data: this.newMap===[]?[{name:'11',value:'100%'}]:this.newMap,
        },
      ]
    };

  }
}
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
    height: 300px;
    text-align: center;
  }
</style>