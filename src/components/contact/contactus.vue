<template>
  <div class="contactus">
    <div class="intro">我们位于上海虹桥枢纽北，距离虹桥火车站约5公里({{distance}}米)，属于大虹桥板块—北虹桥商务区</div>
    <div id="allmap"></div>
    <div class="here clearfix">
      <h3>我们在这里</h3>
    <div class="here-info">
      <div class="title">上海斗石餐饮管理有限公司</div>
      <div class="here-inner">
        <p>地址：上海市嘉定区金沙江西路1555弄35号705室</p>
        <p>邮政编码：201800</p>
        <p>网址：http://www.k2688.com</p>
        <p>服务热线：021-51853656</p>
      </div>
      <div class="share">
        <a href="#"><img src="@/assets/sina.png" alt=""></a>
        <a href="#"><i class="iconfont icon-weixin"></i></a>
      </div>
      <div class="pay">
        <div class="title">付款方式</div>
        <div class="here-inner">
          <p>开户行: 中国农业银行(上海慧创分理处) http://www.abchina.com</p>
          <p>卡 号: 03827 5300 4000 9952</p>
          <p>户 名: 上海斗石餐饮管理有限公司</p>
        </div>
      </div>
    </div>
    <div id="companymap"></div>
    </div>
    <div class="tel">
      <p>咨询热线：400-035-2688</p>
      <p>公司总部电话：021-60950956</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactus",
  data() {
    return {
      distance: ""
    };
  },
  mounted: function() {
    // 百度地图两点之间的距离API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(121.334433, 31.221628), 14); //初始化地图,设置城市和地图级别。
    var pointA = new BMap.Point(121.337775, 31.243044); // 创建点坐标A--上海西郊商务区
    var pointB = new BMap.Point(121.3279, 31.20033); // 创建点坐标B--虹桥火车站
    this.distance = map.getDistance(pointA, pointB).toFixed(2); //获取两点距离,保留小数点后两位
    var polyline = new BMap.Polyline([pointA, pointB], {
      strokeColor: "blue",
      strokeWeight: 6,
      strokeOpacity: 0.5
    }); //定义折线
    map.addOverlay(polyline); //添加折线到地图上
    map.disableDragging();
    // 公司地址地图
    
    //普通地图展示
    var companymap = new BMap.Map("companymap");
    companymap.centerAndZoom(pointA, 19);     
    var marker = new BMap.Marker(pointA);
    companymap.addOverlay(marker);  
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
    companymap.enableScrollWheelZoom(true);
  }
};
</script>

<style scoped>
.contactus {
  margin: 40px 0;
}
.contactus .intro {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
#allmap {
  width: 100%;
  height: 520px;
  overflow: hidden;
  margin-top: 40px;
}
.here h3 {
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  font-weight: bold;
}
.here-info {
  float: left;
  width: 40%;
  line-height: 30px;
}
.here-info .title {
  font-size: 18px;
  font-weight: bold;
  margin: 50px 0 20px 0;
}
#companymap {
  float:right;
  width: 55%;
  height: 520px;
  overflow: hidden;
  margin-top: 40px;
}
.share a{
  display: inline-block;
  height:26px;
  margin-right: 15px;
  margin-top:20px;
}
.share i{
  font-size:26px;
  line-height: 26px;
  color:#7f7f7f;
}
.tel{
  padding:50px 0;
  text-align: center;
  font-size:24px;
  color:#c8161e;
  line-height: 2;
}
@media screen and (max-width:1000px){
    .contactus .intro{
        font-size:.3rem;
    }
    #allmap{
      width:calc(100% - 20px);
      margin:0 10px;
      height:6rem;
    }
    .here{
      padding:10px;
      display: table;
    }
    .here-info{
      float:none;
      width: 100%;
      display: table-footer-group;
    }
    #companymap{
      width:100%;
       height:6rem;
       display: table-header-group;
    }
}
</style>
