import clone from '@/lib/clone';
import createID from '@/lib/createID';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

type MyState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as MyState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]")
    },
    fetchTag(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]")
      // console.log(state.tagList);
      // console.log('dd');


    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.recordList));
    },
    findTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
      console.log(state.currentTag);
      console.log('ddd');


    },
    createTag(state) {
      const name = window.prompt("输出标签名");
      if (!name) {
        window.alert("标签名不能为空");
      } else {
        const names = state.tagList.map(item => item.name)
        if (names && names.indexOf(name) >= 0) {
          alert("该标签已存在，不可重复创建！")

        }
        else {
          const id = createID().toString()
          state.tagList.push({ id, name: name })
          store.commit('saveTag')
          alert("创建成功！")
        }

      }
    },
    // updateTag(state, { id: string, name: string }) {
    //   const idList = state.tagList.map(t => t.id)
    //   if (idList.indexOf(id) >= 0) {
    //     const names = this.tagList.map(t => t.name)
    //     if (names.indexOf(name) > 0) {
    //       // alert("标签名重复了")
    //       return '标签名重复了'
    //     }
    //     else {
    //       const tag = tagStore.findTag(id)
    //       tag.name = name
    //       tagStore.saveTag()
    //       return 'success'

    //     }
    //   }
    //   else {
    //     return 'not found'
    //   }
    // },
    removeTag(state, id: string) {
      let index = -1

      for (let i = 0; i < this.tagList.length; i++) {
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