<template>
  <div  class="details">
  <div v-if="JSON.stringify(recordList) !== '{}'">
    <div v-for="(value,key) in recordList" :key="key">
      <div class="dayTotal">
        <span>{{key}}</span>
        <span>总计：{{dayTotal(value)}}</span>
      </div>
      <ul class="dayDetail">
        <li v-for="item in value" :key="item.tag">
          <Icons :name="item.tags.name"/>
          <div class="detailContent">
            <div class="tagValue">{{item.tags.value}}</div>
            <div class="otherValue">
              <div class="honers">{{item.times.split(' ')[1]}}</div>
              <div class="notes">{{item.notes}}</div>
            </div>
          </div>
          <div class="price">{{item.types}}{{item.amount}}￥</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="no-content" v-else>
    <Icons name="no-content"/>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Details extends Vue{
  dayTotal(value:recordItem[]) {
    let ans = 0;
    for(let i = 0; i <  value.length; i++) {
      ans += parseFloat(value[i].amount.toString());
    }
    return ans;
  }
  get recordList() {
    const map: {[key: string]: recordItem[]} = {};

    this.$store.commit('fetchRecord');
    // console.log(123, this.$store.state.record);
    for(const item of this.$store.state.record) {
      const date = item.times.split(' ')[0];
      map[date] = map[date] || [];
      map[date].push(item);
    }
    const newMap = {};
    Object.keys(map).sort().reverse().forEach(function(key) {
      newMap[key] = map[key];
    });
    return newMap;
  }

  created() {
    this.$store.commit('fetchRecords')
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    .dayTotal {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      background-color: #EEEEEE;
    }
    .dayDetail {
      > li {
        height: 72px;
        border-bottom: 1px solid #EEEEEE;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        > .detailContent {
          display: flex;
          flex-direction: column;
          margin-right: auto;
          > .tagValue {
            font-size: 18px;
            color: #333333;
          }
          > .otherValue {
            display: flex;
            flex-direction: row;
            color: #777777;
            font-size: 14px;
            .notes {
              margin: 0 10px;
            }
          }
        }
        .price {
          font-size: 20px;
          margin-right: 15px;
          color: $color-base;
        }
      }
    }
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 10px;
      border: 1px solid $color-base;
      padding: 5px;
      border-radius: 50%;
    }
  }
  .no-content {
    > .icon {
      display: block;
      width: 250px;
      height: 250px;
      margin: auto;
    }
  }
</style>