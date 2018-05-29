import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'
import G2 from '@antv/g2'
import VueSessionStorage from 'vue-sessionstorage'
import Vuex from 'vuex'
import store from './store'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueSessionStorage)

Vue.use(ElementUI)
Vue.prototype.$axios = Axios

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})