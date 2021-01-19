<template>
  <Nav>
    <div slot="center">
      <Types :value.sync="types"/>
    </div>
  </Nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator';
  import Nav from '@/components/nav/Nav.vue';
  import Types from '@/components/Types.vue';
  @Component({
    components: {Types, Nav}
  })
  export default class MoneyNav extends Vue {
    types = '-';
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background: $color-base;
  text-align: center;
  display: flex;
  font-size: 16px;
  color: #fff;
  padding: 10px 20%;

  > li {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #ffffff;
    margin-top: 20px;
    line-height: 30px;
    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:nth-child(2) {
      border-radius: 0 8px 8px 0;
    }
    &.selected {
      color: $color-base;
      background-color: #fff;
    }
  }
}
</style>