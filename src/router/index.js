import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about/about'
import Product from '@/components/product/product'
import ProductDetail from '@/components/product/ProductDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/product/:Name',
      name: 'Product',
      component: Product,   
      children:[
        {
          path: 'productdetail',
          name: 'ProductDetail',
          component: ProductDetail,  
        }  
      ]
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})
