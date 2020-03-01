import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import * as $ from "jquery";
import VueWayPoint from 'vue-waypoint';
import _ from 'lodash';
import {BootstrapVue} from "bootstrap-vue";
Vue.use(BootstrapVue)


Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueWayPoint);
window.$ = $;
window._ = _;

new Vue({
    render: h => h(App),
}).$mount('#app');
