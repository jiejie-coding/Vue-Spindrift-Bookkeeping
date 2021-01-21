import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const defaultTag = [{name:"dress",value:'衣服'},{name:"meal",value:'餐饮'},
  {name:"icon1-5",value:'住房'},{name:"icon1-1",value:'交通'},{name:"icon1-8",value:'旅行'},{name:"icon1-2",value:'医疗'},
  {name:"icon1-7",value:'美容'},{name:"telephone",value:'通讯'},{name:"leisure",value:'休闲'},
  {name:"icon1-12",value:'知识'},
  {name:"icon1-11",value:'水果'},];

const store = new Vuex.Store({
  state: {
    recordList: [] as recordItem[],
    tagList: [] as tagItem[],
    selectedType: '-'
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state,item: recordItem) {
      state.recordList.push(clone(item));
      store.commit('saveRecords');
      return item;
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList));
    },
    setType(state,types: string) {
      state.selectedType = types;
    },
    fetchTags(state) {
      const ok = localStorage.getItem("tagList");
      if(ok) {
        state.tagList = JSON.parse(ok);
      } else {
        state.tagList = defaultTag;
      }
      // state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state,item: tagItem) {
      const ok = state.tagList.filter(items => {
        return items.value === item.value;
      })
      if(ok.length === 0) {
        state.tagList.push(clone(item));
        store.commit('saveTags');
        window.alert("添加成功")
      } else {
        window.alert("改标签名已经存在");
      }
    },
    removeTag(state,item: tagItem) {
      state.tagList = state.tagList.filter(key => {
        return key != item;
      })
      store.commit('saveTags');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
  }
});

export default store;