<template>
  <div class="tags">
    <ul class="current">
      <li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li>
      <li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li>
      <li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li>
      <li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li><li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li><li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li><li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li><li><span>衣</span></li>
      <li><span>食</span></li>
      <li><span>住</span></li>
      <li><span>行</span></li>
      <li><span class="news">新增</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
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
</style>