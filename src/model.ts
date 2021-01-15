const localStorageKeyName = 'recordList';
const model = {
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as recordItem[];
  },
  save(recordList: recordItem[]) {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(recordList));
  },
  clone(data: recordItem) {
    return JSON.parse(JSON.stringify(data));
  }
}

export default model;