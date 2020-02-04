import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/drzwi',
      name: 'drzwi',
      component: () => import('./views/Doors.vue')
    },
    {
      path: '/okna',
      name: 'okna',
      component: () => import('./views/Windows.vue')
    },
    {
      path: '/schody',
      name: 'schody',
      component: () => import('./views/Stairs.vue')
    },
    {
      path: '/inne',
      name: 'inne',
      component: () => import('./views/Another.vue')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
