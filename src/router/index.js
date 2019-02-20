import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{title:'首页'},
      component: function(resolve){
        require(["@/components/home"],resolve)
      },
    },
    {
      path: '/about/:Name',
      name: 'About',      
      component: function(resolve){
        require(["@/components/about/about"],resolve)
      },
    },
    {
      path: '/Product',
      name: 'Product',
      component: function(resolve){
        require(["@/components/product/product"],resolve)
      },
    },
    {
      path: '/Product/ProductDetail',
      name: 'ProductDetail',
      component: function(resolve){
        require(["@/components/product/ProductDetail"],resolve)
      },
      
    },
    {
      path: '/brand',
      name: 'Brand',
      component: function(resolve){
        require(["@/components/brand/brand"],resolve)
      },
    },
    {
      path: '/market',
      name: 'Market',
      component: function(resolve){
        require(["@/components/market/Marketing"],resolve)
      },
      children:[
          {path:'/market/Marketing',component: function(resolve){
            require(["@/components/market/newMarketing"],resolve)
          }},        
          {path:'/market/festivalMarket',component: function(resolve){
            require(["@/components/market/festivalMarket"],resolve)
          }},        
          {path:'/market/trill',component: function(resolve){
            require(["@/components/market/trill"],resolve)
          }},        
          {path:'',component: function(resolve){
            require(["@/components/PageView"],resolve)
          }},        
      ]
    }, 
    {
      path:'/market/Marketingdetail',
      name:'Marketingdetail',
      component: function(resolve){
        require(["@/components/market/Marketingdetail"],resolve)
      },
    },   
    {
      path:'/server',
      name:'server',
      name:'Marketingdetail',
      component: function(resolve){
        require(["@/components/server/server"],resolve)
      },
      children:[
        {path:'/server/Credit',component: function(resolve){
          require(["@/components/server/Credit"],resolve)
        }},
        {path:'/server/mapSide',component: function(resolve){
          require(["@/components/server/mapSide"],resolve)
        }},
        {path:'/server/program',component: function(resolve){
          require(["@/components/server/program"],resolve)
        }},
        {path:'/server/example',component: function(resolve){
          require(["@/components/server/example"],resolve)
        }},
        {path:'/server/joinIn',component: function(resolve){
          require(["@/components/server/joinIn"],resolve)
        }},
        {path:'/server/Train',component: function(resolve){
          require(["@/components/server/Train"],resolve)
        }},
        {path:'/server/FAQ',component: function(resolve){
          require(["@/components/server/FAQ"],resolve)
        }},
        {path:'',component: function(resolve){
          require(["@/components/PageView"],resolve)
        }},        
      ]
    }, 
    {
      path:'/news',
      name:'news',
      component: function(resolve){
        require(["@/components/new/news"],resolve)
      },
      children:[
        {path:"",component: function(resolve){
          require(["@/components/new/newList"],resolve)
        },meta:{title:'品牌新闻'}},
        {path:"/case",component: function(resolve){
          require(["@/components/new/case"],resolve)
        },meta:{title:'成功案例'}},
      ]
    },
    {
      path:'/newdetail',
      name:'newdetail',
      component: function(resolve){
        require(["@/components/new/newdetail"],resolve)
      },
      meta:{title:'品牌新闻'}
    },
    {
      path:'/contact',
      name:'contact',
      component: function(resolve){
        require(["@/components/contact/Contact"],resolve)
      }
    },  
    {
      path:'/search',
      name:'search',
      component: function(resolve){
        require(["@/components/search/search"],resolve)
      }
    },  
    {
      path: '*',
      name: '404',
      component: function(resolve){
        require(["@/components/home"],resolve)
      }, 
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
