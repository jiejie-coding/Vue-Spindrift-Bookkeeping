<template>
  <Layout class-prefix="layout">
    <Types/>
    <div class="nulls"></div>
    <TotalBar/>
    <div class="details-wrapper">
    <div class="details">
      <div class="dayTotal">2021-1-02</div>
      <ul class="dayDetail">
        <li v-for="item in recordList">
          <Icons :name="item.tags.name"/>
          <div class="detailContent">
            <div class="tagValue">{{item.tags.value}}</div>
            <div class="otherValue">
              <div class="honers">4.50</div>
              <div class="notes">{{item.notes}}</div>
            </div>
          </div>
          <div class="price">{{item.types}}￥{{item.amount}}</div>
        </li>
      </ul>
<!--      {{recordList}}-->
    </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/nav/Nav.vue';;
import TotalBar from '@/components/TotalBar.vue';
import Types from '@/components/Types.vue';
@Component({
  components: {Types, TotalBar, Nav}
})
export default class Statistics extends Vue{
  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit('fetchRecords')
  }
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
  .nulls {
    background-color: $color-base;
    height: 50px;
  }
  .details-wrapper {
     flex-grow: 1;
    //border: 1px solid red;
    overflow: hidden;
    .details {
      //width: 100%;
      //height: 200px;
      border: 1px solid red;
      margin-top: 20px;
      //overflow: auto;

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
          //border: 1px solid green;
          background: #ffffff;

          > .detailContent {
            //border: 1px solid red;
            display: flex;
            flex-direction: column;
            margin-right: auto;

            > .tagValue {
              font-size: 18px;
              color: #333333;
              //margin-top: 5px;
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
        width: 36px;
        height: 36px;
        //background-color: #C4C4C4;
        border-radius: 50%;
        margin: 0 10px;
      }
    }
  }
</style>