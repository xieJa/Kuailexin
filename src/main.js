// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MetaInfo from 'vue-meta-info'
import Swiper from 'swiper'
import WOW from 'wowjs'
import { Button, Select,Form,Input,Option,Radio,RadioGroup,OptionGroup,DatePicker,FormItem,Cascader,Checkbox} from 'element-ui';
// css
import './font/iconfont.css';
import 'swiper/dist/css/swiper.css';
import 'animate.css';
import '../theme/index.css'
import './css/style.css';


Vue.config.productionTip = false;
Vue.prototype.$Swiper = Swiper;
Vue.prototype.$WOW = WOW;
Vue.prototype.$axios = Axios;
Vue.prototype.errorImg = 'this.src="' + require('@/assets/errorImg.jpg') + '"';
Axios.defaults.baseURL = '/';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.use(MetaInfo);
// element-ui
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(Input)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(DatePicker)
Vue.use(Cascader)
Vue.use(FormItem)
Vue.use(Checkbox)

// 组件
import MyComponent from './components/integer';
import PageBanner from './components/PageBanner';
import PageTitle from './components/PageTitle';
import PageView from './components/PageView';
import LoadMore from './components/LoadMore';

Vue.component('animated-integer', MyComponent); //初始化数字组件
Vue.component('PageTitle', PageTitle); //title
Vue.component('PageBanner', PageBanner); //banner
Vue.component('PageView', PageView); //富文本
Vue.component('LoadMore', LoadMore); //富文本


screenInit()
// 移动PC
function screenInit(){
  let bodyW = document.documentElement.offsetWidth || document.body.offsetWidth
  if (bodyW > 1000) {
    Vue.prototype.$M = false;
    document.body.classList.remove('m-web');
  } else {
    Vue.prototype.$M = true;
    document.body.classList.add('m-web');
    if(bodyW<240){
      bodyW = 240
    }
    document.documentElement.style.fontSize = bodyW / 7.5 + 'px'    
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted:function(){
    this.$nextTick(function(){
      var _hmt = _hmt || [];
      let bodyW = document.documentElement.offsetWidth || document.body.offsetWidth
      if(bodyW>1000){
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?83f68e12355250e64cbd57b2e51c57ad";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      }      
    })
  }
})
