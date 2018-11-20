<template>
  <div class="header">
    <div class="site-nav">
      <div class="site-nav-bd">
        <div class="site-nav-bd-l"><i class="iconfont icon-shouye--"></i><span>您好，欢迎您来到快乐星汉堡官网网站！</span></div>
        <ul class="site-nav-bd-r">
          <li><i class="icon iconfont icon-dianhua"></i>加盟服务电话：<span class="red">400-035-2688</span></li>
          <li><label><i class="icon iconfont icon-fangdajing"></i>搜索</label></li>
        </ul>
      </div>      
    </div>
    <div class="top-body">
        <div class="hd-logo"><img src="../assets/logo.png"></div>
        <ul class="hd-menu">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/">关于我们</router-link></li>
          <li><router-link to="/">新鲜美食</router-link></li>
          <li><router-link to="/">品牌形象</router-link></li>
          <li><router-link to="/">营销活动</router-link></li>
          <li><router-link to="/">加盟服务</router-link></li>
          <li><router-link to="/">新闻资讯</router-link></li>
          <li><router-link to="/">联系我们</router-link></li>
        </ul>
    </div>
    
  </div>  
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-nav{height: 40px; font-size: 14px; line-height: 40px; background: #111; } 
.site-nav .iconfont{float: left; margin-right: 5px; } 
.site-nav-bd{box-sizing: border-box; max-width: 1200px; width: 99%; margin:0 auto; } 
.site-nav-bd-l{float: left; color: #888b91 } 
.site-nav-bd-l .iconfont{color: #c8161e; font-size: 22px; } 
.site-nav-bd-r{float: right; } 
.site-nav-bd-r li{float: left; color: #fff; margin-left:25px; } 
.site-nav-bd-r li span{font-weight: bold; } 
.site-nav-bd-r .icon-dianhua{font-size: 20px; } 
.top-body{max-width: 1200px; height:80px; width: 99%; margin:0 auto;} 
.top-body .hd-logo{float:left;height:100%;} 
.top-body .hd-logo:after{content:'';display:inline-block;vertical-align:middle;height:100%;}
.top-body .hd-logo img{max-height: 80%;vertical-align:middle;}
.top-body .hd-menu{float:right;}
.hd-menu li{float:left;margin-left:52px;font-size:16px;line-height: 80px;}
.hd-menu li a{color:#2c303b;}
.hd-menu li:hover a{color:#c8161e;}
</style>
