import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-material-design-icons/styles.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import History from './components/History'
import Shop from './components/Shop'

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: History },
        { path: '/history', component: History },
        { path: '/shop', component: Shop }
    ]
})

new Vue({
      el: '#app',
      render: a => a(App),
      store,
      router
})
