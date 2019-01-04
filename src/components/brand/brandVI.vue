<template>
  <div class="brandVI">
      <ul>
        <li class="wow bounceInLeft"><img src="@/assets/vi1.jpg" alt=""></li>
        <li class="wow bounceInRight"><img src="@/assets/vi1.jpg" alt=""></li>
        <li class="wow bounceInLeft"><img src="@/assets/vi1.jpg" alt=""></li>
        <li class="wow bounceInRight"><img src="@/assets/vi1.jpg" alt=""></li>
      </ul>
      <a href="#" class="moreBtn">加载更多</a>
  </div>
</template>

<script>
export default {
  name: "brandVI",
  data() {
    return {
    };
  },
  mounted:function(){         	
       this.$nextTick(function(){
           new this.$WOW.WOW().init()
       })      
  }
};
</script>

<style scoped>
.brandVI{
  margin-top:40px;
  text-align: center;
}
.brandVI li{
  margin-bottom: 30px;
  padding-bottom:30px;
  border-bottom:1px solid #d6d6d6;
}
</style>
