<template>
  <div class="Credit">
    <div class="description">
      <p>上海斗石餐饮管理有限公司于2008年正式成立，公司注册资本为1000万元，“快乐星汉堡”是斗石餐饮集团旗下的明星品牌，2010年受上海世博会特邀参展的国内知名品牌。</p>
      <p>快乐星汉堡（KDS BURGER）凭借数年来的稳扎稳打、精益求精，获得了诸多荣誉和加盟商、消费者的口碑。快乐星以美式高品质西式快餐为卖点，主要经营市场流行的多种系列西式餐饮美食。其中，明星产品为快乐鸡腿堡、黄金脆皮鸡、招牌奶茶、脆皮手枪腿等，定期还有新品上市。</p>
    </div>
    <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="title">{{item.Title}}</div>
          <a :href="item.Url" target="_blank">查看网站>></a>
          <div class="img">
            <img :src="item.Image" alt="">
          </div>
        </li>        
    </ul>
  </div>
</template>

<script>
export default {
  name: "Credit",
  data() {
    return {
      list:[]
    };
  },
  created:function(){
    let that = this;
    this.$axios.get("/ajaxdata.aspx?Action=list&Object=BrandCredit&pageIndex=1&pageSize=100")
    .then(function(res){
      console.log(res)
      that.list=res.data.list
      
    })
  }
};
</script>

<style scoped>
.Credit {
  margin: 40px 0;
}
.description p{
  text-indent:2em;
  line-height: 30px;
}
.Credit ul{
  margin-top:50px;
  border-top:1px solid #cfcfcf;
}
.Credit li{
  text-align: center;
  margin-top:40px;
}
.Credit li .title{
  font-size:18px;
  padding:10px 0;
  font-weight: bold;
}
.Credit li a{
  font-size:18px;
  color:#47a5ff;
  text-decoration: underline;
  background:url(~@/assets/site.png) no-repeat left center;
  padding-left:25px;
}
.Credit li .img{
  margin:25px 0;
}
.Credit li a img{

}
</style>
