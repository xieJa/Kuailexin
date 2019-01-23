<template>
  <div class="search">
    <div class="cover" v-if="!this.$M">
      <crumbs>
        <a href="javascript:;">搜索</a>
      </crumbs>
      <div class="searchBox">
        <input type="text" placeholder="请输入搜索关键字" v-model="searchKeyValue">
        <button @click="topSearch">
          <i class="iconfont icon-fangdajing"></i> 搜索
        </button>
      </div>
    </div>
    <div class="searchTab">
      <div class="cover">
        <button :class="active==1?'active':''" @click="searchProduct">产品</button>
        <button :class="active==2?'active':''" @click="searchNew">新闻</button>
      </div>
    </div>
    <div class="cover" v-show="active==1">
      <p class="result">共搜索到
        <span>{{listcount}}</span>个有关“
        <span>{{this.$route.query.Key}}</span>”的产品
      </p>
      <div v-if="listcount!=0">
        <ul class="search-result clearfix">
          <li v-for="item in searchProductList" :key="item.Id" @click="proLink(item.Id)">
            <div class="img">
              <img :src="item.Image" alt>
            </div>
            <p>{{item.Title}}</p>
          </li>          
        </ul>        
      </div>
      <div class="null-result relative" v-else>
        <p>很抱歉，没有搜索到相关产品！</p>
        <div class="title">为您推荐</div>
        <div class="swiper-container team-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in rProduct" :key="item.Id" @click="proLink(item.Id)">
              <div class="img">
                <img :src="item.Image" alt>
              </div>
              <p>{{item.Title}}</p>
            </div>                                   
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-button-prev swiper-button-black team-prev"></div>
        <div class="swiper-button-next swiper-button-black team-next"></div>
      </div>
    </div>
    <div class="newlist cover" v-show="active==2">
      <p class="result">共搜索到
        <span>{{listcount}}</span>个有关“
        <span>{{this.$route.query.Key}}</span>”的新闻
      </p>
      <div v-if="listcount!=0">
        <ul>
            <li class="clearfix" v-for="(item,index) in searchNewList" :key="index">
                <div class="newPic">
                    <img :src="item.Image" alt="">
                </div>
                <div class="new-inner">
                    <div class="new-title">{{item.Title}}</div>
                    <div class="new-date">{{item.CreateDate}}</div>
                    <div class="new-intro">{{item.Description}}</div>
                    <router-link :to="{path:'/newdetail',query:{TypeId:item.TypeId,Id:item.Id}}">查看详情    ></router-link>
                </div>
            </li>           
        </ul>        
    </div>
    <div class="null-result relative" v-else>
        <p>很抱歉，没有搜索到相关新闻！</p>
        <div class="title">为您推荐</div>
        <ul>
            <li class="clearfix" v-for="(item,index) in rNews" :key="index">
                <div class="newPic">
                    <img :src="item.Image" alt="">
                </div>
                <div class="new-inner">
                    <div class="new-title">{{item.Title}}</div>
                    <div class="new-date">{{item.CreateDate}}</div>
                    <div class="new-intro">{{item.Description}}</div>
                    <router-link :to="{path:'/newdetail',query:{TypeId:item.TypeId,Id:item.Id}}">查看详情    ></router-link>
                </div>
            </li>           
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import crumbs from "../crumbs";
export default {
  name: "brand",
  data() {
    return {
      searchProductList: [],
      searchNewList: [],
      listcount: "",
      active: "",
      rProduct:[],
      rNews:[],
      searchKeyValue:''
    };
  },
  created: function() {
    this.searchProduct();
  },
  mounted: function() {
    
  },
  methods: {
    searchProduct: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=productsearch", {
          params: {
            Key: that.$route.query.Key
          }
        })
        .then(function(res) {
          that.searchProductList = res.data.list;
          that.listcount = res.data.listcount;
          that.active = 1;
          
        });
    },
    searchNew: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=newssearch", {
          params: {
            Key: that.$route.query.Key
          }
        })
        .then(function(res) {
          that.searchNewList = res.data.list;
          that.listcount = res.data.listcount;
          that.active = 2;
        });
    },
    recommendProduct:function(){
       let that = this;
        this.$axios
        .get("/ajaxdata.aspx?Action=list&Object=ProductView&SearchKey=Recommend&SearchRecommend=1&pageIndex=1&pageSize=6")
        .then(function(res) {
          that.rProduct = res.data.list;   
          that.$nextTick(function(){
            if(!this.$M){
                new that.$Swiper(".team-swiper", {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 15,
                prevButton: ".team-prev",
                nextButton: ".team-next"
              });     
            }              
            })
                             
        });
    },
    recommendNew: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=list&Object=news&SearchKey=Recommend&SearchRecommend=是&pageIndex=1&pageSize=6")
        .then(function(res) {
          that.rNews = res.data.list;
        });
    },
    proLink:function(id){
      this.$router.push({
        path:"/Product/ProductDetail",
        query:{Id:id}
      })
    },
    topSearch: function() {
      this.$router.push({
          path:'/search',
          query:{Key:this.searchKeyValue}
      })
    }
  },
  components: {
    crumbs
  },
  watch:{
    'listcount':function(){
        if(this.listcount==0){
          this.recommendProduct()          
          this.recommendNew()          
        }
    },
    '$route'(to,from){
      this.searchProduct();
    }
  }
};
</script>
<style scoped>
.searchBox {
  height: 56px;
  width: 80%;
  margin: 0 auto;
}
.searchBox input {
  float: left;
  width: calc(100% - 120px);
  height: 54px;
  border: 1px solid #d7d7d7;
  border-right: 0;
  vertical-align: top;
  text-indent: 2em;
}
.searchBox button {
  height: 56px;
  border: 0;
  background: #c9151e;
  color: #fff;
  padding: 0 30px;
  font-size: 16px;
}
.result {
  margin: 47px 0;
}
.result span {
  color: #c9151e;
}
.search-result li {
  float: left;
  width: 31%;
  font-size: 16px;
  line-height: 3.5;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}
