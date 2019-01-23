<template>
  <div class="decorationEffect">
    <div class="shop-front">
      <div class="title">{{list[0].Title}}</div>
      <ul class="shop-style clearfix">
        <li @click="tapJump('showfront',index)" v-for="(item,index) in list[0].child" :key="index">
          <img :src="item.Image" alt>
          <p>{{item.Title}}</p>
        </li>        
      </ul> 
      <LoadMore>            
          <button class="moreBtn"  @click="more(0)" v-if="pageIndex1" slot="moreBtn">加载更多</button>
          <p v-else>没有更多信息了</p>
      </LoadMore> 
    </div>
    <div class="shop-behind">
      <div class="title">{{list[1].Title}}</div>
      <ul class="shop-style clearfix">
        <li @click="tapJump('showbehind',index)" v-for="(item,index) in list[1].child" :key="index">
          <img :src="item.Image" alt>
          <p>{{item.Title}}</p>
        </li>
      </ul>
      <LoadMore>            
          <button class="moreBtn"  @click="more(1)" v-if="pageIndex2" slot="moreBtn">加载更多</button>
          <p v-else>没有更多信息了</p>
      </LoadMore> 
    </div>
    <transition name="fade">
      <div v-show="isShow==='showfront'" @click="tapShade($event)">
        <div class="shade"></div>
        <div class="shop-style-slide">
          
          <div class="swiper-container showfront">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in list[0].child" :key="index">
                <p class="entry">{{item.Title}}</p>
                <img :src="item.Image" alt>
              </div>              
            </div>
            <div class="swiper-button-prev swiper-button-white entry"></div>
            <div class="swiper-button-next swiper-button-white entry"></div>
          </div>
          <div class="swiper-pagination showfront-pagination"></div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="isShow==='showbehind'" @click="tapShade($event)">
        <div class="shade"></div>
        <div class="shop-style-slide">
          <div class="swiper-container showbehind">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in list[1].child" :key="index">
                <p class="entry">{{item.Title}}</p>
                <img :src="item.Image" alt>
              </div>
            </div>
            <div class="swiper-button-prev swiper-button-white entry"></div>
            <div class="swiper-button-next swiper-button-white entry"></div>
          </div>
          <div class="swiper-pagination showbehind-pagination"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
let mySwiper;
export default {
  name: "DecorationEffect",
  data() {
    return {      
      list:[{Id: '',Title: ''},{Id: '',Title: ''}],
      isShow: "",    
      pageIndex1:1,  
      pageIndex2:1,  
    };
  },
  created:function(){
    this.loadList()
  },
  methods: {
    tapJump: function(el, index) {
      this.isShow = el;
      this.$nextTick(function() {
        mySwiper = new this.$Swiper("." + el, {
          pagination: "." + el + "-pagination",
          paginationType: "fraction",
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
          initialSlide: index
        });
      });
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
      document.body.classList.add("swiper-slide");
    },
    tapShade: function(e) {
      if (
        !(e.target instanceof Image) &&
        e.target.className.indexOf("entry") === -1
      ) {
        this.isShow = false;
        document.body.classList.remove("swiper-slide");
        mySwiper.destroy(true,true)
      }
      
    },
    loadList:function(){
      let that = this;
      this.$axios.get("/ajaxdata.aspx?Action=typelist&Parent=我们的店分类")
      .then(function(res){        
          that.list = res.data.list             
          for(let i=0;i<that.list.length;i++){
              that.$axios.get("/ajaxdata.aspx?Action=list&Object=shop&SearchKey=TypeId",{
                params:{
                  SearchTypeId:that.list[i].Id,
                  pageIndex:1,
                  pageSize:6          
                }
              })
              .then(function(res){
                 that.list[i].child=res.data.list;
                 console.log(that.list)
                  if(res.data.list.length<6 && i===0){
                      that.pageIndex1=false
                  }else if(res.data.list.length<6 && i===1){
                      that.pageIndex2=false
                  }else{
                      that.pageIndex1++;
                      that.pageIndex2++;
                  }               
              })
          }    
      })     
                   
    },
    more:function(num){
      let that = this;
      let pageIndex;
      if(num===0){
        pageIndex = that.pageIndex1
      }else{
        pageIndex = that.pageIndex2
      }
      if(pageIndex){
        that.$axios.get("/ajaxdata.aspx?Action=list&Object=shop&SearchKey=TypeId",{
            params:{
              SearchTypeId:that.list[num].Id,
              pageIndex:pageIndex,
              pageSize:6          
            }
          })
          .then(function(res){
              that.list[num].child.push(res.data.list)
              if(num===0){
                if(res.data.list.length<6){
                  that.pageIndex1=false
                }else{
                  that.pageIndex1++
                }              
              }else{
                if(res.data.list.length<6){
                  that.pageIndex2=false
                }else{
                  that.pageIndex2++
                }
              }
          })
      }
    }
  }
};
</script>

<style scoped>
.decorationEffect {
  text-align: center;
}
.decorationEffect .title {
  text-align: center;
  font-size: 18px;
  color: #c51720;
  margin: 45px auto;
}
.shop-style li {
  width: 31%;
  height: 366px;
  float: left;
  overflow: hidden;
  position: relative;
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: 3%;
}
.shop-style li img {
  max-width: none;
  height: 100%;
}
.shop-style li p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 18px;
  padding: 20px 0;
  color: #333333;
  background: rgba(255, 255, 20, 0.86);
  transition: all 0.5s;
  transform: translateY(100%);
}
.shop-style li:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.36);
}
.shop-style li:hover p {
  transform: translateY(0);
}
.shop-front li:nth-child(3n-1) {
  margin: 0 3%;
}

.shop-behind li img {
  width: 100%;
  height: auto;
}

.shop-behind .shop-style li {
  width: 48.5%;
}
.shop-behind li:nth-child(2n) {
  margin-left: 3%;
}

/* 弹窗 */
.shop-style-slide {
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 1000;
  text-align: center;
  width: 100%;
  color: #fff;
  height: 80%;
}
.shop-style-slide p {
  font-size: 24px;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop-style-slide img {
  max-height: 100%;
  vertical-align: middle;
}
.swiper-container {
  width: 100%;
  max-width: 1200px;
  height: 80%;
}
.swiper-container .swiper-slide:after {
  content: "";
  vertical-align: middle;
  display: inline-block;
  height: 100%;
}
.swiper-pagination-fraction {
  position: initial;
  font-size: 18px;
  height: 10%;
}
.swiper-pagination-fraction > :first-child {
  font-size: 30px;
}

@media screen and (max-width: 1000px) {
  .shop-style li {
    width: 80%;
    height: 3.6rem;
    padding-bottom: 30px;
    margin: 0 10%;
    border: 0;
  }
  .shop-front li:nth-child(3n-1) {
    margin: 0 10%;
  }
  .shop-style li p {
    transform: translateY(0);
    background: #fff;
    padding: 10px 0 20px 0;
  }

  .shop-behind .shop-style {
    padding: 0 10px;
  }
  .shop-behind .shop-style li {
    width: 100%;
    padding-bottom: 0;
    margin: 0;
    margin-bottom: 20px;
  }
  .shop-behind li:nth-child(2n) {
    margin: 0;
    margin-bottom: 20px;
  }
  .shop-behind li p {
    display: none;
  }
  .swiper-container {
    height: auto;
  }
  .shade {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
