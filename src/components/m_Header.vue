<template>
  <div class="header m-head">
    <div class="m-header">
      <div class="hd-logo">
        <router-link to="/">
          <img src="../assets/logo.png">
        </router-link>
      </div>
      <div class="tel">
        <p>加盟服务电话：</p>
        <span class="red">400-035-2688</span>
      </div>
      <div class="searchBtn" @click.stop="searchInput()">
        <i class="icon iconfont icon-fangdajing"></i>
      </div>
      <div class="navBtn" @click.stop="navSide">
        <span></span>
      </div>
    </div>
    <div class="menu">
      <a href="http://p.qiao.baidu.com/cps/chat?siteId=20704&userId=654182" target="_blank">在线咨询</a>
      <a href="javascript:;" @click="wechat('123456')">微信咨询</a>
      <a href="tel:02151853656">电话沟通</a>
      <router-link :to="{path:'/server/joinIn',query:{name:'申请加盟'}}">申请加盟</router-link>
    </div>
    <transition name="fade">
      <div class="shade" v-show="isNav"></div>
    </transition>
    <transition name="slide-fade">
      <div class="nav" v-show="isNav" @click.stop>
        <div class="navTop">
          <div class="searchBtn" @click.stop="searchInput()">
            <i class="icon iconfont icon-fangdajing"></i>搜索
          </div>
          <div class="close" @click="handleClick"></div>
        </div>
        <ul>
          <li>
            <router-link to="/about/公司简介">公司简介</router-link>
          </li>
          <li @click="navSubSide('新鲜美食')">
            <a href="javascript:;">新鲜美食</a>
            <i class="iconfont icon-jiantou"></i>
          </li>
          <li @click="navSubSide('加盟服务')">
             <a href="javascript:;">加盟服务</a>
            <i class="iconfont icon-jiantou"></i>
          </li>          
          <li v-for="(item,index) in newNav" :key="index">
            <router-link :to="{path:item.Title=='成功案例'?'/case':'/news',query:{Id:item.Id}}"  >{{item.Title}}</router-link>
          </li>          
          <li>
            <router-link :to="{path:'/contact',query:{name:'联系我们'}}">联系方式</router-link>
          </li>
          
        </ul>
        <transition-group name="slide-fade">
          <dl v-show="isSubNav=='新鲜美食'" key="新鲜美食">
            <dt @click="isSubNav=false">新鲜美食<i class="iconfont icon-jiantou"></i></dt>
            <dd>
              <ul>
                <li v-for="item in loadPro" :key="item.Id">
                  <router-link :to="{path:'/Product',query:{name:item.Title,id:item.Id}}">{{item.Title}}</router-link>
                </li>                
              </ul>
            </dd>
          </dl>
          <dl v-show="isSubNav=='加盟服务'" key="加盟服务">
            <dt @click="isSubNav=false">加盟服务<i class="iconfont icon-jiantou"></i></dt>
            <dd>
              <ul>
                <li>
                  <router-link :to="{path:'/server',query:{name:'如何选择'}}">如何选择</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/brand',query:{name:'我们的店'}}">我们的店</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/server/program',query:{name:'加盟方案'}}">加盟方案</router-link>
                </li>               
              </ul>
            </dd>
          </dl>
        </transition-group>
      </div>
    </transition>
    <transition>
        <div class="searchbox" v-show="isSearch" @click.stop>
            <div class="searchdiv">
              <input type="text" @keyup.enter="topSearch()" v-model="searchKeyValue">
              <button @click="topSearch()">搜索</button>
            </div>
            <i class="iconfont icon-guanbi" @click="isSearch=false"></i>
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
        content:'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }]
    }
  },
  data() {
    return {
      metaInfo:{Title:'快乐星汉堡加盟总部唯一官方网站,汉堡店加盟,西式快餐加盟,汉堡包加盟',Keyword:'汉堡加盟,汉堡店加盟,西式快餐加盟,炸鸡汉堡加盟,快乐星汉堡加盟',Description:'快乐星汉堡是一家汉堡店加盟连锁企业,专业致力于西式快餐加盟领域,做好汉堡店,汉堡,汉堡包,西式快餐,汉堡培训,汉堡店加盟等合作事宜,汉堡加盟品牌就选快乐星汉堡!加盟热线:400-035-2688'}, // meta
      loadPro:[],
      isNav: false,
      isSubNav:false,
      isSearch:false,
      newNav:[],
      searchKeyValue:''
    };
  },
  created:function(){
    this.seoSet();
    this.loadProParent()
  },
  mounted: function() {
    window.addEventListener("click", this.handleClick);
  },
  methods: {
    navSide: function() {
      this.isNav = true;
      /*微信浏览器特殊处理*/
      if (
        window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ==
        "micromessenger"
      ) {
        document.addEventListener(
          "touchmove",
          function(event) {
            event.preventDefault();
          },
          false
        );
      }
      document.body.classList.add("body-shade");
    },
    navSubSide: function(e) {     
      this.isSubNav = e;  
    },
    handleClick: function() {
      this.isNav = false;
      this.isSubNav=false;
      document.body.classList.remove("body-shade");
    },
    searchInput:function(){
      this.isSearch=true
    },
    topSearch: function() {
      this.$router.push({
        path:'/search',
        query:{Key:this.searchKeyValue}
      })
      this.isSearch=false
    },
    loadProParent:function(){
      let that = this;
      this.$axios.get("/ajaxdata.aspx?Action=typelist&Parent=产品分类")
      .then(function(res){
        that.loadPro = res.data.list;        
      })  
      this.$axios.get("/ajaxdata.aspx?Action=typelist&Parent=新闻资讯分类")
      .then(function(res){
        that.newNav = res.data.list
      })   
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
    },
    wechat:function(){
      this.$alert(' <img src='+require('../assets/wechat_zx1.jpg')+'>', '微信扫描销售二维码', {
          dangerouslyUseHTMLString: true
        });
    }
  },
  watch:{
     '$route'(to,from){
       this.seoSet();
       this.handleClick()
     }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #fff;
  top: 0;
}
.m-header {
  height: 1.16rem;
  padding: 0 5px;
  display: flex;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
}
.hd-logo {
  height: 80%;
}
.hd-logo img {
  height: 100%;
}
.tel {
  margin-left: 0.4rem;
  padding-left: 0.4rem;
  font-size: 0.2rem;
  font-weight: bold;
  line-height: 1.3;
  border-left: 1px solid #d2d2d2;
}
.m-header .searchBtn {
  position: absolute;
  color: #c8161e;
  right: 3.5em;
  height: 1.9em;
  top:50%;
  transform: translateY(-50%);
}
.searchBtn i {
  font-size: 1.4em;
}
.navBtn {
  position: absolute;
  width: 1.5em;
  right: 5px;
  height: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top:50%;
  transform: translateY(-50%);
}

