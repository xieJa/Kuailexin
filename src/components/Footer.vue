<template>
  <div class="footer bg-gray clearfix">
  	<div class="cover">
  		<div class="footer-inner clearfix">
  			<div class="footer-l">
		  		<div class="ft-logo"><img src="../assets/logo.png"></div>
		  		<div class="ft-text"><b>联系地址：</b>上海市嘉定区金沙江西路1555弄35号705室</div>
		  		<div class="ft-text"><b>联系电话：</b><span class="red">400-035-2688</span></div>
		  		<div class="qr-code"><img src="../assets/qrcode.png"></div>
		  	</div>
		  	<div class="footer-r"  v-if="!this.$M">
		  		<dl>
		  			<dt>关于我们</dt>
		  			<dd>
		  				<router-link to="/about/公司简介" >公司简介</router-link>
						<router-link to="/about/企业愿景" >企业愿景</router-link>
						<router-link to="/about/发展历程" >发展历程</router-link>
						<router-link to="/about/体系建设" >体系建设</router-link>
						<router-link to="/about/优秀团队" >优秀团队</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>新鲜美食</dt>
		  			<dd>
		  				<router-link :to="{path:'/Product',query:{name:'新品动态'}}">新品动态</router-link>
		  				<router-link v-for="item in loadPro" :key="item.Id" :to="{path:'/Product',query:{name:item.Title,id:item.Id}}">{{item.Title}}</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>品牌形象</dt>
		  			<dd>
		  				<router-link :to="{path:'/brand',query:{name:'店面规划'}}" >店面规划</router-link>
						<router-link :to="{path:'/brand',query:{name:'我们的店'}}" >我们的店</router-link>
						<router-link :to="{path:'/brand',query:{name:'卡通形象'}}" >卡通形象</router-link>
						<router-link :to="{path:'/brand',query:{name:'品牌VI'}}" >品牌VI</router-link>
						<router-link :to="{path:'/brand',query:{name:'品牌IP'}}" >品牌IP</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>营销活动</dt>
		  			<dd>
		  				<router-link :to="{path:'/market/Marketing',query:{name:'新品营销',Object:'NewProductMarketing'}}" >新品营销</router-link>
						<router-link :to="{path:'/market/festivalMarket',query:{name:'节日营销',Object:'HolidayMarketing'}}" >节日营销</router-link>
						<router-link :to="{path:'/market/Marketing',query:{name:'日常营销',Object:'DailyMarketing'}}">日常营销</router-link>
						<router-link :to="{path:'/market',query:{name:'微信点餐'}}" >微信点餐</router-link>
						<router-link :to="{path:'/market',query:{name:'外卖运营'}}" >外卖运营</router-link>
						<a href="https://weibo.com/hanbaodian?topnav=1&wvr=6&topsug=1" target="_blank">晒！微博</a>
						<router-link :to="{path:'/market/trill',query:{name:'嗨！抖音'}}" >嗨！抖音</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>加盟服务</dt>
		  			<dd>
		  				<router-link :to="{path:'/server/Credit',query:{name:'品牌资信'}}" >品牌资信</router-link>
						<router-link :to="{path:'/server',query:{name:'如何选择'}}" >如何选择</router-link>
						<router-link :to="{path:'/server',query:{name:'加盟流程'}}" >加盟流程</router-link>
						<router-link :to="{path:'/server',query:{name:'在您身边'}}" >在您身边</router-link>
						<router-link :to="{path:'/server/program',query:{name:'加盟方案'}}" >加盟方案</router-link>
						<router-link :to="{path:'/server/example',query:{name:'装修指导'}}" >装修指导</router-link>
						<router-link :to="{path:'/server/joinIn',query:{name:'申请加盟'}}" >申请加盟</router-link>
						<router-link :to="{path:'/server/Train',query:{name:'培训系统'}}" >培训系统</router-link>
						<router-link :to="{path:'/server/FAQ',query:{name:'常见问题'}}" >常见问题</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>新闻资讯</dt>
		  			<dd>
		  				<router-link :to="{path:item.Title=='成功案例'?'/case':'/news',query:{Id:item.Id}}"  v-for="(item,index) in newNav" :key="index">{{item.Title}}</router-link>	  				
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>联系我们</dt>
		  			<dd>
		  				<router-link :to="{path:'/contact',query:{name:'联系我们'}}" >联系我们</router-link>
						<router-link :to="{path:'/contact',query:{name:'在线留言'}}" >在线留言</router-link>
						<router-link :to="{path:'/contact',query:{name:'投诉建议'}}" >投诉建议</router-link>	  				
		  			</dd>
		  		</dl>
		  	</div>
  		</div>
	  	<div class="website-records">
	  		<a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank"><img src="../assets/cert01.jpg"></a>
	  		<a href="http://www.12377.cn/" target="_blank"><img src="../assets/cert02.jpg"></a>
	  		<a href="http://www.cyberpolice.cn/wfjb/" target="_blank"><img src="../assets/cert03.jpg"></a>
	  		<a href="http://txjy.syggs.mofcom.gov.cn/index.do?method=entpsearch" target="_blank"><img src="../assets/cert04.jpg"></a>
	  		<a href="http://www.noagroup.org/" target="_blank"><img src="../assets/cert05.jpg"></a>
	  		<a href="http://www.cxqycx.cn/AllCompanys.aspx?type=jingque&str=上海斗石餐饮管理有限公司" target="_blank"><img src="../assets/cert06.jpg"></a>
	  		<a href="http://www.sgs.gov.cn/shaic/index_new.html" target="_blank"><img src="../assets/cert07.jpg"></a>
	  	</div>
  	</div>
  	<div class="copyright">上海斗石餐饮管理有限公司 沪公网安备31010702003802号 沪ICP备11021478号      Powered by <a href="http://www.by1983.com/" target="_bland">BEIYU</a>	
  	</div>
  	<silde-float></silde-float>
  </div>
