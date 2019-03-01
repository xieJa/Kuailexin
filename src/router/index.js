import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "group-Home" */ '@/components/home')
const PageView = () => import(/* webpackChunkName: "group-PageView" */ '@/components/PageView')
const About = () => import(/* webpackChunkName: "group-About" */ '@/components/about/about')
const Product = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/product')
const ProductDetail = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/ProductDetail')
const Brand = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/brand')
const Market = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/Marketing')
const Marketing = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/newMarketing')
const festivalMarket = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/festivalMarket')
const Trill = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/trill')
const Marketingdetail = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/Marketingdetail')
const Server = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/server')
const Credit = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/Credit')
const mapSide = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/mapSide')
const program = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/program')
const example = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/example')
const joinIn = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/joinIn')
const Train = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/Train')
const FAQ = () => import(/* webpackChunkName: "group-Server" */ '@/components/server/FAQ')
const News = () => import(/* webpackChunkName: "group-News" */ '@/components/new/news')
const NewList = () => import(/* webpackChunkName: "group-News" */ '@/components/new/newList')
const Case = () => import(/* webpackChunkName: "group-News" */ '@/components/new/case')
const newdetail = () => import(/* webpackChunkName: "group-News" */ '@/components/new/newdetail')
const Contact = () => import(/* webpackChunkName: "group-Contact" */ '@/components/contact/Contact')
const search = () => import(/* webpackChunkName: "group-Search" */ '@/components/search/search')
const Errorinfo = () => import(/* webpackChunkName: "group-error" */ '@/components/error404')


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{title:'首页'},
      component: Home,
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
      path: '/ProductDetail',
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
          {path:'/Marketing',component:Marketing},        
          {path:'/festivalMarket',component: festivalMarket},        
          {path:'/trill',component:Trill},        
          {path:'',component: PageView},        
      ]
    }, 
    {
      path:'/Marketingdetail',
      name:'Marketingdetail',
      component: Marketingdetail,
    },   
    {
      path:'/server',
      name:'server',
      component: Server,
      children:[
        {path:'/Credit',component: Credit},
        {path:'/mapSide',component: mapSide},
        {path:'/program',component: program},
        {path:'/example',component: example},
        {path:'/joinIn',component: joinIn},
        {path:'/Train',component: Train},
        {path:'/FAQ',component: FAQ},
        {path:'',component: PageView},        
      ]
    }, 
    {
      path:'/news',
      name:'news',
      component: News,
      children:[
        {path:"",name:'new',component:NewList,meta:{title:'品牌新闻'}},
        {path:"/case",name:'case',component: Case,meta:{title:'成功案例'}},
      ]
    },
    {
      path:'/newdetail',
      name:'newdetail',
      component: newdetail,
      meta:{title:'品牌新闻'}
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    },  
    {
      path:'/search',
      name:'search',
      component: search
    },  
    {
      path: '/404error',
      name: 'Errorinfo',
      component: Errorinfo, 
    },  
    {
      path: '*',
      name: 'Errorinfo',
      component: Errorinfo, 
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

router.beforeEach((to, from, next) => {
  if(to.matched.length ===0){ //如果未匹配到路由
    next({path:'/404error'})
    return false
  }
  next()
})

export default router

