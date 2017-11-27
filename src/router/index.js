import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Banana from '@/components/Banana';
import YesBlog from '@/components/YesBlog';
import YesArticle from '@/components/YesArticle';

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
    {
      path: '/blog',
      name: 'YesBlog',
      component: YesBlog,
    },
    {
      path: '/blog/:id',
      name: 'YesArticle',
      props: true,
      component: YesArticle,
    },
  ],
});