</template>

<script>
import sildeFloat from './SildeFloating.vue'
export default {
  name: 'Footer',
  data () {
    return {
      loadPro: [],
      newNav: []
    }
  },
  created:function(){
	  this.loadProParent()
  },
  methods:{
	  loadProParent:function(){
		let that = this;
		this.$axios.get("/ajaxdata.aspx?Action=typelist&Parent=产品分类")
		.then(function(res){
			that.loadPro = res.data.list;
		});
		this.$axios.get("/ajaxdata.aspx?Action=typelist&Parent=新闻资讯分类")
		.then(function(res){
			that.newNav = res.data.list
		})
		
	  }
  },
  components:{
  	'sildeFloat':sildeFloat
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{padding:50px 0 0 0;}
.footer-l{float: left;}
.ft-logo{margin-bottom: 10px;}
.ft-logo img{max-width: 270px;}
.ft-text{color: #666;line-height: 24px;}
.ft-text b{color: #333}
.ft-text span{font-size: 18px;}
.qr-code img{max-width: 300px;width:70%;margin-right: 20px;}
.footer-r{float: right;}
.footer-r dl{float: left;margin-left: 40px;}
.footer-r dt{font-size: 16px;margin-bottom: 20px;}
.footer-r a{display: block;color:#666666;line-height: 26px;}
.website-records{text-align: center;padding:50px 0 30px 0;}
.website-records a{margin:0 10px;}
.copyright{text-align: center;line-height: 45px;background: #111111;color: #fff;}
.copyright a{color: #fff;}

@media screen and (max-width:1000px){
	.footer{
		border-top:.2rem solid #f4f4f4;
		padding-top:30px;
	}
	.footer-l{
		float:none;
		text-align: center;
		padding:0 10px;
		font-size:.24rem
	}
	.website-records{
		display:flex;
		flex-wrap: wrap;
		justify-content:center;
		box-sizing: border-box;
		padding:30px 10px;
	}
	.website-records a{
		max-width:25%;
		display: block;
		margin:0;
		padding:5px;
		box-sizing: border-box;
	}
	.copyright{
		line-height: 1.5;
		font-size:.18rem;
		padding:10px;
	}
}
</style>
