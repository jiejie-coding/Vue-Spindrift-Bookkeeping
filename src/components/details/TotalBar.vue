<template>
  <div class="total">
    <div class="Date">
      <Dropdown :data-source="showYear"/>
      <Dropdown :data-source="showMonth"/>
    </div>
    <div class="Number NumberOut">
      <span>总支出</span>
      <span>-{{TotalOut}}￥</span>
    </div>
    <div class="Number NumberIn">
      <span>总收入</span>
      <span>+{{TotalIn}}￥</span>
    </div>
    <div class="Number NumberTotal">
      <span>合计</span>
      <span>{{Total}}￥</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Dropdown from '@/components/details/Dropdown.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components:{Dropdown}
})
export default class TotalBar extends Vue{
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
  InOrOutTotal(type:string) {
    let record = this.$store.state.recordList.filter(item => item.types === type);
    record = record.filter(item =>  {
      return parseInt(item.times.split(' ')[0].split('-')[0]) === parseInt(this.$store.state.curYear)
    });
    record = record.filter(item =>  {
      return parseInt(item.times.split(' ')[0].split('-')[1]) === parseInt(this.$store.state.curMonth)
    });
    let sum = 0;
    for(const item of record) {
      sum += parseFloat(item.amount);
    }
    return sum;
  }
  get TotalOut() {
    let ans = this.InOrOutTotal('-');
    return ans;
  }
  get TotalIn() {
    let ans = this.InOrOutTotal('+');
    return ans;
  }
  get Total() {
    return this.TotalIn - this.TotalOut;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.total {
  width: 90%;
  margin: 20px auto;
  //margin: -40px auto 20px;
  padding: 10px 0 10px 15px;
  background: #ffffff;
  border: 0.2px solid #EBEEF5;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  text-align: center;
  > .Date {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > .Number {
    display: flex;
    flex-direction: column;
    flex: 2;
  }
  > .NumberTotal {
    // > :nth-child(1) {
    //   color: red;
    // }
    > :nth-child(2) {
      font-size: 18px;
      color: $color-base;
    }
  }
}
</style>