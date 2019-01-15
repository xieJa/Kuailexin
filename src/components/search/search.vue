<template>
  <div class="search cover">
    <crumbs></crumbs>
    <div class="searchBox">
      <input type="text">
      <button>
        <i class="iconfont icon-fangdajing"></i> 搜索
      </button>
    </div>
    <p class="result">共搜索到
      <span>18</span>个有关“
      <span>汉堡</span>”的产品
    </p>
    <div>
      <ul class="search-result clearfix">
        <li>
          <div class="img">
            <img src="@/assets/pro01.jpg" alt>
          </div>
          <p>快乐鸡腿堡</p>
        </li>
        <li>
          <div class="img">
            <img src="@/assets/pro01.jpg" alt>
          </div>
          <p>快乐鸡腿堡</p>
        </li>
        <li>
          <div class="img">
            <img src="@/assets/pro01.jpg" alt>
          </div>
          <p>快乐鸡腿堡</p>
        </li>
        <li>
          <div class="img">
            <img src="@/assets/pro01.jpg" alt>
          </div>
          <p>快乐鸡腿堡</p>
        </li>
        <li>
          <div class="img">
            <img src="@/assets/pro01.jpg" alt>
          </div>
          <p>快乐鸡腿堡</p>
        </li>
        <li>
          <div class="img">
            <img src="@/assets/pro01.jpg" alt>
          </div>
          <p>快乐鸡腿堡</p>
        </li>
      </ul>
      <p style="text-align:center;padding-bottom:50px;">
        <button class="moreBtn">加载更多</button>
      </p>
    </div>
    <div class="null-result relative">
        <p>很抱歉，没有搜索到相关产品！</p>
        <div class="title">为您推荐</div>
        <div class="swiper-container team-swiper">
			    <div class="swiper-wrapper">
			    	<div class="swiper-slide">
			    		 <div class="img">
                            <img src="@/assets/pro01.jpg" alt>
                        </div>
                        <p>快乐鸡腿堡</p>
			        </div>
			    	<div class="swiper-slide">
			    		 <div class="img">
                            <img src="@/assets/pro01.jpg" alt>
                        </div>
                        <p>快乐鸡腿堡</p>
			        </div>
			    	<div class="swiper-slide">
			    		 <div class="img">
                            <img src="@/assets/pro01.jpg" alt>
                        </div>
                        <p>快乐鸡腿堡</p>
			        </div>
			    	<div class="swiper-slide">
			    		 <div class="img">
                            <img src="@/assets/pro01.jpg" alt>
                        </div>
                        <p>快乐鸡腿堡</p>
			        </div>			        			        
			    </div>			    
			</div>	
            <!-- 如果需要分页器 -->			    
		    <div class="swiper-button-prev swiper-button-black team-prev"></div>
			<div class="swiper-button-next swiper-button-black team-next"></div>   
    </div>
  </div>
</template>

<script>
import crumbs from "../crumbs";
export default {
  name: "brand",
  data() {
    return {};
  },
  mounted:function(){
      new this.$Swiper ('.team-swiper', {
	    slidesPerView : 3,
        slidesPerGroup : 3,
        spaceBetween : 15,
		prevButton:'.team-prev',
		nextButton:'.team-next',
	  });
  },
  components: {
    crumbs
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
.search-result li .img,.swiper-slide .img {
  padding-bottom: 94%;
  position: relative;
  border: 1px solid #d4d4d4;
  transition: all 0.5s;
}
.search-result li img,.swiper-slide img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
}
.search-result li:hover .img ,.swiper-slide:hover .img {
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.16);
}
.null-result p{
    font-size:18px;
    text-align: center;
    margin-top:100px;
    font-weight: bold;
}
.swiper-slide p{
    margin:20px;
}

.null-result .title{
    position:relative;
    font-size:18px;
    line-height: 100%;
    color:#000;
    padding:15px 0;
    font-weight: bold;
    
}
.null-result .title:after{
    position: absolute;    
    bottom:0;
    content:'';
    display: block;
    width:52px;
    height:2px;
    background:#c8161e;
}

@media screen and (max-width:1000px){
  .search-result li{
    width:46%;
    margin:0;
    margin-left:3%;
    line-height: 2;    
    margin-bottom:10px;
    font-weight: 400;
  }
  .search-result li:nth-child(3n-1){
    margin:0;
    margin-left:3%;
    margin-bottom:10px;
  }
  .null-result p{
    margin:50px 0;
    font-weight: 400;
  }
}
</style>
