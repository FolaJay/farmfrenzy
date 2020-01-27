import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'default' },
    component: Home,
  },
  {
    path: '/jegede',
    name: 'Ayodeji',
    component: () => import('../views/jegede.vue'),
  },
  {
    path: '/sales/view',
    name: 'view sales',
    component: () => import('../views/sales/viewSales.vue'),
  },
  {
    path: '/sales/create',
    name: 'create sales',
    component: () => import('../views/sales/createSales.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
