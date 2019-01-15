<template>
  <div class="Silde-float">
  	<div class="silde-contact" v-if="!this.$M">
  		<ul>
  			<li><a href="#"><i class="iconfont icon-kefu"></i><p>在线咨询</p></a></li>
  			<li><a href="#"><i class="iconfont icon-qq"></i><p>QQ咨询</p></a></li>
  			<li><a href="javascript:;"><i class="iconfont icon-dianhua"></i><p>咨询电话</p><span>400-035-2688</span></a></li>
  			<li><a href="javascript:;"><img src="../assets/qrcode.jpg"><p>扫码咨询</p></a></li>
  		</ul>
  	</div>
	<transition  name="fade">
		<div class="shade"  v-if="this.$M"  v-show="message"></div>
	</transition>
  	<div class="message-board" v-show="message">
  		<div class="message-board-inner">
  			<div class="cover relative">
  				<i class="iconfont icon-guanbi" @click="messagePop()"></i>
  				<div class="message-board-l">
  					<p>唯有快人一步,</p>
  					<span class="red">点击留言，才能抢占无限商机!</span>
  				</div>
  				<div class="message-board-r clearfix">
  					<span class="red">全国统一加盟热线：400-035-2688</span>
  					<form @submit.prevent="formSubmit($event)">
  						<div class="input-box"><label><span>姓名</span><input type="text" name="name" v-model="name" autocomplete="off"/></label></div>
  						<div  class="input-box"><label><span>电话</span><input type="text" name="phone" v-model="phone" autocomplete="off"/></label></div>
  						<input type="submit" name="在线预约" value="在线预约" />
  					</form>
  				</div>
  			</div>  			
  		</div>
  	</div>
  	<div class="fixedtool">
  		<div class="a-tool message-btn" @click="messagePop()" v-show="!message"><i class="iconfont icon-liuyan"></i><p>给我们留言</p></div>
  	<transition name="fade">
  		<div class="a-tool top-back" @click="scrollToTop()" v-show="isTopBack"><i class="iconfont icon-up"></i></div>  		
  	</transition>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Silde-float',
  data () {
    return {
      isTopBack:false,
      message:true,
      name:'',
      phone:''
    }
  },
  created:function(){
	  if(sessionStorage.message === 'false'){
		  this.message=false
	  }
  },
  mounted:function(){
  	window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
  	handleScroll:function(){
  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  		if(scrollTop>600){
  			this.isTopBack = true
  		}else{
  			this.isTopBack = false
  		}
  	},
  	scrollToTop:function(){
  		var timeOut=setInterval(function(){
  			if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
				window.scrollBy(0,-100);
			}else{
				clearInterval(timeOut);
			}
  		},10);  		
  	},
  	formSubmit:function(e){
  		console.log(this.name,this.phone)
  	},
  	messagePop:function(){
  		sessionStorage.message=this.message=!this.message
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.silde-contact{position: fixed;right:0;top:50%;transform: translateY(-50%);z-index: 999;}
.silde-contact li{margin:2px 0;}
.silde-contact a{display: block;text-align: center;width:86px;height:86px;background: rgba(0,0,0,.8);color: #fff;font-size: 12px;display: flex;flex-direction: column;justify-content: center;align-items:center;position: relative;transition: all .3s;}
.silde-contact a span{position: absolute;right:0;white-space:nowrap;padding:0 20px;display: block;height:100%;line-height: 86px;background:#c8161e;font-size: 20px;letter-spacing: 3px;transform: translateX(100%);transition: all .3s;z-index: -1}
.silde-contact a:hover{background:#c8161e;}
.silde-contact a:hover span{transform: translateX(-86px);}
.silde-contact .iconfont{font-size: 30px;}
.silde-contact img{width: 60px;}
.message-board{height:170px;position: fixed;left:0;bottom:0;z-index: 998;width:100%;background:rgba(0,0,0,.85);}
.message-board-inner{height:170px;}
.message-board-inner .cover{height:100%;}
.message-board-inner .icon-guanbi{position:absolute;display:block;right:0;top:10px;line-height:100%;background:#fff;border-radius: 50%;padding:5px;cursor: pointer;}
.message-board-l{line-height: 54px;position: absolute;top:50%;transform:translateY(-50%);}
.message-board-l p{font-size: 36px;color: #fff;}
.message-board-inner span{font-size: 24px;}
.message-board-r{line-height: 54px;position: absolute;top:50%;right:40px;transform:translateY(-50%);text-align: right;}
.message-board-r .input-box{float:left;}
.message-board-r label{display:table;line-height:40px;width:250px;padding-right:10px;height:42px;border:1px solid #fff;color:#fff;margin-right: 30px;}
.message-board-r label span{display:table-cell;font-size: 16px;padding:0 10px;width: 1%;white-space: nowrap;}
.message-board-r label input{display:table-cell;border:0;background: none;outline: none;width: 100%;color: #fff;font-size: 16px;}
.message-board-r input[type="submit"]{float:left;padding:0 30px;border:0;height:44px;background: #c8161e;font-size: 18px;color:#fff;}
.fixedtool .a-tool{color:#fff;text-align: center;height:44px;line-height: 44px;background:#676767;cursor: pointer;z-index: 999;position: fixed;right:44px;white-space: nowrap;transform: translateX(100%);transition: all .3s;}
.fixedtool .iconfont{width:44px;height:44px;display: inline-block;line-height: 44px;float: left;}
.fixedtool p{float:left;padding-right:10px;}
.top-back{bottom:0;}
.top-back .iconfont{font-size:30px;}
.message-btn{bottom:44px;}
.message-btn .iconfont{font-size:20px;}
.fixedtool .a-tool:hover{transform: translateX(44px);}
@media screen and (max-width:1000px){
	.message-board{
		background:#fff;
		height:auto;
		width:90%;
		left:5%;
		top:20%;
		bottom:auto;
		z-index: 1000;;
	}
	.message-board-inner{
		padding:20px;
		height:auto;
	}
	.message-board-l,.message-board-r{
		position:inherit;
		transform:translateY(0);
		line-height: inherit;
		right:auto;
	}
	.message-board-l p{
		font-size:.36rem;
		color:#000000;
	}
	.message-board-inner span{
		font-size:.24rem;
	}
	.message-board-r{
		position: relative;
		padding-bottom:30px;
	}
	.message-board-r label{
		border-color:#dfdfdf;
		color:#666666;
		width:100%;
		margin:0;
		margin-top:10px;
		box-sizing: border-box;		
	}
	.message-board-r label span{
		font-size: 14px;
	}
	.message-board-r label input{
		color:#333;
		font-size: 14px;
		line-height: 40px;
	}
	.message-board-r input[type="submit"]{
		width:100%;
		padding:0;
		margin-top:10px;
	}
	.message-board-r span.red{
		position: absolute;
		left:0;
		bottom:0;
		width:100%;
		text-align: center;
	}
	.message-board-inner .icon-guanbi{
		top:auto;
		right:50%;
		transform: translateX(50%);
		bottom:-60px;
	}
	.fixedtool .a-tool{
		background:rgba(0,0,0,.2);
	}
}
</style>
