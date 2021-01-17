const localStorageKeyName = 'tagList';
type TagListModel = {
  data: object[];
  fetch: () => object | object[];
  create: (name: object) => object;
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [{name:"icon1-3",value:'衣服'},{name:"icon1-4",value:'餐饮'},
    {name:"icon1-5",value:'住房'},{name:"icon1-1",value:'交通'},{name:"icon1-8",value:'旅行'},{name:"icon1-2",value:'医疗'},
    {name:"icon1-7",value:'美容'},{name:"icon1-9",value:'通讯'},{name:"icon1-10",value:'休闲'},
    {name:"icon1-12",value:'知识'},
    {name:"icon1-11",value:'水果'},],
  fetch() {
    const ok = localStorage.getItem(localStorageKeyName);
    if(ok) {
      this.data = JSON.parse(ok);
    }
    // console.log(JSON.parse(null));
    return this.data;
  },
  create (name: object) {
    this.data.push(name);
    return name;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
  },

}

export default tagListModel;