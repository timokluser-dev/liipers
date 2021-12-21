import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import MePage from '@/pages/MePage.vue';
import StoryblokPage from '@/pages/StoryblokPage.vue';

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
  {
    path: '*',
    component: StoryblokPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
