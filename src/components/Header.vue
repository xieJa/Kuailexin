<template>
  <div class="header pc-head">
    <div class="site-nav" :style="{ background :'rgba(0,0,0,'+ headOpacity+' )'}">
      <div class="site-nav-bd">
        <div class="site-nav-bd-l">
          <i class="iconfont icon-shouye--"></i>
          <span>您好，欢迎您来到快乐星汉堡官网网站！</span>
        </div>
        <ul class="site-nav-bd-r">
          <li>
            <i class="icon iconfont icon-dianhua"></i>加盟服务电话：
            <span class="red">400-035-2688</span>
          </li>
          <li @click.stop="searchInput()">
            <label>
              <i class="icon iconfont icon-fangdajing" @click="topSearch"></i>
              <em v-show="!searchbox">搜索</em>
              <input
                type="text"
                v-model="searchKeyValue"
                placeholder="请输入关键字"
                :class="searchbox?'active':''"
                @keyup.enter="topSearch"
              >
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div :style="{ background :'rgba(255,255,255,'+ headOpacity+' )'}">
      <div class="top-body">
        <div class="hd-logo">
          <router-link to="/"><img src="../assets/logo.png"></router-link>
        </div>
        <ul class="hd-menu" ref="hd-menu">
          <li>
            <router-link to="/" >首页</router-link>
          </li>
          <li data-value="关于我们">
            <router-link to="/about/公司简介" data-value="关于我们">关于我们</router-link>
          </li>
          <li data-value="新鲜美食">
            <router-link :to="{path:'/Product',query:{name:'新品动态'}}" data-value="新鲜美食">新鲜美食</router-link>
          </li>
          <li data-value="品牌形象">
            <router-link :to="{path:'/brand',query:{name:'店面规划'}}" data-value="品牌形象">品牌形象</router-link>
          </li>
          <li data-value="营销活动">
            <router-link :to="{path:'/market/Marketing',query:{name:'新品营销',Object:'NewProductMarketing'}}" data-value="营销活动">营销活动</router-link>
          </li>
          <li data-value="加盟服务">
            <router-link :to="{path:'/server/Credit',query:{name:'品牌资信'}}" data-value="加盟服务">加盟服务</router-link>
          </li>
          <li data-value="新闻资讯">
            <router-link :to="{path:newNav[0].Title=='成功案例'?'/case':'/news',query:{Id:newNav[0].Id}}"  data-value="新闻资讯">新闻资讯</router-link>
          </li>
          <li data-value="联系我们">
            <router-link :to="{path:'/contact',query:{name:'联系我们'}}" data-value="联系我们">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade" >
    <div
      class="submenu"
      v-show="submenu"
      @click.stop
      :style="{ background :'rgba(247,248,250,'+ headOpacity+' )'}"
    >
      <div class="cover relative">
        <i class="iconfont icon-guanbi" @click="submenu=!submenu"></i>
        <div class="submenu-item" v-show="submenu=='关于我们'">
          <router-link to="/about/公司简介" >公司简介</router-link>
          <router-link to="/about/企业愿景" >企业愿景</router-link>
          <router-link to="/about/发展历程" >发展历程</router-link>
          <router-link to="/about/体系建设" >体系建设</router-link>
          <router-link to="/about/优秀团队" >优秀团队</router-link>
        </div>
        <div class="submenu-item" v-show="submenu=='新鲜美食'">
          <dl class="new-product clearfix">
            <dt>
              <router-link :to="{path:'/Product',query:{name:'新品动态'}}">新品动态 ></router-link>
            </dt>
            <dd>
              <div class="new-product-item" v-for="item in newproductlist" :key="item.Id">
                <router-link :to="{path:'/Product',query:{name:'新品动态'}}" @click.native="submenu=false">
                  <span>
                    <img :src="item.Image" :onerror="errorImg">
                  </span>
                  <p>{{item.Title}}</p>
                </router-link>
              </div>              
            </dd>
          </dl>
          <dl v-for="item in loadPro" :key="item.Id">
            <dt>
              <router-link
                :to="{path:'/Product',query:{name:item.Title,id:item.Id}}"                
              >{{item.Title}} ></router-link>
            </dt>
            <dd>
              <router-link :to="{path:'/Product/ProductDetail',query:{Id:pro.Id}}" v-for="pro in item.child" :key="pro.Id">{{pro.Title}}</router-link>              
            </dd>
          </dl>          
        </div>
        <div class="submenu-item" v-show="submenu=='品牌形象'">
          <router-link :to="{path:'/brand',query:{name:'店面规划'}}" >店面规划</router-link>
          <router-link :to="{path:'/brand',query:{name:'我们的店'}}" >我们的店</router-link>
          <router-link :to="{path:'/brand',query:{name:'卡通形象'}}" >卡通形象</router-link>
          <router-link :to="{path:'/brand',query:{name:'品牌VI'}}" >品牌VI</router-link>
          <router-link :to="{path:'/brand',query:{name:'品牌IP'}}" >品牌IP</router-link>
        </div>
        <div class="submenu-item" v-show="submenu=='营销活动'">
          <router-link :to="{path:'/market/Marketing',query:{name:'新品营销',Object:'NewProductMarketing'}}" >新品营销</router-link>
          <router-link :to="{path:'/market/Marketing',query:{name:'节日营销',Object:'HolidayMarketing'}}" >节日营销</router-link>
          <router-link :to="{path:'/market/Marketing',query:{name:'日常营销',Object:'DailyMarketing'}}">日常营销</router-link>
          <router-link :to="{path:'/market',query:{name:'微信点餐'}}" >微信点餐</router-link>
          <router-link :to="{path:'/market',query:{name:'外卖运营'}}" >外卖运营</router-link>
          <a href="https://weibo.com/hanbaodian?topnav=1&wvr=6&topsug=1" target="_blank">晒！微博</a>
          <router-link :to="{path:'/market/trill',query:{name:'嗨！抖音'}}" >嗨！抖音</router-link>
        </div>
        <div class="submenu-item" v-show="submenu=='加盟服务'">
          <router-link :to="{path:'/server/Credit',query:{name:'品牌资信'}}" >品牌资信</router-link>
          <router-link :to="{path:'/server',query:{name:'如何选择'}}" >如何选择</router-link>
          <router-link :to="{path:'/server',query:{name:'加盟流程'}}" >加盟流程</router-link>
          <router-link :to="{path:'/server',query:{name:'在您身边'}}" >在您身边</router-link>
          <router-link :to="{path:'/server/program',query:{name:'加盟方案'}}" >加盟方案</router-link>
          <router-link :to="{path:'/server/example',query:{name:'装修指导'}}" >装修指导</router-link>
          <router-link :to="{path:'/server/joinIn',query:{name:'申请加盟'}}" >申请加盟</router-link>
          <router-link :to="{path:'/server/Train',query:{name:'培训系统'}}" >培训系统</router-link>
          <router-link :to="{path:'/server/FAQ',query:{name:'常见问题'}}" >常见问题</router-link>
        </div>
        <div class="submenu-item" v-show="submenu=='新闻资讯'">
          <router-link :to="{path:item.Title=='成功案例'?'/case':'/news',query:{Id:item.Id}}"  v-for="(item,index) in newNav" :key="index">{{item.Title}}</router-link>
        </div>
        <div class="submenu-item" v-show="submenu=='联系我们'">
          <router-link :to="{path:'/contact',query:{name:'联系我们'}}" >联系我们</router-link>
          <router-link :to="{path:'/contact',query:{name:'在线留言'}}" >在线留言</router-link>
          <router-link :to="{path:'/contact',query:{name:'投诉建议'}}" >投诉建议</router-link>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  metaInfo:function(){
    return{
      title:this.metaInfo.Title, // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: this.metaInfo.Keyword
      },{                 // set meta
        name: 'description',
        content: this.metaInfo.Description
      },{
        name:'viewport',
        content:'width=device-width,initial-scale=1.0'
      }]
    }
  },
  data() {
    return {
      metaInfo:{Title:'快乐星汉堡加盟总部唯一官方网站,汉堡店加盟,西式快餐加盟,汉堡包加盟',Keyword:'汉堡加盟,汉堡店加盟,西式快餐加盟,炸鸡汉堡加盟,快乐星汉堡加盟',Description:'快乐星汉堡是一家汉堡店加盟连锁企业,专业致力于西式快餐加盟领域,做好汉堡店,汉堡,汉堡包,西式快餐,汉堡培训,汉堡店加盟等合作事宜,汉堡加盟品牌就选快乐星汉堡!加盟热线:400-035-2688'}, // meta
      msg: "Welcome to Your Vue.js App",
      searchbox: false,
      submenu: false,
      headOpacity: 1,
      loadPro:[],
      newNav:[{Title:'',Id:''}],
      searchKeyValue:'',
      newproductlist:'', //新品动态      
    };
  },
  created:function(){
    this.seoSet();
    this.loadProParent();
    this.navNewpro();
  },
  mounted: function() {
    let that = this
    window.addEventListener("click", this.handleClick);
    window.addEventListener("scroll", this.handleScroll);
    let oNav =this.$refs['hd-menu']
    this.$refs['hd-menu'].onmouseover=function(e){
      if(e.target.dataset.value != undefined){
        that.submenu = e.target.dataset.value
      }
    }
  },
  methods: {
    searchInput: function() {
      this.searchbox = true;
    },
    topSearch: function() {
      if (this.searchbox) {
        this.$router.push({
          path:'/search',
          query:{Key:this.searchKeyValue}
        })
      }
    },
    handleClick: function() {
      this.searchbox = false;
      this.submenu = false;
    },
    handleScroll: function() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 20) {
        this.headOpacity = 0.95;
      } else {
        this.headOpacity = 1;
      }
    },
    loadProParent:function(){
      let that = this;
      this.$axios.get(encodeURI("/ajaxdata.aspx?Action=typelist&Parent=产品分类"))
      .then(function(res){
        that.loadPro = res.data.list;
        for(let i=0;i<that.loadPro.length;i++){
          that.$axios.get('/ajaxdata.aspx?Action=list&Object=ProductView&SearchKey=TypeId&pageIndex=1&pageSize=4',{
            params:{
              SearchTypeId:that.loadPro[i].Id
            }
          })
          .then(function(res){
            that.loadPro[i].child=res.data.list
          })
        }        
      })
      this.$axios.get(encodeURI("/ajaxdata.aspx?Action=typelist&Parent=新闻资讯分类"))
      .then(function(res){
        that.newNav = res.data.list
      })
    },
    navNewpro:function(){
      // 新品动态
      let that = this;
      this.$axios.get('/ajaxdata.aspx?Action=newproductlist&pageIndex=1&pageSize=4&Recommend=1')
      .then(function(res){
        that.newproductlist = res.data.list        
      })
      .catch(function(err){
        console.log(err)
      })
    },
    navProList:function(){
      // 产品
      let that = this;      
    },
    seoSet:function(){
      // seo数据    
      let that = this;
      this.$axios.get('/ajaxdata.aspx?Action=SEO',{
        params:{
          Page:that.$route.meta.title || that.$route.query.name || that.$route.params.Name || '首页'
        }
      })
      .then(function (res) {
        if(res.data.list.length != 0){
          that.metaInfo = res.data.list[0]  
        } 
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  watch:{
    '$route'(to,from){
      this.seoSet();
      this.submenu=false;
      this.navNewpro();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  z-index: 999;
  position: fixed;
  width: 100%;
  top: 0;
  transition: all 0.2s;
  border-bottom: 1px solid #d2d2d2;
}
.site-nav {
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  background: #111;
}
.site-nav .iconfont {
  float: left;
  margin-right: 5px;
}
.site-nav-bd {
  box-sizing: border-box;
  max-width: 1200px;
  width: 99%;
  margin: 0 auto;
}
.site-nav-bd-l {
  float: left;
  color: #888b91;
}
.site-nav-bd-l .iconfont {
  color: #c8161e;
  font-size: 22px;
}
.site-nav-bd-r {
  float: right;
}
.site-nav-bd-r li {
  float: left;
  color: #fff;
  margin-left: 25px;
}
.site-nav-bd-r li span {
  font-weight: bold;
}
.site-nav-bd-r li em {
  font-style: normal;
  cursor: pointer;
}
.site-nav-bd-r .icon-dianhua {
  font-size: 20px;
}
.site-nav-bd-r .icon-fangdajing {
  cursor: pointer;
}
.site-nav-bd-r input {
  background: none;
  border: 0;
  border-bottom: 1px solid #d6d6d6;
  outline: none;
  color: #fff;
  padding-bottom: 3px;
  width: 0;
  transition: all 0.5s;
}
.site-nav-bd-r input.active {
  width: 12em;
}
.top-body {
  max-width: 1200px;
  height: 80px;
  width: 99%;
  margin: 0 auto;
}
.top-body .hd-logo {
  float: left;
  height: 100%;
  width:165px;
}
.top-body .hd-logo:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.top-body .hd-logo img {
  max-height: 80%;
  vertical-align: middle;
}
.top-body .hd-menu {
  float: right;
}
.hd-menu li {
  float: left;
  margin-left: 52px;
  font-size: 16px;
  line-height: 80px;
}
.hd-menu li a {
  color: #2c303b;
}
.hd-menu li:hover a {
  color: #c8161e;
}

.submenu {
  position: absolute;
  width: 100%;
  background: #f7f8fa;
}
.submenu .icon-guanbi {
  position: absolute;
  right: 0;
  top: 30px;
  font-size: 20px;
  line-height: 100%;
  cursor: pointer;
}
.submenu-item {
  float: right;
  width: 850px;
  padding: 30px 0;
}
.submenu-item > a {
  font-weight: bold;
  margin: 0 42px 0 0;
  white-space: nowrap;
  line-height: 26px;
}

.new-product {
  border-bottom: 1px solid #c9c9c9;
  padding-bottom: 20px;
  width: 100%;
}
.new-product dt {
  margin-bottom: 15px;
}
.new-product dd {
  height: auto;
}
.new-product-item {
  width: 168px;
  margin-right: 30px;
  float: left;
  text-align: center;
}
.new-product-item span {
  display: inline-block;
  width: 168px;
  height: 112px;
  margin-bottom: 10px;
}
.new-product-item span:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.new-product-item span img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
dl.new-product dd a {
  color: #333;
}
dl {
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding-right: 20px;
  margin-bottom: 20px;
}
dl dt {
  margin-bottom: 5px;
}
dl dt a {
  font-weight: bold;
}
dl dd {
  height: 22px;
  overflow: hidden;
}
dl dd a {
  margin-right: 20px;
  color: #999;
  white-space: nowrap;
}
dl dd a:hover {
  color: #c8161e;
}
@media screen and (max-width: 1360px) {
  .hd-menu li{
    margin-left:40px;
  }
}
</style>