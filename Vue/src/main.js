import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VueSession from "vue-session";


Vue.use(VueSession);
Vue.use(VueMeta);
Vue.use(axios, VueAxios)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: require('./components/HomeComp.vue').default
  },
  {
    path: '/shop',
    component: require('./components/ShopComp.vue').default
  },
  {
    path: '/shop/:id',
    component: require('./components/ProductComp.vue').default
  },
  {
    path: '/comment/:id',
    component: require('./components/CommentComp.vue').default
  },
  {
    path: '/order/:id',
    component: require('./components/OrderComp.vue').default
  },
  {
    path: '/cart',
    component: require('./components/CartComp.vue').default
  },
  {
    path: '/cart/:id',
    component: require('./components/DelCartComp.vue').default
  },
  {
    path: '/login',
    component: require('./components/LoginComp.vue').default
  },
  {
    path: '/register',
    component: require('./components/RegisterComp.vue').default
  },
  {
    path: '/contact',
    component: require('./components/ContactComp.vue').default
  },
  {
    path: '/dashboard',
    component: require('./components/DashbordComp.vue').default
  },
  {
    path: '/terms',
    component: require('./components/TermsComp.vue').default
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
