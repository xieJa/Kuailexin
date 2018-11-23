<template>
  <div class="header relative">
    <div class="site-nav">
      <div class="site-nav-bd">
        <div class="site-nav-bd-l"><i class="iconfont icon-shouye--"></i><span>您好，欢迎您来到快乐星汉堡官网网站！</span></div>
        <ul class="site-nav-bd-r">
          <li><i class="icon iconfont icon-dianhua"></i>加盟服务电话：<span class="red">400-035-2688</span></li>
          <li @click.stop="searchInput()">
            <label>
              <i class="icon iconfont icon-fangdajing" @click="topSearch"></i>
              <em v-show="!searchbox">搜索</em>
              <input type="text" placeholder="请输入关键字" :class="searchbox?'active':''" @keyup.enter="topSearch">
            </label>
          </li>
        </ul>
      </div>      
    </div>
    <div class="top-body">
        <div class="hd-logo"><img src="../assets/logo.png"></div>
        <ul class="hd-menu">
          <li><router-link to="/">首页</router-link></li>
          <li @click.stop="submenu='关于我们'"><a href="javascript:;">关于我们</a></li>
          <li @click.stop="submenu='新鲜美食'"><a href="javascript:;">新鲜美食</a></li>
          <li @click.stop="submenu='品牌形象'"><a href="javascript:;">品牌形象</a></li>
          <li @click.stop="submenu='营销活动'"><a href="javascript:;">营销活动</a></li>
          <li @click.stop="submenu='加盟服务'"><a href="javascript:;">加盟服务</a></li>
          <li @click.stop="submenu='新闻资讯'"><a href="javascript:;">新闻资讯</a></li>
          <li @click.stop="submenu='联系我们'"><a href="javascript:;">联系我们</a></li>
        </ul>
    </div>
    <div class="submenu" v-show="submenu" @click.stop>
      <div class="cover relative">
        <i class="iconfont icon-guanbi" @click="submenu=!submenu"></i>
        <div class="submenu-item" v-show="submenu=='关于我们'">
          <router-link to="/" @click.native="submenu=false">公司简介</router-link>
          <router-link to="/">企业愿景</router-link>
          <router-link to="/">核心文化</router-link>
          <router-link to="/">发展历程</router-link>
          <router-link to="/">组织架构</router-link>
          <router-link to="/">优秀团队</router-link>
          <router-link to="/">企业责任</router-link>
        </div>
        <div class="submenu-item" v-show="submenu=='新鲜美食'">
          <dl class="new-product clearfix">
            <dt><router-link to="/" @click.native="submenu=false">新品动态  ></router-link></dt>
            <dd>
              <div class="new-product-item">
                <router-link to="">
                  <span><img src="../assets/ad_03.jpg"></span>
                  <p>快乐星昔果乐</p>
                </router-link>
              </div>
              <div class="new-product-item">
                <router-link to="">
                  <span><img src="../assets/ad_03.jpg"></span>
                  <p>快乐星昔果乐</p>
                </router-link>
              </div>
              <div class="new-product-item">
                <router-link to="">
                  <span><img src="../assets/ad_03.jpg"></span>
                  <p>快乐星昔果乐</p>
                </router-link>
              </div>
              <div class="new-product-item">
                <router-link to="">
                  <span><img src="../assets/ad_03.jpg"></span>
                  <p>快乐星昔果乐</p>
                </router-link>
              </div>
            </dd>
          </dl>
          <dl>
            <dt><router-link to="/" @click.native="submenu=false">明星产品  ></router-link></dt>
            <dd>
              <router-link to="">快乐鸡腿堡</router-link>
              <router-link to="">脆皮全鸡</router-link>
              <router-link to="">香辣鸡翅</router-link>
              <router-link to="">招牌奶茶</router-link>
            </dd>
          </dl>
          <dl>
            <dt><router-link to="/" @click.native="submenu=false">时尚饮品  ></router-link></dt>
            <dd>
              <router-link to="">蓝莓冰沙</router-link>
              <router-link to="">香溢可可</router-link>
              <router-link to="">焦糖拿铁咖啡</router-link>
            </dd>
          </dl>
          <dl>
            <dt><router-link to="/" @click.native="submenu=false">经典主食  ></router-link></dt>
            <dd>
              <router-link to="">快乐鸡腿堡</router-link>
              <router-link to="">奥尔良鸡腿堡</router-link>
              <router-link to="">超级牛肉堡</router-link>
              <router-link to="">劲烧牛肉煲</router-link>
            </dd>
          </dl>
          <dl>
            <dt><router-link to="/" @click.native="submenu=false">超值套餐  ></router-link></dt>
            <dd>
              <router-link to="">快乐鸡腿堡套餐</router-link>
              <router-link to="">全家桶</router-link>
              <router-link to="">奥尔良套餐</router-link>
            </dd>
          </dl>
        </div>
        <div class="submenu-item" v-show="submenu=='加盟服务'">
          <router-link to="/" @click.native="submenu=false">企业荣誉</router-link>
          <router-link to="/">如何选择</router-link>
          <router-link to="/">加盟流程</router-link>
          <router-link to="/">市场口碑</router-link>
          <router-link to="/">加盟方案</router-link>
          <router-link to="/">装修指导</router-link>
          <router-link to="/">在线申请</router-link>
          <router-link to="/">培训系统</router-link>
          <router-link to="/">服务指导</router-link>
          <router-link to="/">常见问题</router-link>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchbox:false,
      submenu:false
    }
  },
  mounted:function(){
    window.addEventListener('click',this.handleClick)
    console.log(this.submenu)
  },
  methods:{
    searchInput:function(){
      this.searchbox=true
    },
    topSearch:function(){
      if (this.searchbox) {
        console.log('搜索')
      }
    },
    handleClick:function(){
      this.searchbox=false
      this.submenu=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{z-index:999;}
.site-nav{height: 40px; font-size: 14px; line-height: 40px; background: #111; } 
.site-nav .iconfont{float: left; margin-right: 5px; } 
.site-nav-bd{box-sizing: border-box; max-width: 1200px; width: 99%; margin:0 auto; } 
.site-nav-bd-l{float: left; color: #888b91 } 
.site-nav-bd-l .iconfont{color: #c8161e; font-size: 22px; } 
.site-nav-bd-r{float: right; } 
.site-nav-bd-r li{float: left; color: #fff; margin-left:25px; } 
.site-nav-bd-r li span{font-weight: bold; } 
.site-nav-bd-r li em{font-style:normal;cursor: pointer;}
.site-nav-bd-r .icon-dianhua{font-size: 20px; } 
.site-nav-bd-r .icon-fangdajing{cursor: pointer;} 
.site-nav-bd-r input{background: none;border:0;border-bottom: 1px solid #d6d6d6;outline: none;color: #fff;padding-bottom: 3px;width:0;transition: all .5s}
.site-nav-bd-r input.active{width:12em;}
.top-body{max-width: 1200px; height:80px; width: 99%; margin:0 auto;} 
.top-body .hd-logo{float:left;height:100%;} 
.top-body .hd-logo:after{content:'';display:inline-block;vertical-align:middle;height:100%;}
.top-body .hd-logo img{max-height: 80%;vertical-align:middle;}
.top-body .hd-menu{float:right;}
.hd-menu li{float:left;margin-left:52px;font-size:16px;line-height: 80px;}
.hd-menu li a{color:#2c303b;}
.hd-menu li:hover a{color:#c8161e;}

.submenu{position:absolute;width:100%;background:#f7f8fa;}
.submenu .icon-guanbi{position: absolute;right:0;top:30px;font-size: 20px;line-height: 100%;cursor: pointer;}
.submenu-item{float:right;width:850px;padding:30px 0;}
.submenu-item>a{font-weight: bold;margin:0 42px 0 0;white-space: nowrap;line-height: 26px;}

.new-product{border-bottom: 1px solid #c9c9c9;padding-bottom: 20px;width: 100%;}
.new-product dt{margin-bottom: 15px;}
.new-product dd{height:auto;}
.new-product-item{width:168px;margin-right:30px;float: left;text-align: center;}
.new-product-item span{display: inline-block;width:168px;height:112px;margin-bottom: 10px;}
.new-product-item span:after{content: '';display: inline-block;height: 100%;vertical-align: middle;}
.new-product-item span img{max-width: 100%;max-height: 100%;vertical-align: middle;}
dl.new-product dd a{color: #333;}
dl{width: 50%;float: left;box-sizing: border-box;padding-right:20px;margin-bottom: 20px;}
dl dt{margin-bottom: 5px;}
dl dt a{font-weight: bold;}
dl dd{height:22px;overflow: hidden;}
dl dd a{margin-right: 20px;color:#999;white-space: nowrap;}
dl dd a:hover{color:#c8161e;}
</style>
