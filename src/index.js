import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './index/index.vue'
import myContent from './index/content.vue';
import myContenter from './index/contenter.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: myContent },
  { path: '/indexer', component: myContenter }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
});
