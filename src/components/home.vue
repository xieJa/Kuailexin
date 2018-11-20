<template>
  <div class="home">
  	<div class="swiper-container home-banner">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><img src="../assets/banner01.jpg"></div>
	        <div class="swiper-slide"><img src="../assets/banner01.jpg"></div>
	        <div class="swiper-slide"><img src="../assets/banner01.jpg"></div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>	    
	</div>
	<div class="layer clearfix relative">
		<div class="cover">
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
				</li>
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
				</li>
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
				</li>
			</ul>
		</div>		
		<div class="modifying modifying01"><img src="../assets/modifying_01.png"></div>
		<div class="modifying modifying02"><img src="../assets/modifying_02.png"></div>
	</div>
  </div>
</template>

<script>
export default {
  	name: 'home',
	data:function() {
		return {
		 
		}    
	},
	mounted:function(){
	    new this.$Swiper ('.swiper-container', {
	    loop: true,
	    // 如果需要分页器
	    pagination: {
	    	el:'.swiper-pagination',
	    	clickable:true
	    }
	  })
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
