<template>
  <el-date-picker
      v-model="value"
      type="date"
      @focus="forbid">
  </el-date-picker>
</template>

<script>
import formatDate from "@/lib/formatDate";

export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value: Date.now()
    }
  },
  methods: {
    forbid() {
      //禁止软键盘弹出
      document.activeElement.blur();
    }
  },
  watch: {
    value(date) {
      this.$emit('update:value',formatDate(date));
    }
  },
  mounted() {
    this.$emit('update:value',formatDate(new Date()));
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.el-date-editor {
  width: 100% !important;
  > ::v-deep .el-input__inner{
    text-align: center;
    background-color: $color-base;
    color: #ffffff;
    width: 100px;
    border-radius: 30px;
    padding-left: 0px;
    padding-right: 0px;
    &::placeholder {
      color: inherit;
    }
  }
  > ::v-deep .el-input__prefix,
  > ::v-deep .el-input__suffix {
    display: none;
  }
}
</style>