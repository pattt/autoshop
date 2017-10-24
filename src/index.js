import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import date from 'vue-date-filter'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-material-design-icons/styles.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(date);

import History from './components/History'
import Auto from './components/Auto'
import AutoDetails from './components/AutoDetails'


Vue.filter('date', function (value) {
    return (new Date(value)).getFullYear()z;
})

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: History },
        { path: '/history', component: History },
        { path: '/auto', component: Auto },
        { path: '/auto/:id', component: AutoDetails, name:'autodetails' },
    ]
})

new Vue({
      el: '#app',
      render: a => a(App),
      store,
      router
})
