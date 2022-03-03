import clone from '@/lib/clone';
import createID from '@/lib/createID';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const defaultTagOut: Tag[] = [
  { id: createID().toString(), name: "消费", icon: "money", type: "-" },
  { id: createID().toString(), name: "餐饮", icon: "food", type: "-" },
  { id: createID().toString(), name: "购物", icon: "buy", type: "-" },
  { id: createID().toString(), name: "住房", icon: "home", type: "-" },
  { id: createID().toString(), name: "交通", icon: "go", type: "-" },
  { id: createID().toString(), name: "工资", icon: "wage", type: "+" },
  { id: createID().toString(), name: "借入", icon: "borrow", type: "+" },
  { id: createID().toString(), name: "红包", icon: "redbag", type: "all" },
  { id: createID().toString(), name: "其他", icon: "other", type: "all" },
]
const defaultTagList: Tag[] = [
  { id: createID().toString(), name: "消费", icon: "money", type: "-" },
  { id: createID().toString(), name: "餐饮", icon: "food", type: "-" },
  { id: createID().toString(), name: "购物", icon: "buy", type: "-" },
  { id: createID().toString(), name: "住房", icon: "home", type: "-" },
  { id: createID().toString(), name: "交通", icon: "go", type: "-" },
  { id: createID().toString(), name: "医疗", icon: "medical", type: "-" },
  { id: createID().toString(), name: "娱乐", icon: "enjoy", type: "-" },
  { id: createID().toString(), name: "借出", icon: "lend", type: "-" },
  { id: createID().toString(), name: "水电", icon: "water", type: "-" },
  { id: createID().toString(), name: "衣服", icon: "cloth", type: "-" },
  { id: createID().toString(), name: "化妆", icon: "makeup", type: "-" },
  { id: createID().toString(), name: "礼物", icon: "gift", type: "+" },
  { id: createID().toString(), name: "奖金", icon: "price", type: "+" },
  { id: createID().toString(), name: "理财", icon: "conduct", type: "+" },
  { id: createID().toString(), name: "工资", icon: "wage", type: "+" },
  { id: createID().toString(), name: "借入", icon: "borrow", type: "+" },
  { id: createID().toString(), name: "红包", icon: "redbag", type: "all" },
  { id: createID().toString(), name: "其他", icon: "other", type: "all" },
]

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
    currentType: '-',
    defaultTags: defaultTagList
  } as MyState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]")
    },
    fetchTag(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]")
      if (!state.tagList || state.tagList.length === 0) {
        state.tagList = defaultTagOut
        store.commit('saveTag')
      }
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      state.recordList.push(record2);
      store.commit('saveRecords');
      alert("添加记账成功！")
    },
    saveRecords(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.recordList));
    },
    findTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
    },
    setCurrentType(state, type: '+' | '-') {
      // console.log(type);
      state.currentType = type
    },
    setCurrentTag(state, tag: Tag) {
      // console.log(tag.name);
      state.currentTag = tag;
    },
    createTag(state, tag: Tag) {
      tag.id = createID().toString()
      state.tagList.splice(state.tagList.length, 0, tag)
      store.commit('saveTag')
      alert("创建成功！")
    },
    updateTag(state, object: { id: string, name: string }) {
      const { id, name } = object
      const idList = state.tagList.map(t => t.id)
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(t => t.name)
        if (names.indexOf(name) >= 0) {
          alert("标签名重复了")
        }
        else {
          const tag = state.tagList.filter(t => t.id === id)[0]
          tag.name = name
          store.commit('saveTag')
          alert("成功修改标签名")

        }
      }
      else {
        alert('没有找到！')
      }
    },
    removeTag(state, id: string) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break
        }
      }
      state.tagList.splice(index, 1)
      store.commit('saveTag')
    },
    saveTag(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    }

  },
  actions: {
  },
  modules: {
  }
})

export default store