import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import MePage from '@/pages/MePage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/liiper/:id',
    name: 'Me',
    component: MePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
