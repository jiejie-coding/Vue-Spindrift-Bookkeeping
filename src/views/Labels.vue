<template>
  <Layout class-prefix="tags">
    <Types/>
    <ul class="tags" v-for="tag in tags">
      <li>
        <span>
          <Icons :name="tag.name"/>
          {{tag.value}}
        </span>
        <Icons name="delete"/>
      </li>
    </ul>
    <router-link to="/labels/newTag">
      <button class="add" @click="createTag">
        <icons name="define"/>
      </button>
    </router-link>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/money/Types.vue';
import tagListModel from '@/model/tagListModel';

tagListModel.fetch();

@Component({
  components: {Types},
})
export default class Labels extends Vue{
  tags = tagListModel.data;
  createTag() {
    console.log(11);
  }
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
        margin: 0 10px;
        width: 20px;
        height: 20px;
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
    }
  }

</style>