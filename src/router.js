import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bt from './views/Button.vue'
import Radio from './views/Radio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/button',
      name: 'button',
      component: Bt
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
