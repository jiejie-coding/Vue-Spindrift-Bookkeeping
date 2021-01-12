<template>
  <Layout>
    <div>
      <ul class="types">
        <li>支出</li>
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
        <button>ok</button>
        <button>0</button>
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
</style>