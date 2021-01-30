import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const Money = () => import('@/views/Money.vue');
const Details = () => import('@/views/Details.vue');
const Labels = () => import('@/views/Labels.vue');
const NotFound = () => import('@/views/NotFound.vue');
const NewTag = () => import('@/views/NewTag.vue');
const Statistics = () => import('@/views/Statistics.vue');

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
    path: '/Details',
    component: Details
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
    path: '/statistics',
    component: Statistics
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
