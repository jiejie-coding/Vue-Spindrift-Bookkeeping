<template>
  <div class="total">
    <Dropdown/>
    <div class="Number NumberOut">
      <span>总支出</span>
      <span>-40000</span>
    </div>
    <div class="Number NumberIn">
      <span>总收入</span>
      <span>-40000</span>
    </div>
    <div class="Number NumberTotal">
      <span>合计</span>
      <span>-40000</span>
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

}
</script>

<style lang="scss" scoped>
.total {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
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
}
</style>