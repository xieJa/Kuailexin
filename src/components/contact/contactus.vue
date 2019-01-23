<template>
  <div class="contactus">
    <div class="intro">{{list.Data1}}</div>
    <div v-html="list.Content"></div>
    <div class="here clearfix">
      <h3>我们在这里</h3>
    <div class="here-info">
      <div class="title">上海斗石餐饮管理有限公司</div>
      <div class="here-inner" v-html="list.Data3" style="white-space:pre;"></div>
      <div class="share">        
        <dd class="bdsharebuttonbox" data-tag="share_1">         
          <a class="bds_tsina" data-cmd="tsina"><img src="@/assets/sina.png" data-cmd="tsina"></a>
          <a class="bds_weixin iconfont icon-weixin" data-cmd="weixin"></a>
        </dd>
      </div>
      <div class="pay">
        <div class="title">付款方式</div>
        <div class="here-inner" v-html="list.Data5" style="white-space:pre;"></div>
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
      list:[],
      distance: ""
    };
  },
  created:function(){
    let that = this;
    this.$axios.get("/ajaxdata.aspx?Action=memoinfo&Type=联系方式")
    .then(function(res){
      that.list = res.data.list[0]
      that.$nextTick(function(){
        that.mapNew();
        that.share();
      })
    })   
  },
  methods:{
    mapNew:function(){
      let that= this
      // 百度地图API功能
      var map = new BMap.Map("companymap");
      var point = new BMap.Point(121.337775, 31.243044);
      map.centerAndZoom(point,12);
      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint(that.list.Data2, function(point){
        if (point) {
          map.centerAndZoom(point, 16);
          map.addOverlay(new BMap.Marker(point));
        }else{
          map.centerAndZoom(new BMap.Point(121.337775, 31.243044), 16);
          map.addOverlay(new BMap.Point(121.337775, 31.243044));
          console.log(that.list.Data2,"您选择地址没有解析到结果!");          
        }
      }, "上海市");
      map.enableScrollWheelZoom(true);
    },
    share: function() {     
      let bdPic = '';      
      window._bd_share_config = {
        common: {
          bdText: "",
          bdDesc: "",
          bdUrl: window.location.href,
          bdPic: bdPic
        },
        share: [
          {
            bdSize: 16
          }
        ]
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=" +
        ~(-new Date() / 36e5);
      document.body.appendChild(s);
    }
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
  color:#7f7f7f;
  background:none;
  margin:0;
  padding:0;
  margin-right: 15px;
  margin-top:20px;
  font-size:26px;
  line-height: 26px;

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
      width:calc(100% - 20px);
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
