import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Labels from '@/views/Labels.vue';
import NotFound from '@/views/NotFound.vue';
import NewTag from '@/views/NewTag.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: "/money"
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/labels/newTag',
    component: NewTag
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'activeClass'
})

export default router
