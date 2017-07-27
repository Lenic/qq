import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './home';
import Strive from './strive';
import Root from './root';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: new VueRouter({ routes: [Home, Strive] }),
  template: '<Root />',
  components: { Root },
});
