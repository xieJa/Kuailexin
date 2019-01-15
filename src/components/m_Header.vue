<template>
  <div class="header">
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
      <router-link to="/">在线咨询</router-link>
      <router-link to="/">微信咨询</router-link>
      <router-link to="/">电话沟通</router-link>
      <router-link :to="{path:'/server',query:{name:'申请加盟'}}">申请加盟</router-link>
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
            <router-link to="/">新鲜美食</router-link>
            <i class="iconfont icon-jiantou"></i>
          </li>
          <li @click="navSubSide('加盟服务')">
            <router-link to="/">加盟服务</router-link>
            <i class="iconfont icon-jiantou"></i>
          </li>
          <li>
            <router-link :to="{path:'/news',query:{name:'成功案例'}}">成功案例</router-link>
          </li>
          <li>
            <router-link :to="{path:'/news',query:{name:'加盟资讯'}}">加盟资讯</router-link>
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
                <li>
                  <router-link :to="{path:'/Product',query:{name:'新品动态'}}">新品动态</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/Product',query:{name:'明星产品'}}">明星产品</router-link>
                </li>
                <li>
                  <router-link :to="{path:'/Product',query:{name:'经典主食'}}">经典主食</router-link>
                </li>               
                <li>
                  <router-link :to="{path:'/Product',query:{name:'精美小食'}}">精美小食</router-link>
                </li>               
                <li>
                  <router-link :to="{path:'/Product',query:{name:'时尚饮品'}}">时尚饮品</router-link>
                </li>               
                <li>
                  <router-link :to="{path:'/Product',query:{name:'超值套餐'}}">超值套餐</router-link>
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
                  <router-link :to="{path:'/server',query:{name:'加盟方案'}}">加盟方案</router-link>
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
              <input type="text" @keyup.enter="topSearch()">
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
  data() {
    return {
      isNav: false,
      isSubNav:false,
      isSearch:false
    };
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
       this.isSearch=false
      this.$router.push({
          path:'/search'
        })
    }
  },
  watch:{
     '$route'(to,from){
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
.searchBtn {
  position: absolute;
  color: #c8161e;
  right: 3.5em;
  height: 1.9em;
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
  font-size:.8rem
}
</style>