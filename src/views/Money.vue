<template>
  <Layout>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
    <div class="tags">
      <ul class="current">
        <li><span>衣</span></li>
        <li><span>食</span></li>
        <li><span>住</span></li>
        <li><span>行</span></li>
        <li><span class="news">新增</span></li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请输入备注"/>
      </label>
    </div>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrappers {
  height: 100vh;
}
.types {
  background: $color-base;
  text-align: center;
  display: flex;
  font-size: 24px;
  color: #fff;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.selected {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        bottom: 0;
        background-color: #333;
      }
    }
  }
}
.tags {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 14px;
  overflow: auto;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 25%;
      text-align: center;
      margin: 20px 0;
      > span {
        display: inline-block;
        background: #d9d9d9;
        $h:24px;
        line-height: $h;
        height: $h;
        border-radius: $h/2;
        padding: 0 16px;
      }
    }
  }

}
.notes {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  font-size: 14px;
  padding-left:16px;
  > .name {
    padding-right: 16px;
  }
  > input {
    height: 64px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    > button {
      border: 1px solid #777;
      width: 25%;
      height: 48px;
      float: left;
      background-color: #EFEFEF;
      &.ok {
        height: 48*2px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
    }

  }
  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>