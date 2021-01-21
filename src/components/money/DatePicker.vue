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

<style lang="scss">
@import "~@/assets/style/helper.scss";
.el-date-editor {
  width: 100% !important;
  > .el-input__inner{
    text-align: center;
    background-color: $color-base;
    color: #ffffff;
    width: 100%;
    border-radius: 30px;
    &::placeholder {
      color: #ffffff;
    }
  }
  > .el-input__prefix {
    display: none;
  }
  > .el-input__suffix {
    display: none;
  }
}
</style>