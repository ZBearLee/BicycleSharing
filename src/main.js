// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'element-ui/lib/theme-chalk/index.css'
import Vodal from 'vodal'
import 'vodal/common.css'
import './assets/css/icon.css'
import axios from 'axios'
import store from './store/index.js'
import BaiduMap from "vue-baidu-map"
import VueLazyLoad from 'vue-lazyload'
import def_lazy_img from './assets/imgs/loading.gif'

Vue.config.productionTip = false

 Vue.use(BaiduMap, {
  ak: "xOVywrWsO9EVxpyas8Sun527CEVxHDaw",
}); 
Vue.use(ElementUI)
Vue.use(MuseUI)
Vue.component(Vodal.name, Vodal)
Vue.use(VueLazyLoad, { loading: def_lazy_img })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  components: { App },
  template: '<App/>'
}).$mount('#app')
