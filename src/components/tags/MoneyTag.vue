<template>
  <tag>
    <li>
      <div class="item-wrapper">
        <div class="icon-wrapper">
          <router-link to="/Labels">
            <Icons name="define"/>
          </router-link>
        </div>
        新增
      </div>
    </li>
  </tag>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';

@Component
export default class MoneyTag extends Vue{

}
</script>

<style lang="scss" scoped>

</style>