// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper'
import WOW from 'wowjs' 
import ElementUI from 'element-ui';
// css
import './font/iconfont.css';
import 'swiper/dist/css/swiper.css';
import 'animate.css';
import '../theme/index.css'
import './css/style.css';
Vue.config.productionTip = false;
Vue.prototype.$Swiper = Swiper;
Vue.prototype.$WOW = WOW;
Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created:function(){
  }
})
