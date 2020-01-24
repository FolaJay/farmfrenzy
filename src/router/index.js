import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/purchases/create',
    name: 'create purchase',
    component: () => import('../views/purchases/createPurchases.vue'),
  },
  {
    path: '/purchases/view',
    name: 'view purchase',
    component: () => import('../views/purchases/viewPurchase.vue'),
  },
  {
    path: '/production/feeding/create',
    name: 'create feeding',
    component: () => import('../views/production/feeding/createFeeding.vue'),
  },
  {
    path: '/production/feeding/view',
    name: 'view feeding',
    component: () => import('../views/production/feeding/viewFeeding.vue'),
  },
  {
    path: '/production/mortality',
    name: 'Mortality',
    component: () => import('../views/production/mortality.vue'),
  },
  {
    path: '/production/sampling/create',
    name: 'Mortality',
    component: () => import('../views/production/sampling/createSampling.vue'),
  },
  {
    path: '/production/sampling/view',
    name: 'Mortality',
    component: () => import('../views/production/sampling/viewSampling.vue'),
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
