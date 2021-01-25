<template>
  <div>
  <div class="details"  v-for="(value,key) in recordList">
    <div class="dayTotal">{{key}}</div>
    <ul class="dayDetail">
      <li v-for="item in value">
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
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Details extends Vue{
  get recordList() {
    let record = [] as recordItem[];
    let type = this.$store.state.selectedType;
    if(type === '-') {
      record = this.$store.state.recordList.filter(item => item.types === '-');
    } else if(type === '+') {
      record = this.$store.state.recordList.filter(item => item.types === '+');
    }
    let map: {[key:string]: recordItem[]} = {};
    record.filter(item =>  item.times.split(' ')[0].split('-')[1] === this.$store.state.curMonth);
    for(let item of record) {
      let date = item.times.split(' ')[0];
      map[date] = map[date] || [];
      map[date].push(item);
    }
    const newMap = {};
    function dateSort(a,b) {
      return a.times - b.times;
    }
    Object.keys(map).sort(dateSort).forEach(function(key) {
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
    //width: 100%;
    //height: 200px;
    border: 1px solid red;
    //margin-top: 20px;
    .dayTotal {
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
            //margin-bottom: 5px;
            .notes {
              margin: 0 10px;
            }
          }
        }

        .price {
          font-size: 20px;
          //border: 1px solid pink;
          margin-right: 15px;
          color: $color-base;
        }
      }
    }

    .icon {
      width: 40px;
      height: 40px;
      //background-color: #C4C4C4;
      border-radius: 50%;
      margin: 0 10px;
      border: 1px solid $color-base;
      padding: 5px;
      border-radius: 50%;
    }
  }
</style>