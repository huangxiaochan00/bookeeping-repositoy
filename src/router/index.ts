import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import Notfound from '@/views/404.vue'
import EditTag from '@/views/EditTag.vue'
import AddLabel from '@/views/AddLabel.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money',

  },
  {
    path: '/money',
    name: 'Money',
    component: Money,

  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,

  },
  {
    path: '/labels',
    name: 'Labels',
    component: Labels,

  },
  {
    path: '/addLabel',
    name: 'AddLabel',
    component: AddLabel,

  },
  {
    path: '/labels/edit/:id',
    name: 'Edit',
    component: EditTag,
  },
  {
    path: '*',
    component: Notfound
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
