<template>
  <div class="decorationEffect">
    <div class="shop-front">
      <div class="title">门面效果</div>
      <ul class="shop-style clearfix">
        <li @click="tapJump('showfront',0)">
          <img src="../../assets/pic1.jpg" alt>
          <p>快乐星汉堡常州人民路店</p>
        </li>
        <li @click="tapJump('showfront',1)">
          <img src="../../assets/pic1.jpg" alt>
          <p>快乐星汉堡常州人民路店</p>
        </li>
        <li @click="tapJump('showfront',2)">
          <img src="../../assets/pic1.jpg" alt>
          <p>快乐星汉堡常州人民路店</p>
        </li>
      </ul>
      <a href="#" class="moreBtn">加载更多</a>
    </div>
    <div class="shop-behind">
      <div class="title">餐厅效果</div>
      <ul class="shop-style clearfix">
        <li @click="tapJump('showbehind',0)">
          <img src="../../assets/pic1.jpg" alt>
          <p>快乐星汉堡常州人民路店</p>
        </li>
        <li @click="tapJump('showbehind',1)">
          <img src="../../assets/pic1.jpg" alt>
          <p>快乐星汉堡常州人民路店</p>
        </li>        
      </ul>
      <a href="#" class="moreBtn">加载更多</a>
    </div>
    <transition name="fade">
      <div v-show="isShow==='showfront'" @click="tapShade($event)">
        <div class="shade"></div>
        <div class="shop-style-slide">
          <p class="entry">快乐星汉堡常州人民路店</p>
          <div class="swiper-container showfront">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/pic1.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/pic1.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/pic1.jpg" alt>
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
          <p class="entry">快乐星汉堡常州人民路店</p>
          <div class="swiper-container showbehind">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/pic1.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/pic1.jpg" alt>
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
export default {
  name: "DecorationEffect",
  data() {
    return {
      isShow:''
    };
  },
  methods: {
    tapJump: function(el,index) {
        this.isShow=el;
        this.$nextTick(function(){
            new this.$Swiper("."+el, {
                    pagination: {
                        el: "."+el+"-pagination",
                        type: "fraction"
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    initialSlide: index
            });
        });
        document.body.classList.add('swiper-slide')  
    },
    tapShade:function(e){
        if(!(e.target instanceof Image) && e.target.className.indexOf('entry')===-1){
            this.isShow=false;
            document.body.classList.remove('swiper-slide')
        }
    }
  },
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
  margin-bottom:3%;
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
    width:48.5%;
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
</style>
