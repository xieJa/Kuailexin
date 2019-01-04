<template>
  <div class="cartoon">
      <div class="describe">主色调为红、黄颜色为主要色彩，贴合汉堡的产品特色，图形中的卡通形象戴了着汉堡形状的帽子，更加的贴近汉堡的主题，造型可爱，色彩明快，体现了快餐的行业特征，充分传递了“味行天下，快乐你我”的品牌理念。</div>
      <div class="brand-style">
          <h2>品牌形象</h2>
          <ul class="clearfix">
            <li>
              <div class="brand-logo"><img src="@/assets/logo1.png" alt=""></div>
              <div class="brand-intro">
                  <b>快乐星汉堡logo横向图</b>
                  <p>斗石学院在校少年快乐星小帮手</p>
              </div>
            </li>
            <li>
              <div class="brand-logo"><img src="@/assets/logo2.png" alt=""></div>
              <div class="brand-intro">
                  <b>快乐星汉堡logo横向图</b>
                  <p>斗石学院在校少年快乐星小帮手</p>
              </div>
            </li>
            <li>
              <div class="brand-logo"><img src="@/assets/logo3.png" alt=""></div>
              <div class="brand-intro">
                  <b>快乐星汉堡logo横向图</b>
                  <p>斗石学院在校少年快乐星小帮手</p>
              </div>
            </li>
            <li>
              <div class="brand-logo"><img src="@/assets/logo4.png" alt=""></div>
              <div class="brand-intro">
                  <b>快乐星汉堡logo横向图</b>
                  <p>斗石学院在校少年快乐星小帮手</p>
              </div>
            </li>
            <li>
              <div class="brand-logo"><img src="@/assets/logo5.png" alt=""></div>
              <div class="brand-intro">
                  <b>快乐星汉堡logo横向图</b>
                  <p>斗石学院在校少年快乐星小帮手</p>
              </div>
            </li>
            <li>
              <div class="brand-logo"><img src="@/assets/logo6.png" alt=""></div>
              <div class="brand-intro">
                  <b>快乐星汉堡logo横向图</b>
                  <p>斗石学院在校少年快乐星小帮手</p>
              </div>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Cartoon",
  data() {
    return {
      isShow:''
    };
  }
};
</script>

<style scoped>
.describe{
  text-align: center;
  padding:0 35px;
  margin-top:30px;
}

.brand-style h2{
  text-align:center;
  font-size:24px;
  color:#c51720;
  margin:60px 0;
}
.brand-style li{
  float:left;
  height:200px;
  width: 50%;
  position: relative;
  padding:40px 0;
}
.brand-logo{
  width: 50%;
  text-align: center;
  position: absolute;  
  left:0;
  top:50%;
  transform:translateY(-50%);
}
.brand-logo img{  
  max-height: 100%;
  max-width: 100%;
}
.brand-intro{
  position: absolute;
  width: 45%;
  top:50%;
  left:55%;
  transform:translateY(-50%)
}
.brand-intro b{
  font-size: 18px;
  padding-bottom: 10px;
  display: block;
}
</style>
