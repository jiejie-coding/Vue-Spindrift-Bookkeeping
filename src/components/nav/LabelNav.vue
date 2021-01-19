<template>
  <Nav class-prefix="labelNav">
    <div slot="left" @click="goBack" class="left">
      <Icons name="return"/>
    </div>
    <div slot="center" class="center">
      <Types :value.sync="types"/>
    </div>
    <div slot="right" class="right">保存</div>
  </Nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/nav/Nav.vue';
import Types from '@/components/Types.vue';

@Component({
  components:{Nav,Types}
})
export default class LabelNav extends Vue{
  types = '+';
  goBack() {
    this.$router.replace({
      path:'/money'
    })
  }
}
</script>

<style lang="scss">
  .labelNav-content {
    display: flex;
  }
</style>
<style lang="scss" scoped>
  .left,
  .right {
    margin-top: 30px;
    flex: 1;
    text-align: center;
  }
  .center {
    flex: 6;
  }
</style>