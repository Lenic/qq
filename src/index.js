import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './home';
import Strive from './strive';
import Root from './root';
import Life from './life';

Vue.use(VueRouter);

const defaultRoute = {
  path: '/',
  redirect: '/home'
};

new Vue({
  el: '#app',
  router: new VueRouter({ routes: [Home, Strive, Life, defaultRoute] }),
  template: '<Root />',
  components: { Root },
});
