<template>
  <div class="footer bg-gray clearfix">
  	<div class="cover">
  		<div class="footer-inner clearfix">
  			<div class="footer-l">
		  		<div class="ft-logo"><img src="../assets/logo.png"></div>
		  		<div class="ft-text"><b>联系地址：</b>上海市嘉定区金沙江西路1555弄35号705室</div>
		  		<div class="ft-text"><b>联系电话：</b><span class="red">021-51853656</span></div>
		  		<div class="qr-code"><img src="../assets/qrcode.jpg"><img src="../assets/qrcode.jpg"></div>
		  	</div>
		  	<div class="footer-r">
		  		<dl>
		  			<dt>关于我们</dt>
		  			<dd>
		  				<router-link to="/">公司简介</router-link>
		  				<router-link to="/">企业愿景</router-link>
		  				<router-link to="/">核心文化</router-link>
		  				<router-link to="/">发展历程</router-link>
		  				<router-link to="/">组织架构</router-link>
		  				<router-link to="/">优秀团队</router-link>
		  				<router-link to="/">企业责任</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>新鲜美食</dt>
		  			<dd>
		  				<router-link to="/">新品动态</router-link>
		  				<router-link to="/">明星产品</router-link>
		  				<router-link to="/">经典主食</router-link>
		  				<router-link to="/">精美小食</router-link>
		  				<router-link to="/">时尚饮品</router-link>
		  				<router-link to="/">超值套餐</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>品牌形象</dt>
		  			<dd>
		  				<router-link to="/">店面规划</router-link>
		  				<router-link to="/">装修效果</router-link>
		  				<router-link to="/">加盟商风采</router-link>
		  				<router-link to="/">卡通形象</router-link>
		  				<router-link to="/">品牌VI</router-link>
		  				<router-link to="/">品牌IP</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>营销活动</dt>
		  			<dd>
		  				<router-link to="/">新品营销</router-link>
		  				<router-link to="/">节日营销</router-link>
		  				<router-link to="/">日常营销</router-link>
		  				<router-link to="/">微信点餐</router-link>
		  				<router-link to="/">外卖运营</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>加盟服务</dt>
		  			<dd>
		  				<router-link to="/">企业荣誉</router-link>
		  				<router-link to="/">如何选择</router-link>
		  				<router-link to="/">加盟流程</router-link>
		  				<router-link to="/">市场口碑</router-link>
		  				<router-link to="/">加盟方案</router-link>
		  				<router-link to="/">装修指导</router-link>
		  				<router-link to="/">在线申请</router-link>
		  				<router-link to="/">培训系统</router-link>
		  				<router-link to="/">服务指导</router-link>
		  				<router-link to="/">常见问题</router-link>
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>新闻资讯</dt>
		  			<dd>
		  				<router-link to="/">品牌新闻</router-link>
		  				<router-link to="/">成功案例</router-link>		  				
		  			</dd>
		  		</dl>
		  		<dl>
		  			<dt>联系我们</dt>
		  			<dd>
		  				<router-link to="/">联系方式</router-link>
		  				<router-link to="/">人才招聘</router-link>		  				
		  				<router-link to="/">在线留言</router-link>		  				
		  				<router-link to="/">考察预约</router-link>		  				
		  				<router-link to="/">投诉建议</router-link>		  				
		  			</dd>
		  		</dl>
		  	</div>
  		</div>
	  	<div class="website-records">
	  		<a href="#"><img src="../assets/cert01.jpg"></a>
	  		<a href="#"><img src="../assets/cert02.jpg"></a>
	  		<a href="#"><img src="../assets/cert03.jpg"></a>
	  		<a href="#"><img src="../assets/cert04.jpg"></a>
	  		<a href="#"><img src="../assets/cert05.jpg"></a>
	  		<a href="#"><img src="../assets/cert06.jpg"></a>
	  		<a href="#"><img src="../assets/cert07.jpg"></a>
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
      msg: 'Welcome to Your Vue.js App'
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
.ft-logo{margin-bottom: 30px;}
.ft-logo img{max-width: 270px;}
.ft-text{color: #666;line-height: 24px;}
.ft-text b{color: #333}
.ft-text span{font-size: 18px;}
.qr-code{margin-top: 20px;}
.qr-code img{max-width: 30%;margin-right: 20px;}
.footer-r{float: right;}
.footer-r dl{float: left;margin-left: 40px;}
.footer-r dt{font-size: 16px;margin-bottom: 20px;}
.footer-r a{display: block;color:#666666;line-height: 26px;}
.website-records{text-align: center;padding:50px 0 30px 0;}
.website-records a{margin:0 10px;}
.copyright{text-align: center;line-height: 45px;background: #111111;color: #fff;}
.copyright a{color: #fff;}
</style>
