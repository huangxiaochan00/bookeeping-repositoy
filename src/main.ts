import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from '@/models/tagListModel.ts';

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

window.tagList = tagListModel.fetch();
window.findTag = (id) => {
  return window.tagList.filter(t => t.id === id)[0]
}
window.createTag = () => {
  const name = window.prompt("输出标签名");
  if (!name) {
    window.alert("标签名不能为空");
    return;
  } else {
    tagListModel.create(name);
  }
}
window.updateTag = (id, name) => {
  return tagListModel.update(id, name)
}
window.removeTag = (id) => {
  return tagListModel.remove(id)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
