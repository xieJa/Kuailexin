<template>
  <div class="home">
  	<div class="swiper-container home-banner">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><img src="../assets/banner01.jpg"></div>
	        <div class="swiper-slide"><img src="../assets/banner01.jpg"></div>
	        <div class="swiper-slide"><img src="../assets/banner01.jpg"></div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination banner-swiper-pagination"></div>	    
	</div>
	<div class="layer clearfix relative">
		<div class="cover zx-cover">
			<div class="mod-hd zx-hd"><h2>只做一件事，锲而不舍、金石可镂</h2><p>10年来，快乐星汉堡只做一件事，专注于西式快餐研发，每种汉堡都经过千锤百炼、精益求精，为的就是做出更美味、更标准、更安全、更卫生的产品。我们研发对每一个食材都进行精挑细选，对每种产品都进行精心烹饪</p></div>
			<ul class="zx-hb-bd">
				<li>
					<div class="flipper">
						<img src="../assets/zx_hb01.jpg">
						<div class="zx-hb-inner">
							<div class="zx-hb-item">
								<div class="zx-hb-hd">新品动态</div>
								<p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
					</div>
					<div class="zx-bt">新品动态</div>
				</li>
				<li>
					<div class="flipper">
						<img src="../assets/zx_hb01.jpg">
						<div class="zx-hb-inner">
							<div class="zx-hb-item">
								<div class="zx-hb-hd">精美小食</div>
								<p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
					</div>
					<div class="zx-bt">精美小食</div>
				</li>
				<li>
					<div class="flipper">
						<img src="../assets/zx_hb01.jpg">
						<div class="zx-hb-inner">
							<div class="zx-hb-item">
								<div class="zx-hb-hd">明星产品</div>
								<p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
					</div>
					<div class="zx-bt">明星产品</div>
				</li>
			</ul>
		</div>		
		<div class="modifying modifying01"><img src="../assets/modifying_01.png"></div>
		<div class="modifying modifying02"><img src="../assets/modifying_02.png"></div>
	</div>
	<div class="layer clearfix relative bg-gray">
		<div class="cover ad-propaganda-cover">
			<div class="swiper-container ad-propaganda">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
						<div class="ad-pic"><img src="../assets/ad_01.jpg"></div>
						<div class="ad-inner">
							<div class="ad-bt">快乐星昔果乐</div>
							<p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
							<router-link to="">查看详情  ></router-link>
						</div>
			        </div>
			        <div class="swiper-slide">
						<div class="ad-pic"><img src="../assets/ad_01.jpg"></div>
						<div class="ad-inner">
							<div class="ad-bt">快乐星昔果乐</div>
							<p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
							<router-link to="">查看详情  ></router-link>
						</div>
			        </div>
			        <div class="swiper-slide">
						<div class="ad-pic"><img src="../assets/ad_01.jpg"></div>
						<div class="ad-inner">
							<div class="ad-bt">快乐星昔果乐</div>
							<p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
							<router-link to="">查看详情  ></router-link>
						</div>
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination propaganda-swiper-pagination"></div>	   
			    <div class="swiper-button-prev swiper-button-black propaganda-prev"></div>
   				<div class="swiper-button-next swiper-button-black propaganda-next"></div>
			</div>
		</div>		
		<div class="modifying modifying03"><img src="../assets/modifying_03.png"></div>
	</div>
	<div class="ad-activity">
		<img src="../assets/ad_02.jpg" alt="">
	</div>
	<div class="layer clearfix relative">
		<div class="cover yx-cover">
			<div class="mod-hd yx-hd"><h2>服务每一人，一丝不苟、满腔热情</h2><p>2008年快乐星汉堡发展进入了新的发展征程，我们通过用心学习，努力完善服务体系，一丝不苟坚持前行，践行用心服务每个人的精神</p></div>
			<ul class="yx-server clearfix">
				<li><img src="../assets/server_icon1.png"><span>微信点餐</span><p>通过微信自助点餐更加方便快捷，建立属于自己的消费者社群</p></li>
				<li><img src="../assets/server_icon2.png"><span>外卖运营</span><p>深度对接，专业的外卖的接单系统自动接收第三方平台订单</p></li>
				<li><img src="../assets/server_icon3.png"><span>加盟方案</span><p>让每一位加盟快乐星汉堡店的加盟商，都能更加轻松经营，助力加盟者成就梦想</p></li>
				<li><img src="../assets/server_icon4.png"><span>如何选择</span><p>精心挑选每一个食材，精心烹饪每一种产品，通过专业、科学、严格的制作工艺而成</p></li>
			</ul>
		</div>		
		<div class="modifying modifying04"><img src="../assets/modifying_04.png"></div>
		<div class="modifying modifying05"><img src="../assets/modifying_05.png"></div>
	</div>
	<div class="layer clearfix relative bg-gray">
		<div class="cover campaign-cover">
			<div class="cover-hd clearfix">
				<h2 class="cover-hd-title">营销经典</h2>
				<div class="cover-hd-r">
					<span class="tab-btn" :class="campaignTab=='1'?'cur':''" data-num="1" @click="campaignTabTrigger($event)">日常营销</span>
					<span class="tab-btn" :class="campaignTab=='2'?'cur':''" data-num="2" @click="campaignTabTrigger($event)">新品营销</span>
					<span class="tab-btn" :class="campaignTab=='3'?'cur':''" data-num="3" @click="campaignTabTrigger($event)">节日营销</span>
				</div>
			</div>
			<ul class="campaign clearfix" v-show="campaignTab=='1'">
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新的口味，体验不一样的好...</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">官宣！！快乐星汉堡3款新...</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">餐饮加盟盛典：快乐星...</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
			</ul>
			<ul class="campaign clearfix" v-show="campaignTab=='2'">
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
			</ul>
			<ul class="campaign clearfix" v-show="campaignTab=='3'">
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
				<li>
					<div class="campaign-item">
						<div class="campaign-item-pic"><img src="../assets/ad_03.jpg"></div>
						<div class="campaign-item-bt">新品发布会</div>
						<div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
						<div class="campaign-item-btn"><router-link to="">查看详情</router-link></div>
					</div>
				</li>
			</ul>
		</div>		
		<div class="modifying modifying06"><img src="../assets/modifying_06.png"></div>
	</div>
	<div class="layer clearfix relative bg-black">
		<div class="cover fx-cover">
			<div class="mod-hd fx-hd"><h2>做一个让消费者放心的社会企业</h2><p>“斗”“石”在古代是度量衡单位，寓意着公平、公正。“斗”更是一种精神，勇往直前，“石”是山之基，更是踏实、诚信的象征。“食”人之根，命之源，斗石餐饮时刻都不敢怠慢</p></div>			
			<div class="cover-hd clearfix">
				<h2 class="cover-hd-title">成功案例</h2>
				<div class="cover-hd-r">
					<router-link to="/">查看全部   ></router-link>
				</div>
			</div>	
			<div class="swiper-container fx-cases">
			    <div class="swiper-wrapper">
			    	<div class="swiper-slide">
			        	<img src="../assets/ad_04.jpg">
						<div class="fx-hb-inner">
							<div class="fx-hb-item">							
								<p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
			        </div>
			        <div class="swiper-slide">
			        	<img src="../assets/ad_05.jpg">
						<div class="fx-hb-inner">
							<div class="fx-hb-item">							
								<p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
			        </div>
			        <div class="swiper-slide">
			        	<img src="../assets/ad_04.jpg">
						<div class="fx-hb-inner">
							<div class="fx-hb-item">							
								<p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
			        </div>			      
			        <div class="swiper-slide">
			        	<img src="../assets/ad_05.jpg">
						<div class="fx-hb-inner">
							<div class="fx-hb-item">							
								<p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
			        </div>
			        <div class="swiper-slide">
			        	<img src="../assets/ad_04.jpg">
						<div class="fx-hb-inner">
							<div class="fx-hb-item">							
								<p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
			        </div>
			        <div class="swiper-slide">
			        	<img src="../assets/ad_05.jpg">
						<div class="fx-hb-inner">
							<div class="fx-hb-item">							
								<p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
								<router-link to="/"> 查看详情  ></router-link>
							</div>
						</div>
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination cases-swiper-pagination"></div>	    
			</div>		
		</div>		
		<div class="modifying modifying05"><img src="../assets/fx_bg.jpg"></div>
	</div>
	<div class="layer clearfix relative bg-gray">
		<div class="cover team-cover relative">			
			<div class="cover-hd clearfix">
				<h3 class="cover-hd-bt">优秀团队</h3>
				<p class="cover-hd-p">我们拥有一支结构完善优秀且高效的团队</p>
			</div>	
			<div class="swiper-container team-swiper">
			    <div class="swiper-wrapper">
			    	<div class="swiper-slide">
			    		<div class="team-portraits"><img src="../assets/ad_04.jpg"></div>		
			    		<div class="team-name">周云重</div>
			    		<div class="team-job">门店培训师</div>	        	
			    		<div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
						<router-link to="/">查看详情</router-link>
			        </div>
			        <div class="swiper-slide">
			    		<div class="team-portraits"><img src="../assets/team.png"></div>		
			    		<div class="team-name">周云重</div>
			    		<div class="team-job">门店培训师</div>	        	
			    		<div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
						<router-link to="/">查看详情</router-link>
			        </div>
			        <div class="swiper-slide">
			    		<div class="team-portraits"><img src="../assets/ad_04.jpg"></div>		
			    		<div class="team-name">周云重</div>
			    		<div class="team-job">门店培训师</div>	        	
			    		<div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
						<router-link to="/">查看详情</router-link>
			        </div>
			        <div class="swiper-slide">
			    		<div class="team-portraits"><img src="../assets/ad_04.jpg"></div>		
			    		<div class="team-name">周云重</div>
			    		<div class="team-job">门店培训师</div>	        	
			    		<div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
						<router-link to="/">查看详情</router-link>
			        </div>
			        <div class="swiper-slide">
			    		<div class="team-portraits"><img src="../assets/ad_04.jpg"></div>		
			    		<div class="team-name">周云重</div>
			    		<div class="team-job">门店培训师</div>	        	
			    		<div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
						<router-link to="/">查看详情</router-link>
			        </div>
			        
			    </div>			    
			</div>	
			<!-- 如果需要分页器 -->			    
		    <div class="swiper-button-prev swiper-button-black team-prev"></div>
			<div class="swiper-button-next swiper-button-black team-next"></div>   	
		</div>		
		<div class="modifying modifying07"><img src="../assets/modifying_07.png"></div>
	</div>
	<div class="layer clearfix relative">
		<div class="cover storefront-cover relative">			
			<div class="cover-hd clearfix">
				<h3 class="cover-hd-bt">店面规划</h3>
			</div>	
			<div class="storefront-intro">
				店面规划和设计是门店取得成功的基础。厨房结构，设备规划摆放流程对于操作和产出率和出餐速度是极大的影响，油烟机、空调和炸炉、烤箱和裹粉台的关系决定门店的能耗的高低及粉尘的溅落和漂浮，进而决定机器的使用寿命。吧台和厨房适宜的高度差决定了员工的状态和激情，也能更好的提高配单效率，吧台和门的距离有店面大小和客户心理叠加系数决定，餐厅位置摆放决定主动客户和被动客户的占比等
			</div>
			<ul class="storefront clearfix">
				<li><router-link to=""><img src="../assets/ad_06.jpg"></router-link></li>
				<li><router-link to=""><img src="../assets/ad_06.jpg"></router-link></li>
				<li><router-link to=""><img src="../assets/ad_06.jpg"></router-link></li>
				<li><router-link to=""><img src="../assets/ad_06.jpg"></router-link></li>
			</ul>
		</div>		
		<div class="modifying modifying08"><img src="../assets/modifying_08.png"></div>
	</div>
  </div>
