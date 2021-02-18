<template>
  <Layout>
  <div class="labels">
    <LabelNav/>
    <ul class="tags">
      <li v-for="tag in tagList" :key="tag.name">
        <span>
          <Icons :name="tag.name"/>
          {{tag.value}}
        </span>
        <span @click="deleteTag(tag)">
          <Icons name="delete"/>
        </span>
      </li>
    </ul>

    <button class="add" @click="goNewTag">
      <icons name="adds"/>
    </button>
  </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Types.vue';
import LabelNav from '@/components/nav/LabelNav.vue';


@Component({
  components: {LabelNav, Types},
})
export default class Labels extends Vue{
  created() {
    this.$store.commit('fetchTags');
  }
  get tagList() {
    if(this.$store.state.selectedType === '-') {
      return this.$store.state.tagList.filter(item => item.type === '-');
    } else if(this.$store.state.selectedType === '+') {
      return this.$store.state.tagList.filter(item => item.type === '+');
    }
  }
  deleteTag(item: tagItem) {
    this.$store.commit('removeTag',item);
  }
  goNewTag() {
    this.$router.replace('/labels/newTag');
  }

}
</script>

<style lang="scss" scoped>
.labels {
  display: flex;
  flex-direction: column;
  height: 100%;
  > .tags {
    flex-grow: 1;
    font-size: 16px;
    padding: 0 16px;
    overflow: auto;
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
    position: fixed;
    background-color: #EFEFEF;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    bottom: 68px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, .1);
    .icon {
      width: 32px;
      height: 32px;
      margin: auto;
    }
  }
}
</style>