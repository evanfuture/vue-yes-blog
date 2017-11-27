import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Banana from '@/components/Banana';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/banana',
      name: 'Banana',
      component: Banana,
    },
  ],
});
