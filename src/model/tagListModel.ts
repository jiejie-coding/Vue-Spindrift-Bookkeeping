const localStorageKeyName = 'tagList';
type TagListModel = {
  data: object[];
  fetch: () => object | object[];
  create: (name: object) => object;
  save: () => void;
  remove: (item: object) => void;
  add: (item: object) => void;
}
const tagListModel: TagListModel = {
  data: [{name:"dress",value:'衣服'},{name:"meal",value:'餐饮'},
    {name:"icon1-5",value:'住房'},{name:"icon1-1",value:'交通'},{name:"icon1-8",value:'旅行'},{name:"icon1-2",value:'医疗'},
    {name:"icon1-7",value:'美容'},{name:"telephone",value:'通讯'},{name:"leisure",value:'休闲'},
    {name:"icon1-12",value:'知识'},
    {name:"icon1-11",value:'水果'},],
  fetch() {
    const ok = localStorage.getItem(localStorageKeyName);
    if(ok) {
      this.data = JSON.parse(ok);
    }
    return this.data;
  },
  create (name: object) {
    this.data.push(name);
    return name;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
  },
  remove(item: object) {
    this.data = this.data.filter(key => {
      // @ts-ignore
      return key != item;
    })
    this.save();
    console.log(this.data);
  },
  add(item: object) {
    this.data.push(item);
    this.save();
  }
}

export default tagListModel;