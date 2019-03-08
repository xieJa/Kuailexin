<template>
  <div class="home">
    <div class="swiper-container home-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in Banner" :key="item.Id">
          <a :href="item.Url"><img :src="item.Image" :title="item.Title"></a>
        </div>        
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination banner-swiper-pagination"></div>
    </div>
    <div class="layer clearfix relative">
      <div class="cover zx-cover">
        <div class="mod-hd zx-hd">
          <h2>{{threehearts[0].Keyword}}</h2>
          <p>{{threehearts[0].Description}}</p>
        </div>
        <ul class="zx-hb-bd pc-show clearfix" v-if="!this.$M">          
          <li v-for="(item,index) in typelist" :key="item.Id">
            <div class="flipper">
              <img :src="item.Image" :onerror="errorImg"> 
              <div class="zx-hb-inner">
                <div class="zx-hb-item">
                  <div class="zx-hb-hd">{{item.Title}}</div>
                  <p>{{item.Description}}</p>
                  <router-link to="/Product/NewProduct" v-if="index==0" target="_blank">查看详情 ></router-link>
                  <router-link :to="{path:'/Product',query:{id:item.Id}}" target="_blank" v-else>查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="zx-bt">{{item.Title}}</div>
          </li>          
        </ul>
        <div class="m-zx-hb-bd m-show" v-else>
          <div class="m-zx-bt">
            <button @click="reds(index)" :class="zx==index?'active':''" v-for="(item,index) in typelist" :key="index">{{item.Title}}</button>
          </div>
          <transition-group>
            <div class="m-zx-inner" v-for="(item,index) in typelist" :key="item.Id" v-show="index== zx"> 
              <router-link to="/Product/NewProduct" v-if="index==0">
              <img :src="item.Image">
              <p>{{item.Description}}</p>
              </router-link>             
              <router-link :to="{path:'/Product',query:{id:item.Id}}" v-else>
              <img :src="item.Image">
              <p>{{item.Description}}</p>
              </router-link>             
            </div>            
          </transition-group>
        </div>
      </div>
      <div class="modifying modifying01">
        <img src="../assets/modifying_01.png">
      </div>
      <div class="modifying modifying02">
        <img src="../assets/modifying_02.png">
      </div>
    </div>
    <div class="layer clearfix relative bg-gray" v-if="!this.$M">
      <div class="cover ad-propaganda-cover">
        <div class="swiper-container ad-propaganda">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in newproductlist" :key="index">              
              <div class="ad-pic">
                <img :src="item.Image" :onerror="errorImg">
              </div>
              <div class="ad-inner">
                <div class="ad-bt">{{item.Title}}</div>
                <p>{{item.Description}}</p>
                <router-link to="/Product/NewProduct" @click.native="submenu=false" target="_blank">查看详情 ></router-link>
              </div>
            </div>            
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination propaganda-swiper-pagination"></div>
          <div class="swiper-button-prev swiper-button-black propaganda-prev"></div>
          <div class="swiper-button-next swiper-button-black propaganda-next"></div>
        </div>
      </div>
      <div class="modifying modifying03">
        <img src="../assets/modifying_03.png">
      </div>
    </div>
    <div class="ad-activity" v-if="!this.$M">
      <a :href="ad[0].Url"><img :src="ad[0].Image" :title="ad[0].Title"></a>
    </div>`
    <div class="layer clearfix relative">
      <div class="cover yx-cover">
        <div class="mod-hd yx-hd">
          <h2>{{threehearts[1].Keyword}}</h2>
          <p>{{threehearts[1].Description}}</p>
        </div>
        <ul class="yx-server clearfix" v-if="!this.$M">
          <li>
            <router-link :to="{path:'/market',query:{name:'order'}}" target="_blank">
              <img src="../assets/server_icon1.png">
              <span>微信点餐</span>
              <p>通过微信自助点餐更加方便快捷，建立属于自己的消费者社群</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/market',query:{name:'takeOut'}}" target="_blank">
            <img src="../assets/server_icon2.png">
            <span>外卖运营</span>
            <p>深度对接，专业的外卖的接单系统自动接收第三方平台订单</p>
            </router-link>
          </li>
          <li>
            <router-link to="/program" target="_blank">
            <img src="../assets/server_icon3.png">
            <span>加盟方案</span>
            <p>让每一位加盟快乐星汉堡店的加盟商，都能更加轻松经营，助力加盟者成就梦想</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/server',query:{name:'choose'}}" target="_blank">
            <img src="../assets/server_icon4.png">
            <span>如何选择</span>
            <p>精心挑选每一个食材，精心烹饪每一种产品，通过专业、科学、严格的制作工艺而成</p>
            </router-link>
          </li>
        </ul>
        <div class="join-new" v-if="this.$M">
          <PageTitle title="加盟资讯"></PageTitle>
          <ul>
            <li v-for="item in newJoin" :key="item.Id" @click="jumpNew(item.Id)">
              <div class="newPic">
                <img :src="item.Image" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">{{item.Title}}</div>
                <div class="new-intro">{{item.Description}}</div>
              </div>
            </li>            
          </ul>
          <router-link :to="{path:'/news',query:{Id:newJoinM}}" class="seeAll">查看全部</router-link>
        </div>
      </div>
      <div class="modifying modifying04">
        <img src="../assets/modifying_04.png">
      </div>
      <div class="modifying modifying05">
        <img src="../assets/modifying_05.png">
      </div>
    </div>
    <div class="layer clearfix relative bg-gray" v-if="!this.$M">
      <div class="cover campaign-cover">
        <div class="cover-hd clearfix">
          <h2 class="cover-hd-title">营销经典</h2>
          <div class="cover-hd-r">
            <span
              class="tab-btn"
              :class="campaignTab=='1'?'cur':''"
              data-num="1"
              @click="campaignTabTrigger($event)"
            >新品营销</span>
            <span
              class="tab-btn"
              :class="campaignTab=='2'?'cur':''"
              data-num="2"
              @click="campaignTabTrigger($event)"
            >日常营销</span>
            <span
              class="tab-btn"
              :class="campaignTab=='3'?'cur':''"
              data-num="3"
              @click="campaignTabTrigger($event)"
            >节日营销</span>
          </div>
        </div>
        <ul class="campaign clearfix" v-show="campaignTab=='1'">
          <li v-for="item in NewProductMarketing" :key="item.id">
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img :src="item.Image" :onerror="errorImg">
              </div>
              <div class="campaign-item-bt">{{item.Title}}</div>
              <div class="campaign-item-text">{{item.Description}}</div>
              <div class="campaign-item-btn">
                <router-link :to="{path:'/Marketingdetail',query:{name:'NewProductMarketing',Id:item.Id}}" target="_blank">查看详情</router-link>
              </div>
            </div>
          </li>          
        </ul>
        <ul class="campaign clearfix" v-show="campaignTab=='2'">
          <li v-for="item in DailyMarketing" :key="item.id">
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img :src="item.Image" :onerror="errorImg">
              </div>
              <div class="campaign-item-bt">{{item.Title}}</div>
              <div class="campaign-item-text">{{item.Description}}</div>
              <div class="campaign-item-btn">
                <router-link :to="{path:'/Marketingdetail',query:{name:'DailyMarketing',Id:item.Id}}" target="_blank">查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
        <ul class="campaign clearfix" v-show="campaignTab=='3'">
          <li v-for="item in HolidayMarketing" :key="item.id">
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img :src="item.Image" :onerror="errorImg">
              </div>
              <div class="campaign-item-bt">{{item.Title}}</div>
              <div class="campaign-item-text">{{item.Description}}</div>
              <div class="campaign-item-btn">
                <router-link :to="{path:'/Marketingdetail',query:{name:'HolidayMarketing',Id:item.Id}}" target="_blank">查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="modifying modifying06">
        <img src="../assets/modifying_06.png">
      </div>
    </div>
    <div class="layer clearfix relative" :class="!this.$M?'bg-black':''">
      <div class="cover fx-cover">
        <div class="mod-hd fx-hd">
          <h2>{{threehearts[2].Keyword}}</h2>
          <p>{{threehearts[2].Description}}</p>
        </div>
        <div class="join-scheme clearfix" v-if="this.$M">
          <PageTitle title="加盟方案"></PageTitle>
          <ul>
            <li v-for="item in AffiliateSolutions" :key="item.Id" @click="programTap(item.Id)">              
              <div class="newPic">
                <img :src="item.Images[0].Image" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">{{item.Title}}</div>
              </div>
            </li>            
          </ul>
        </div>
        <div class="cover-hd clearfix">
          <h2 class="cover-hd-title">成功案例</h2>
          <div class="cover-hd-r">
            <router-link to="/case?Id=01024d30-9c2b-411c-b785-48b53d0777ed">查看全部 ></router-link>
          </div>
        </div>
        <div class="swiper-container fx-cases">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in caseList" :key="item.Id" @click="caseTap(item.Id)">
              <img :src="item.Image">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>{{item.Title}}</p>
                  <router-link :to="{path:'/newdetail',query:{Id:item.Id}}" target="_blank">查看详情 ></router-link>
                </div>
              </div>
            </div>            
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination cases-swiper-pagination"></div>
        </div>
      </div>
      <div class="modifying modifying05" v-if="!this.$M">
        <img src="../assets/fx_bg.jpg">
      </div>
    </div>
    <div class="layer clearfix relative bg-gray" v-if="!this.$M">
      <div class="cover team-cover relative">
        <div class="cover-hd clearfix">
          <h3 class="cover-hd-bt">优秀团队</h3>
          <p class="cover-hd-p">我们拥有一支结构完善优秀且高效的团队</p>
        </div>
        <div class="swiper-container team-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in teamlist" :key="index">
              <div class="team-portraits">
                <img :src="item.Image" :onerror="errorImg">
              </div>
              <div class="team-name">{{item.Title}}</div>
              <div class="team-job">{{item.Department}}</div>
              <div class="team-intro">{{item.Description}}</div>
              <router-link :to="{path: '/about/TeamView',query:{id:item.Id}}" target="_blank">查看详情</router-link>
            </div>            
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-button-prev swiper-button-black team-prev"></div>
        <div class="swiper-button-next swiper-button-black team-next"></div>
      </div>
      <div class="modifying modifying07">
        <img src="../assets/modifying_07.png">
      </div>
    </div>
    <div class="layer clearfix relative" v-if="!this.$M">
      <div class="cover storefront-cover relative">
        <div class="cover-hd clearfix">
          <h3 class="cover-hd-bt">店面规划</h3>
        </div>
        <div
          class="storefront-intro"
        >店面规划和设计是门店取得成功的基础。厨房结构，设备规划摆放流程对于操作和产出率和出餐速度是极大的影响，油烟机、空调和炸炉、烤箱和裹粉台的关系决定门店的能耗的高低及粉尘的溅落和漂浮，进而决定机器的使用寿命。吧台和厨房适宜的高度差决定了员工的状态和激情，也能更好的提高配单效率，吧台和门的距离有店面大小和客户心理叠加系数决定，餐厅位置摆放决定主动客户和被动客户的占比等</div>
        <div class="storefront clearfix">
          <router-link to="/brand/Project" target="_blank">
            <img :src="shop[0].Image" alt="">
          </router-link>
        </div>
      </div>
      <div class="modifying modifying08">
        <img src="../assets/modifying_08.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home", 
  data: function() {
    return {     
      threehearts:[{
            Title: "",
            Keyword: "",  //关键字
            Description: ""  //描述
            },{
            Title: "",
            Keyword: "",
            Description: "" 
            },
            {
            Title: "",
            Keyword: "",
            Description: "" 
            }],//三心标题
      Banner:[],
      typelist:[{Title:'新品动态',Description:'快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心',Image:'',Id:''}], //产品列表
      ad:[{"Image":"","Url":"","Title":""}], //广告
      newproductlist:[], //新品动态
      teamlist:[],  // 优秀团队
      shop:[{"Id":"","Title":"","Elements":"","ShowIndex":"","Description":"","Image":""}], //店铺规划
      NewProductMarketing:[],
      DailyMarketing:[],
      HolidayMarketing:[],
      caseList:[],
      newJoin:[], //加盟资讯
      newJoinM:{Id:''},
      AffiliateSolutions:[],
      campaignTab: 1,
      zx:0,
    };
  },
  created:function(){    
    let that = this;
    // 专心,用心，放心
    this.$axios.get('/ajaxdata.aspx?Action=threehearts')
    .then(function(res){
      that.threehearts = res.data.list   
    })
    .catch(function(err){
      console.log(err)
    })
    // Banner列表
    this.$axios.get('/ajaxdata.aspx?Action=bannerlist')
    .then(function(res){
      that.Banner = res.data.list   
      that.$nextTick(function(){
        new that.$Swiper(".home-banner", {
          autoplay: 5000,
          autoplayDisableOnInteraction:false,
          loop: true,
          // 如果需要分页器
          pagination: ".banner-swiper-pagination",
          paginationClickable: true
        });
      })
    })
    .catch(function(err){
      console.log(err)
    })
    // 首页广告
    this.$axios.get('/ajaxdata.aspx?Action=ad')
    .then(function(res){
      that.ad = res.data.list   
    })
    .catch(function(err){
      console.log(err)
    })
    // 首页产品列表
    this.$axios.get(encodeURI('/ajaxdata.aspx?Action=typelist&Parent=产品分类&DefaultShow=1'))
    .then(function(res){
      for(let i=0;i<2;i++){
        that.typelist.push(res.data.list[i])
      }
    })
    .catch(function(err){
      console.log(err)
    })
    // 首页新品动态分类
    this.$axios.get(encodeURI('/ajaxdata.aspx?Action=typelist&Parent=新品动态分类'))
    .then(function(res){
      that.typelist[0]=res.data.list[0]
    })
    .catch(function(err){
      console.log(err)
    })
    // 新品动态
    this.$axios.get('/ajaxdata.aspx?Action=newproductlist&pageIndex=1&pageSize=5&Recommend=1')
    .then(function(res){
      that.newproductlist = res.data.list
      that.$nextTick(function(){
        new this.$Swiper(".ad-propaganda", {
          loop: true,
          // 如果需要分页器
          pagination: ".propaganda-swiper-pagination",
          paginationClickable: true,
          prevButton: ".propaganda-prev",
          nextButton: ".propaganda-next"
        });
      })
    })
    .catch(function(err){
      console.log(err)
    })
    // 优秀团队
    this.$axios.get('/ajaxdata.aspx?Action=list&Object=Team&pageIndex=1&pageSize=100')
    .then(function(res){
      that.teamlist = res.data.list
      that.$nextTick(function(){
        new this.$Swiper(".team-swiper", {
          slidesPerView: 4,
          slidesPerGroup: 4,
          prevButton: ".team-prev",
          nextButton: ".team-next"
        });
      })
    })
    .catch(function(err){
      console.log(err)
    })

    // 店面规划
    this.$axios("/ajaxdata.aspx?Action=list&Object=shopplanning&pageIndex=1&pageSize=1")
    .then(function(res){
      that.shop = res.data.list     
    })
    .catch(function(err){
      console.log(err)
    })
    // 新品营销
    this.$axios.get('/ajaxdata.aspx?Action=defaultclassicList&Object=NewProductMarketing&pageIndex=1&pageSize=4')
    .then(function(res){
      that.NewProductMarketing=res.data.list
    })
    .catch(function(err){
      console.log(err)
    })
    // 日常营销
    this.$axios.get('/ajaxdata.aspx?Action=defaultclassicList&Object=DailyMarketing&pageIndex=1&pageSize=4')
    .then(function(res){
      that.DailyMarketing=res.data.list
    })
    .catch(function(err){
      console.log(err)
    })
    // 节日营销
    this.$axios.get('/ajaxdata.aspx?Action=defaultclassicList&Object=HolidayMarketing&pageIndex=1&pageSize=4')
    .then(function(res){
      that.HolidayMarketing=res.data.list
    })
    .catch(function(err){
      console.log(err)
    })
    // 成功案例
    this.$axios.get('/ajaxdata.aspx?Action=recommendnewslist&pageIndex=1&pageSize=10')
    .then(function(res){
      that.caseList=res.data.list
      that.$nextTick(function(){
        let fxcase = this.$M ? 2 : 4;
        new this.$Swiper(".fx-cases", {
          autoplay: 3000,
          autoplayDisableOnInteraction:false,
          slidesPerView: fxcase,
          slidesPerGroup: fxcase,
          spaceBetween: 15,
          // 如果需要分页器
          pagination: ".cases-swiper-pagination",
          paginationClickable: true
        });
      })
    })
    .catch(function(err){
      console.log(err)
    })
    // 加盟资讯
    this.$axios.get(encodeURI("/ajaxdata.aspx?Action=typelist&Parent=新闻资讯分类"))
    .then(function(res){
      for(let i = 0;i<res.data.list.length;i++){
        if(res.data.list[i].Title=='加盟资讯'){   
          that.newJoinM= res.data.list[i].Id;               
           that.$axios.get("/ajaxdata.aspx?Action=list&Object=news&SearchKey=TypeId",{
                params:{
                    SearchTypeId:that.newJoinM,
                    pageIndex:1,
                    pageSize:2,
                }
            })
            .then(function(res){
               that.newJoin=res.data.list
            })
        }
      }
    })
    // 加盟方案
    this.$axios.get("/ajaxdata.aspx?Action=AffiliateSolutionslist&Object=AffiliateSolutions&pageIndex=1&pageSize=4")
    .then(function(res){
        that.AffiliateSolutions = res.data.list        
    })
  },  
  methods: {
    campaignTabTrigger: function(e) {
      this.campaignTab = e.target.dataset.num;
    },
    reds: function(index) {
      this.zx = index;
    },
    jumpNew:function(id){
      this.$router.push({
        path:'/newdetail',
        query:{
          Id:id
        }
      })
    },
    caseTap:function(id){
      const caseUrl = this.$router.resolve({
        path:'/newdetail',
        query:{
          Id:id
        }
      })
      window.open(caseUrl.href, '_blank');
    },
    programTap:function(id){
      this.$router.push({
        path:'/program',
        hash:id
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 1000px) {
  .home {
    background: #f4f4f4;
  }
  .layer {
	  background:#fff;
	  margin-top:.2rem;
  }
  .home-banner {
    height: 3.8rem;
  }
  .home-banner img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: none;
    height: 100%;
  }
  .mod-hd h2 {
    font-size: 0.3rem;
    line-height: 1.4rem;
    padding-left: 1.6rem;
    background-size: auto 1.4rem;
  }
  .mod-hd p {
    margin-top: -10px;
    font-size: 0.22rem;
    padding: 0 10px;
    line-height: 1.5;
  }
  .zx-cover{
	  padding-bottom:30px;
  }
  .m-zx-bt {
    margin-top: 20px;    
    padding: 2px 10px 0;
    display: flex;
    justify-content: space-between;
    background: #c8161e;
    height: 40px;
  }
  .m-zx-bt button {
    border: 0;
    background: none;
    font-size: 0.36rem;
    position: relative;
    outline: none;
    color: #fff;
    flex-grow: 1;
    height: 40px;
    transition: all .3s;
  }
  .m-zx-bt .active {
    background: #fff;
    color: #c8161e;
  }
  
  .m-zx-inner {
    margin: 0 10px;
    text-align: center;
  }
  .m-zx-inner img {
    margin-top: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  .m-zx-inner p {
    margin-top: 10px;
  }
  .join-new {
    padding: 0 10px;
  }
  .join-new:after{
    content: '';
    display: block;
    clear: both;
    height: 1px;
  }
  .join-new li {
    margin-top: 30px;
  }
   .join-new li img{
     width: 100%;
   }
  .join-new .new-title {
    font-size: 0.3rem;
    font-weight: bold;
    margin: 10px 0;
  }
  .join-new .new-intro {
    font-size: 0.24rem;
  }
  .fx-hd h2 {
    color: #333;
  }
  .fx-hd p {
    color: #c8161e;
  }
  .fx-cover {
    padding: 0 10px;
  }
  .join-scheme li {
    position: relative;
    margin-bottom: 10px;
    font-size: 0.3rem;
    overflow: hidden;
  }
  .join-scheme li:after {
    content: "";
    display: block;
  }
  .join-scheme li .newPic {
    height: 100%;
  }
  .join-scheme li .newPic img{
    max-width: 100%;
    max-height:100%;
  }
  .join-scheme li .new-title {
    padding: 5px 0;
    bottom: 0;
    text-align: center;
    color: #333;
    width: 100%;
  }

  .join-scheme li:nth-child(2) {
    margin-left: 0px;
  }
  .fx-cover .cover-hd{
	  position: relative;
	  margin-top:0;
	  padding-top:.2rem;	 
  }
  .fx-cover .cover-hd:before{
	  content:'';
	  display: block;
	  left:0;
	  margin-left:-10px;
	  margin-right:-10px;
	  height:.2rem;
 	  background:#f4f4f4;
  }
  .fx-cover .cover-hd,
  .fx-cover .cover-hd a {
    color: #333;
  }
  .cover-hd .cover-hd-title {
    font-size: 0.34rem;
    height: 2em;
	line-height: 2em;
	margin-top:.3rem;
  }
  .fx-cover .cover-hd .cover-hd-r {
	height: 2em;
	line-height: 2em;
    margin-top:.3rem;
  }
  .fx-cover .cover-hd .cover-hd-title:after {
    background: #c8161e;
  }
  .pageTitle {
    padding-top: 10px !important;
  }
  .fx-cases.swiper-container{
    padding-bottom:60px;
  }
}
</style>
