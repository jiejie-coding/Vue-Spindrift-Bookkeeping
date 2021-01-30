<template>
    <Chart class="chart" :options="DateLineOptions"/>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Chart from '@/components/echarts/Chart.vue';

@Component({
  components: {Chart}
})
export default class DateLine extends Vue {
  created() {
    this.$store.commit('fetchRecords');
  }
  get DateLineOptions() {
    const map: {[key: string]: recordItem[]} = {};
    this.$store.commit('fetchRecord');
    for(const item of this.$store.state.record) {
      const date = item.times.split(' ')[0];
      map[date] = map[date] || [];
      map[date].push(item);
    }
    let newMap = {};
    Object.keys(map).forEach(function(key) {
      map[key].forEach(value => {
        let keys = parseInt(key.slice(-2));
        newMap[keys] = newMap[keys] || 0;
        newMap[keys] += parseFloat(value.amount.toString());
      })
    });

    let days = new Date(this.$store.state.curYear, this.$store.state.curMonth.slice(0,-2) , 0).getDate();
    let arr1 = [] as number[];
    let arr2 = [] as number[];
    for (let i = 1; i <= days; i++) {
      arr1.push(i);
      arr2.push(newMap[i] || 0)
    }

    return {
      title: {
        text: '月消费总览',
        x: 'center'
      },
      grid: {
        left: 0,
        right: 0,
        bottom: '20%'
      },
      xAxis: {
        type: 'category',
        data: arr1,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle:{color: '#ccc'}
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      tooltip: {
        triggerOn: 'click',
        trigger: 'axis',
        formatter: `${this.$store.state.curYear}年{b0}日<br />${this.$store.state.selectedType === '-'?"支出":"收入"}：{c0}`
      },
      series: [{
        symbol: 'circle',
        symbolSize: 7,
        itemStyle: {
          color: `${this.$store.state.selectedType === '-'?'#67E0E3':'#9FE6B8'}`
        },
        data: arr2,
        type: 'line',

      }]
    }

  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 400px;
  text-align: center;
}
</style>