</template>

<script>
export default {
  	name: 'home',
	data:function() {
		return {
		 	campaignTab:1,
		}    
	},
	mounted:function(){
	  new this.$Swiper ('.home-banner', {
	    loop: true,
	    // 如果需要分页器
	    pagination: {
	    	el:'.banner-swiper-pagination',
	    	clickable:true
	    }
	  });
	  new this.$Swiper ('.ad-propaganda', {
	    loop: true,
	    // 如果需要分页器
	    pagination: {
	    	el:'.propaganda-swiper-pagination',
	    	clickable:true
	    },
	    navigation: {
	      nextEl: '.propaganda-next',
	      prevEl: '.propaganda-prev',
	    },
	  });
	  new this.$Swiper ('.fx-cases', {	  	
	    slidesPerView : 4,
	    slidesPerGroup : 4,
	    spaceBetween : 15,
	    // 如果需要分页器
	    pagination: {
	    	el:'.cases-swiper-pagination',
	    	clickable:true
	    },	    
	  });
	  new this.$Swiper ('.team-swiper', {
	    slidesPerView : 4,
	    slidesPerGroup : 4,
	    navigation: {
	      nextEl: '.team-next',
	      prevEl: '.team-prev',
	    },
	  });
	},
	methods:{
		campaignTabTrigger:function(e){
			this.campaignTab=e.target.dataset.num
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
