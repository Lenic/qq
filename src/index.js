import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './index/index.vue'
import myContent from './index/content.vue';
import myContenter from './index/contenter.vue';
import myContentsan from './index/contentsan.vue';
import myContentsi from './index/contentsi.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: myContent },
  { path: '/indexer', component: myContenter },
  { path: '/indexsan', component: myContentsan },
  { path: '/indexsi', component: myContentsi }
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
