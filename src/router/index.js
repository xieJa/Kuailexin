import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about/about'
import Product from '@/components/product/product'
import ProductDetail from '@/components/product/ProductDetail'
import Brand from '@/components/brand/brand'
import Market from '@/components/market/Marketing'
import Marketingdetail from '@/components/market/Marketingdetail'
import server from '@/components/server/server'
import News from '@/components/new/news'
import Newdetail from '@/components/new/newdetail'
import Contact from '@/components/contact/Contact'
import Search from '@/components/search/search'

// 加盟服务
import Credit from '@/components/server/Credit'
import mapSide from '@/components/server/mapSide'
import program from '@/components/server/program'
import example from '@/components/server/example'
import joinIn from '@/components/server/joinIn'
import Train from '@/components/server/Train'
import FAQ from '@/components/server/FAQ'
import PageView from '@/components/PageView';

//新闻资讯
import newList from '@/components/new/newList'
import Case from '@/components/new/case'

// 营销活动
import newMarketing from '@/components/market/newMarketing'
import festivalMarket from '@/components/market/festivalMarket'
import trill from '@/components/market/trill'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{title:'首页'},
      component: Home
    },
    {
      path: '/about/:Name',
      name: 'About',      
      component: About,
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
    },
    {
      path: '/Product/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail,  
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand,     
    },
    {
      path: '/market',
      name: 'Market',
      component: Market, 
      children:[
          {path:'/market/Marketing',component:newMarketing},        
          {path:'/market/festivalMarket',component:festivalMarket},        
          {path:'/market/trill',component:trill},        
          {path:'',component:PageView},        
      ]
    }, 
    {
      path:'/market/Marketingdetail',
      name:'Marketingdetail',
      component:Marketingdetail
    },   
    {
      path:'/server',
      name:'server',
      component:server,
      children:[
        {path:'/server/Credit',component:Credit},
        {path:'/server/mapSide',component:mapSide},
        {path:'/server/program',component:program},
        {path:'/server/example',component:example},
        {path:'/server/joinIn',component:joinIn},
        {path:'/server/Train',component:Train},
        {path:'/server/FAQ',component:FAQ},
        {path:'',component:PageView},        
      ]
    }, 
    {
      path:'/news',
      name:'news',
      component:News,
      children:[
        {path:"",component:newList,meta:{title:'品牌新闻'}},
        {path:"/case",component:Case,meta:{title:'成功案例'}},
      ]
    },
    {
      path:'/newdetail',
      name:'newdetail',
      component:Newdetail,
      meta:{title:'品牌新闻'}
    },
    {
      path:'/contact',
      name:'contact',
      component:Contact
    },  
    {
      path:'/search',
      name:'search',
      component:Search
    },  
    {
      path: '*',
      name: '404',
      component: Home,     
    }
  ],
  scrollBehavior(to,from,savedPosition){
    if (to.hash) {
      return {
        selector: to.hash
      }
    }else{
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    
  },
})
