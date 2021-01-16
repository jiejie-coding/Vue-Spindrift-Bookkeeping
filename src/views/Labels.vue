<template>
  <Layout class-prefix="tags">
    <Types/>
    <ul class="tags">
      <li>
        <span>衣服</span>
        <Icons name="delete"/>
      </li>
      <li>
        <span>住房</span>
        <Icons name="delete"/>
      </li>
      <li>
        <span>生活</span>
        <Icons name="delete"/>
      </li>
      <li>
        <span>维修</span>
        <Icons name="delete"/>
      </li>
    </ul>
    <button class="add">
      <icons name="define"/>
    </button>
  </Layout>
</template>

<script lang="ts">
import Types from '@/components/money/Types.vue';
export default {
  name: "Labels",
  components: {Types},
}
</script>

<style lang="scss">
.tags-content {
  position: relative;
}
</style>

<style lang="scss" scoped>
  .tags {
    background-color: #fff;
    font-size: 16px;
    padding: 0 16px;
    > li {
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 44px;
      svg {
        width: 16px;
        height: 16px;
      }
    }

  }
  .add {
    position: absolute;
    background-color: #EFEFEF;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    bottom: 25px;
    right: 25px;
    border: none;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.1);
    .icon {
      width: 32px;
      height: 32px;
      fill: #333;

    }
  }

</style>