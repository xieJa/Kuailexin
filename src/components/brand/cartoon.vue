<template>
  <div class="cartoon">
      <div class="describe">主色调为红、黄颜色为主要色彩，贴合汉堡的产品特色，图形中的卡通形象戴了着汉堡形状的帽子，更加的贴近汉堡的主题，造型可爱，色彩明快，体现了快餐的行业特征，充分传递了“味行天下，快乐你我”的品牌理念。</div>
      <div class="brand-style">
          <h2>品牌形象</h2>
          <ul class="clearfix">            
            <li v-for="(item,index) in list" :key="index">
              <div class="brand-logo"><img :src="item.Image" alt=""></div>
              <div class="brand-intro">
                  <b>{{item.Title}}</b>
                  <p>{{item.Description}}</p>
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
      list:[],
      isShow:''
    };
  },
  created:function(){
    let that =this;
    this.$axios.get("/ajaxdata.aspx?Action=list&Object=cartoon&pageIndex=1&pageSize=100")
    .then(function(res){
      that.list = res.data.list
    })
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
