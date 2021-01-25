<template>
  <div class="total">
    <Dropdown/>
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
import Dropdown from '@/components/statistics/Dropdown.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components:{Dropdown}
})
export default class TotalBar extends Vue{
  get TotalOut() {
    const record = this.$store.state.recordList.filter(item => item.types === '-');
    record.filter(item =>  item.times.split(' ')[0].split('-')[1] === this.$store.state.curMonth);
    let sum = 0;
    for(let item of record) {
      sum += parseFloat(item.amount);
    }
    return sum;
  }
  get TotalIn() {
    const record = this.$store.state.recordList.filter(item => item.types === '+');
    record.filter(item =>  item.times.split(' ')[0].split('-')[1] === this.$store.state.curMonth);
    let sum = 0;
    for(let item of record) {
      sum += parseFloat(item.amount);
    }
    return sum;
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
  > .Number {
    display: flex;
    flex-direction: column;
    flex: 2;
  }
  > .NumberTotal {
    > :nth-child(1) {
      //color: red;
    }
    > :nth-child(2) {
      font-size: 18px;
      color: $color-base;
    }
  }
}
</style>