.navBtn:after,
.navBtn:before,
.navBtn span {
  width: 100%;
  content: "";
  display: block;
  height: 2px;
  background: #c8161e;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222222;
  height: 0.96rem;
}
.menu a {
  border-right: 1px solid #fff;
  color: #fff;
  width: 25%;
  text-align: center;
}
.menu a:last-child {
  border-right: 0;
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: #fff;
  z-index: 999;
  width: 70%;
  font-size: 0.34rem;
  z-index: 1000;
}
.nav ul {
  margin-top: 0.5rem;
}
.nav ul li {
  padding: 0 0.66rem;
  line-height: 1rem;
  position: relative;
}
.nav ul i,.nav dl i {
  float: right;
  font-size:.8em;
  line-height: 100%;
  position: absolute;
  right:.66rem;
  top:50%;
  transform: translateY(-50%);
}
.nav dl{
  position: absolute;
  top: 1.16rem;
  width:100%;
  background:#fff;
  bottom:0;
}
.nav dl dt{
  padding: 0 0.66rem;
  line-height: 1rem;
  background:#f0f0f0;
  color:#c8161e;
  position: relative;
}
.nav dt i {  
  position: absolute;
  right:auto;
  left:.23rem;
  transform:translateY(-50%) rotate(180deg)
}
.nav dl ul{
  margin-top: 0;
}
.navTop {
  height: 1.16rem;
  padding: 0 0.3rem;
  background: #222222;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navTop .searchBtn {
  position: inherit;
  color: #fff;
  font-size: 0.32rem;
  height: auto;
}
.navTop .searchBtn i {
  font-size: 0.32rem;
  margin-right: 5px;
}
.close {
  position: relative;
  width: 1.2em;
  height: 1.2em;
}
.close:before,
.close:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #fff;
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}
.close:after {
  transform: translateY(-50%) rotate(45deg);
}
.searchbox{
  position:fixed;
  top:0;
  left:0;
  right:0;
  padding:0 10px;
  height:100vh;
  background:rgba(0,0,0,.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.searchdiv{
  width:100%;
  border-bottom:1px solid #fff;
  display: flex;
  height: 40px;
}
.searchbox input{
  background:none;
  border:0;  
  outline: none;
  width: 100%;
  color:#fff;
}
.searchbox button{
  background:none;
  border:0;
  white-space: nowrap;
  color:#fff;
}
.searchbox i{
  color:#fff;
  position: absolute;
  bottom:30%;
  left:50%;
  transform: translateX(-50%);
  font-size:.8rem
}
</style>