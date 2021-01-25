import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const defaultTag = [
  {name: 'dress', value: '衣服', type: '-'},
  {name: 'meal', value: '餐饮', type: '-'},
  {name: 'building', value: '住房', type: '-'},
  {name: 'traffic', value: '交通', type: '-'},
  {name: 'travel', value: '旅行', type: '-'},
  {name: 'medical', value: '医疗', type: '-'},
  {name: 'makeup', value: '美容', type: '-'},
  {name: 'pets', value: '宠物', type: '-'},
  {name: 'telephone', value: '通讯', type: '-'},
  {name: 'leisure', value: '休闲', type: '-'},
  {name: 'knowledge', value: '知识', type: '-'},
  {name: 'fruit', value: '水果', type: '-'},
  {name: 'other', value: '其他', type: '-'},
  {name: 'wages', value: '工资', type: '+'},
  {name: 'partTime', value: '兼职', type: '+'},
  {name: 'envelope', value: '红包', type: '+'},
  {name: 'management', value: '理财', type: '+'},
  {name: 'bonus', value: '奖金', type: '+'},
  {name: 'other', value: '其他', type: '+'}
  ];

const newTags = [
  {name: 'new1'}, {name: 'new2'},
  {name: 'new3'}, {name: 'new4'}, {name: 'new5'}, {name: 'new6'},
  {name: 'pets'}, {name: 'knowledge'},
  {name: 'telephone'},
  {name: 'envelope'}];

const store = new Vuex.Store({
  state: {
    recordList: [] as recordItem[],
    tagList: [] as tagItem[],
    selectedType: '-',
    newTag: newTags,
    showMonth: [] as string[],
    curMonth: '',
  },
  mutations: {
    changeSelectType(state, types: string) {
      state.selectedType = types;
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state, item: recordItem) {
      state.recordList.unshift(clone(item));
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    setType(state, types: string) {
      state.selectedType = types;
    },
    fetchTags(state) {
      const ok = localStorage.getItem('tagList');
      if (ok) {
        state.tagList = JSON.parse(ok);
      } else {
        state.tagList = defaultTag as tagItem[];
      }
    },
    createTag(state, item: tagItem) {
      const ok = state.tagList.filter(items => {
        return items.value === item.value;
      });
      if (ok.length === 0) {
        state.tagList.push(clone(item));
        store.commit('saveTags');
        window.alert('支出标签添加成功');
      } else {
        window.alert('该标签名已经存在');
      }
    },
    removeTag(state, item: tagItem) {
      state.tagList = state.tagList.filter(key => {
        return key != item;
      });
      store.commit('saveTags');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },

    fetchMonth(state) {
      const curMonth = parseInt(new Date().getMonth().toString()) + 1;
      state.showMonth = [];
      for (let i = 1; i <= curMonth; i++) {
        state.showMonth.push(i + ' 月 ');
      }
    },
    setMonth(state, month: string) {
      state.curMonth = month;
    },
  }
});

export default store;