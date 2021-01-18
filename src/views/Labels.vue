<template>
  <div class="labels">
    <Types :value.sync="types">
        <div slot="left" @click="goBack"><Icons name="return"/></div>
        <div slot="right" class="right">保存</div>
    </Types>
    <ul class="tags">
      <li v-for="tag in tags">
        <span>
          <Icons :name="tag.name"/>
          {{tag.value}}
        </span>
        <span @click="deleteTag(tag)">
          <Icons name="delete"/>
        </span>
      </li>
    </ul>

    <router-link to="/labels/newTag">
      <button class="add">
        <icons name="define"/>
      </button>
    </router-link>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/nav/MoneyNav.vue';
import tagListModel from '@/model/tagListModel';

tagListModel.fetch();

@Component({
  components: {Types},
})
export default class Labels extends Vue{
  types = '-';
  tags = tagListModel.data;

  deleteTag(name: object) {
    tagListModel.remove(name);
    this.tags = tagListModel.data;
  }
  goBack() {
    this.$router.replace({
      path:'/money'
    })
  }
}
</script>

<style lang="scss">
.tags-content {
  position: relative;
}
</style>


<style lang="scss" scoped>
.labels {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, .1);

    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>