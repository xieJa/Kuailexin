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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
      children:[
        {
          path: '/Product/ProductDetail',
          name: 'ProductDetail',
          component: ProductDetail,  
        }  
      ]
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
    }, 
    {
      path:'/market/Marketingdetail',
      name:'Marketingdetail',
      component:Marketingdetail
    },   
    {
      path:'/server',
      name:'server',
      component:server
    }, 
    {
      path:'/news',
      name:'news',
      component:News
    },
    {
      path:'/newdetail',
      name:'newdetail',
      component:Newdetail
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
    return{x:0,y:0}
  },
})
