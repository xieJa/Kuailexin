// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper'
import WOW from 'wowjs' 
import ElementUI from 'element-ui';
import MetaInfo from 'vue-meta-info'
import Axios from 'axios'
// css
import './font/iconfont.css';
import 'swiper/dist/css/swiper.css';
import 'animate.css';
import '../theme/index.css'
import './css/style.css';
// 组件
import MyComponent from './components/integer';
import PageBanner from './components/PageBanner';
import PageTitle from './components/PageTitle';
import PageView from './components/PageView';

Vue.config.productionTip = false;
Vue.prototype.$Swiper = Swiper;
Vue.prototype.$WOW = WOW;
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = '/api';
Vue.use(ElementUI);
Vue.use(MetaInfo);


Vue.component('animated-integer', MyComponent); //初始化数字组件
Vue.component('PageTitle', PageTitle); //title
Vue.component('PageBanner', PageBanner); //banner
Vue.component('PageView', PageView); //富文本


// 移动PC
let bodyW = document.documentElement.offsetWidth || document.body.offsetWidth
if(bodyW<1000){
  Vue.prototype.$M = true;
  document.body.classList.add('m-web');
  document.documentElement.style.fontSize = bodyW/7.5+'px'
}else{
  Vue.prototype.$M = false;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
