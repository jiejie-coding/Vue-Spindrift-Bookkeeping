import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const defaultOutTag = [{name:"dress",value:'衣服'},{name:"meal",value:'餐饮'},
  {name:"icon1-5",value:'住房'},{name:"icon1-1",value:'交通'},{name:"icon1-8",value:'旅行'},{name:"icon1-2",value:'医疗'},
  {name:"icon1-7",value:'美容'},{name:"telephone",value:'通讯'},{name:"leisure",value:'休闲'},
  {name:"icon1-12",value:'知识'},
  {name:"icon1-11",value:'水果'},];

const defaultInTag = [{name:"icon1-1",value:'交通'},{name:"icon1-8",value:'旅行'},{name:"icon1-2",value:'医疗'},
  {name:"icon1-7",value:'美容'},{name:"telephone",value:'通讯'},{name:"leisure",value:'休闲'},
  {name:"icon1-12",value:'知识'},
  {name:"icon1-11",value:'水果'},];

const newTags = [{name:"icon1-3"},{name:"icon1-4"},
  {name:"icon1-5"},{name:"icon1-1"},{name:"icon1-8"},{name:"icon1-2"},
  {name:"icon1-7"},{name:"icon1-9"},{name:"define"},
  {name:"icon1-12"},
  {name:"icon1-11"}];

const store = new Vuex.Store({
  state: {
    recordList: [] as recordItem[],
    InTagList: [] as tagItem[],
    OutTagList: [] as tagItem[],
    tagList: [] as tagItem[],
    selectedType: '-',
    newTag: newTags
  },
  mutations: {
    changeSelectType(state,types: string) {
      state.selectedType = types;
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state,item: recordItem) {
      state.recordList.push(clone(item));
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList));
    },
    setType(state,types: string) {
      state.selectedType = types;
    },
    fetchTags(state) {
      if(state.selectedType === '-') {
        const ok = localStorage.getItem("OutTagList");
        if(ok) {
          state.OutTagList = JSON.parse(ok);
        } else {
          state.OutTagList = defaultOutTag;
        }
        state.tagList = state.OutTagList;
      } else if(state.selectedType === '+') {
        const ok = localStorage.getItem("InTagList");
        if(ok) {
          state.InTagList = JSON.parse(ok);
        } else {
          state.InTagList = defaultInTag;
        }
        state.tagList = state.InTagList;
      }

      // state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state,item: tagItem) {
      if(state.selectedType === '-') {
        const ok = state.OutTagList.filter(items => {
          return items.value === item.value;
        })
        if(ok.length === 0) {
          state.OutTagList.push(clone(item));
          store.commit('saveTags');
          window.alert("支出标签添加成功");
        } else {
          window.alert("该标签名已经存在");
        }
      } else if(state.selectedType === '+') {
        const ok = state.InTagList.filter(items => {
          return items.value === item.value;
        })
        if(ok.length === 0) {
          state.InTagList.push(clone(item));
          store.commit('saveTags');
          window.alert("收入标签添加成功");
        } else {
          window.alert("该标签名已经存在");
        }
      }
    },
    removeTag(state,item: tagItem) {
      if(state.selectedType === '-') {
        state.OutTagList = state.OutTagList.filter(key => {
          return key != item;
        })
      } else if(state.selectedType === '+') {
        state.InTagList = state.InTagList.filter(key => {
          return key != item;
        })
      }
      store.commit('saveTags');
    },
    saveTags(state) {
      if(state.selectedType === '-') {
        window.localStorage.setItem('OutTagList', JSON.stringify(state.OutTagList));
        state.tagList = state.OutTagList;
      } else if(state.selectedType === '+') {
        window.localStorage.setItem('InTagList', JSON.stringify(state.InTagList));
        state.tagList = state.InTagList;
      }
    },

  }
});

export default store;