.search-result li:nth-child(3n-1) {
  margin: 0 2%;
}
.search-result li .img,
.swiper-slide .img {
  padding-bottom: 94%;
  position: relative;
  border: 1px solid #d4d4d4;
  transition: all 0.5s;
}
.search-result li img,
.swiper-slide img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
}
.search-result li:hover .img,
.swiper-slide:hover .img {
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.16);
}
.null-result{
  padding-bottom:60px;
}
.null-result p {
  font-size: 18px;
  text-align: center;
  margin: 100px 0;
  font-weight: bold;  
}
.swiper-slide p {
  margin: 20px;
}

.null-result .title {
  position: relative;
  font-size: 18px;
  line-height: 100%;
  color: #000;
  padding: 15px 0;
  font-weight: bold;
}
.null-result .title:after {
  position: absolute;
  bottom: 0;
  content: "";
  display: block;
  width: 52px;
  height: 2px;
  background: #c8161e;
}
.searchTab {
  margin-top: 50px;
  border-bottom: 1px solid #e2e2e2;
}
.searchTab button {
  border: 0;
  background: none;
  color: #333333;
  position: relative;
  padding-bottom: 15px;
  margin-right: 50px;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}
.searchTab button.active {
  color: #c9151e;
}
.searchTab button.active:after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: -1px;
  background: #c8161e;
}

.newlist{
    margin-top:40px;
}
.newlist li{
    margin-bottom:60px;
}
.newlist .newPic{
    float:left;
    width:35%;
    overflow: hidden;
    position: relative;
}
.newlist .newPic:after{
    content:'';
    display: block;
    padding-bottom:68%;
}
.newlist .newPic img{
    max-width: none;
    height:100%;
    position: absolute;
    left:50%;
    transform:translateX(-50%)
}
.new-inner{
    float:left;
    width:60%;
    margin-left:5%;
}
.new-inner .new-title{
    font-size:16px;
    font-weight: bold;
    padding-top:15px;
}
.new-inner .new-date{
    color:#999999;
    line-height: 40px;
}
.new-inner .new-intro{
    height:66px;
    margin:4% 0;
    overflow: hidden;
}
.new-inner a{
    display: block;
    width:210px;
    height:43px;
    text-align: center;
    line-height: 43px;
    color:#999999;
    border:1px solid #c7c7c7;
    transition:all .3s;
}
.new-inner a:hover{   
    background:#c8161e;
    color:#fff;
    border:1px solid #c8161e;
}
.team-swiper.swiper-container{
  padding-bottom: 0;
}
@media screen and (max-width: 1000px) {
  .search{
    padding:0 10px;
  }
  .searchTab{
    margin-top:20px;
  }
  .result{
    margin:10px 0;
  }
  .search-result li {
    width: 46%;
    margin: 0;
    margin-left: 3%;
    line-height: 2;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .search-result li:nth-child(3n-1) {
    margin: 0;
    margin-left: 3%;
    margin-bottom: 10px;
  }
  .null-result p {
    margin: 50px 0;
    font-weight: 400;
  }
  .newlist{
        background:#f1f1f1;
    }
    .newlist li{
        padding:10px;
        background:#fff;
        margin-bottom:10px;
    }
    .newlist .newPic{
        width: 100%;
    }
    .new-inner{
        width: 100%;        
        margin-left: 0;
    }
    .new-inner .new-intro{
        margin:0;
        height: 64px;
    }
    .new-inner a{
        margin:20px auto;
        border:0;
        background:#c8161e;
        color:#fff;
        width: 180px;
        height: 36px;
        line-height: 36px;
    }
    .swiper-button-black{
      display: none;
    }
    .team-swiper.swiper-container{
      width:100%;
      padding:10px 0;
    }
    .swiper-wrapper{
      display: block;
    }
    .swiper-slide {
      float:left;
      width:48%;
    }
    .swiper-slide:nth-child(2n){
      margin-left:4%;
    }
    .swiper-slide p{
      margin:10px 0;
    }
}
</style>
