import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "group-Home" */ '@/components/home')
const PageView = () => import(/* webpackChunkName: "group-PageView" */ '@/components/PageView')
const About = () => import(/* webpackChunkName: "group-About" */ '@/components/about/about')
const TimeLine = () => import(/* webpackChunkName: "group-About" */ '@/components/about/TimeLine')
const Team = () => import(/* webpackChunkName: "group-About" */ '@/components/about/Team')
const TeamView = () => import(/* webpackChunkName: "group-About" */ '@/components/about/TeamView')
const Product = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/product')
const NewProduct = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/NewProduct')
const StarProduct = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/StarProduct')
const GeneralProduct = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/GeneralProduct')
const ProductDetail = () => import(/* webpackChunkName: "group-Product" */ '@/components/product/ProductDetail')
const Brand = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/brand')
const Project = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/Project')
const Decorationeffect = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/Decorationeffect')
const cartoon = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/cartoon')
const brandVI = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/brandVI')
const brandIP = () => import(/* webpackChunkName: "group-Brand" */ '@/components/brand/brandIP')
const Marketing = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/Marketing')
const newMarketing = () => import(/* webpackChunkName: "group-Market" */ '@/components/market/newMarketing')
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
const Contactus = () => import(/* webpackChunkName: "group-Contact" */ '@/components/contact/contactus')
const Message = () => import(/* webpackChunkName: "group-Contact" */ '@/components/contact/Message')
const complain = () => import(/* webpackChunkName: "group-Contact" */ '@/components/contact/complain')
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
      path: '/about',
      name: 'About', 
      component: About,           
      children:[
        {
          path:'TimeLine',
          name:'发展历程',
          component:TimeLine
        },
        {
          path:'Team',
          name:'优秀团队',
          component:Team
        },
        {
          path:'TeamView',
          name:'优秀员工',
          component:TeamView
        },
        {
          path:'',
          component:PageView
        }        
      ]
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
      children:[
        {
          path:'NewProduct',
          name:'新品动态',
          component:NewProduct
        },
        {
          path:'StarProduct',
          name:'明星产品',
          component:StarProduct
        },        
        {
          path:'',
          component:GeneralProduct
        }        
      ]
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
      children:[
        {
          path:'Project',
          name:'店面规划',
          component:Project
        },
        {
          path:'DecorationEffect',
          name:'我们的店',
          component:Decorationeffect
        },        
        {
          path:'Cartoon',
          name:'卡通形象',
          component:cartoon
        },        
        {
          path:'brandVI',
          name:'品牌VI',
          component:brandVI
        },        
        {
          path:'brandIP',
          name:'品牌IP',
          component:brandIP
        },        
        {
          path:'',
          component:PageView
        }        
      ]
    },
    {
      path: '/market',
      name: 'Market',
      component: Marketing,
      children:[
          {path:'/Marketing',component:newMarketing},        
          {path:'/trill',name:'嗨！抖音',component:Trill},        
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
        {path:'/Credit',name:'品牌资信',component: Credit},
        {path:'/mapSide',component: mapSide},
        {path:'/program',name:'加盟方案',component: program},
        {path:'/example',name:'装修指导',component: example},
        {path:'/joinIn',name:'申请加盟',component: joinIn},
        {path:'/Train',name:'培训系统',component: Train},
        {path:'/FAQ',name:'常见问题',component: FAQ},
        {path:'',component: PageView},        
      ]
    }, 
    {
      path:'/news',
      component: News,
      children:[
        {path:"",component:NewList,meta:{title:'品牌新闻'}},
        {path:"/case",component: Case,meta:{title:'成功案例'}},
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
      component: Contact,
      children:[
        {path:"contactus",name:'联系我们',component:Contactus},
        {path:"Message",name:'在线留言',component: Message},
        {path:"complain",name:'投诉建议',component: complain}
      ]
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

