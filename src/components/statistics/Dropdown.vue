<template>
    <el-dropdown trigger="click" @command="changed" placement="bottom">
      <span class="el-dropdown-link">
        {{ selectedDate }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in dataSource" :command="item">{{ item }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {
  selectedDate: string;
  get dataSource() {
    return this.$store.state.showMonth;
  }
  created() {
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchMonth');
    this.selectedDate = this.$store.state.showMonth[0];
    this.$store.commit('setMonth',this.selectedDate)
  }
  changed(item: any) {
    console.log(item);
    this.selectedDate = item;
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