<template>
    <el-date-picker
        v-model="value"
        type="date"
        @focus="forbid">
    </el-date-picker>
</template>

<script>
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
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      const currentdate = year + '-' + month + '-' + strDate;
      this.$emit('update:value',currentdate);
    }
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