<template>
    <el-dropdown trigger="click" @command="changed" placement="bottom">
      <span class="el-dropdown-link">
        {{ selectedDate }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in dataSource" :command="item" >{{ item }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {
  selectedDate: string = '';
  @Prop() dataSource!: string[];
  judge() {
    const pattern = new RegExp("[\u4E00-\u9FA5]+");
    if (pattern.test(this.selectedDate)) {
      this.$store.commit('setMonth',this.selectedDate)
    }
    else {
      this.$store.commit('setYear',this.selectedDate);
    }
  }
  created() {
    if(this.dataSource) {
      this.selectedDate = this.dataSource[this.dataSource.length-1];
      this.judge();
    }
  }
  changed(item: any) {
    this.selectedDate = item;
    this.judge();
  }
}
</script>


<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #cccccc;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>