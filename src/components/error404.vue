<template>
  <div class="errorPage">
    <p class="tips">抱歉，您访问的页面不存在~</p>
    <p class="img"><img src="../assets/404.jpg" alt=""></p>
    <div class="cause">
      <p>可能的原因</p>
      <p>1、在地址栏输入了错误信息</p>
      <p>2、您点击的链接已失效或已更名</p>
      <p>有问题建议？请发邮件至客服邮箱<a href="mailto:2881602871@QQ.com">2881602871@QQ.com</a></p>
    </div>
    <a href="/" class="backHome">返回首页</a>
  </div>
</template>

<script>
export default {
  name: "error404"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.errorPage{
  text-align: center;
}
.tips{
  font-size:20px;
}
.img{
  padding:40px 0;
}
.cause{
  line-height: 40px;
  font-size: 16px;
}
.cause a{
  text-decoration: underline;
}
.backHome{
  width:300px;
  height:60px;
  line-height: 60px;
  text-align: center;
  font-size:18px;
  color:#fff;
  margin-top:40px;
  background: #3f3f3f;
  display: inline-block;
  border-radius: 30px;
}
@media screen and (max-width: 1000px) {
  .tips{
    font-size:20px;
  }
  .img{
    padding:30px 0;
  }
  .img img{
    max-width: 80%;
  }
  .cause{
    line-height: 30px;
  }
}
</style>
