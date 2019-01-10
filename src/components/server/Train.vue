<template>
  <div class="train">
    <ul>
      <li class="clearfix">
        <div class="title">选址培训</div>
        <div class="trainPic">
          <img src="@/assets/train.jpg" alt="">
        </div>
        <div class="train-info">
          <div class="train-name">快乐星汉堡培训系统</div>
          <div class="train-inner">
            <p>快乐星汉堡（KDS BURGER）凭借数年来的稳扎稳打、精益求精，获得了诸多荣誉和加盟商、消费者的口碑。快乐星以美式高品质西式快餐为卖点，主要经营市场流行的多种系列西式餐饮美食。其中，明星产品为快乐鸡腿堡、黄金脆皮鸡、招牌奶茶、脆皮手枪腿等，定期还有新品上市。</p>
            <p>加盟店来公司总部进行技术培训，培训费全免，总部安排住宿；也可以向总部申请培训师上门进行营运培训和技术指导，但您需要为培训师提供食宿以及报销来回车费。</p>
            </div>
        </div>
      </li>
      <li class="clearfix">
        <div class="title">选址培训</div>
        <div class="trainPic">
          <img src="@/assets/train.jpg" alt="">
        </div>
        <div class="train-info">
          <div class="train-name">快乐星汉堡培训系统</div>
          <div class="train-inner">
            <p>快乐星汉堡（KDS BURGER）凭借数年来的稳扎稳打、精益求精，获得了诸多荣誉和加盟商、消费者的口碑。快乐星以美式高品质西式快餐为卖点，主要经营市场流行的多种系列西式餐饮美食。其中，明星产品为快乐鸡腿堡、黄金脆皮鸡、招牌奶茶、脆皮手枪腿等，定期还有新品上市。</p>
            <p>加盟店来公司总部进行技术培训，培训费全免，总部安排住宿；也可以向总部申请培训师上门进行营运培训和技术指导，但您需要为培训师提供食宿以及报销来回车费。</p>
            </div>
        </div>
      </li>
      <li class="clearfix">
        <div class="title">选址培训</div>
        <div class="trainPic">
          <img src="@/assets/train.jpg" alt="">
        </div>
        <div class="train-info">
          <div class="train-name">快乐星汉堡培训系统</div>
          <div class="train-inner">
            <p>快乐星汉堡（KDS BURGER）凭借数年来的稳扎稳打、精益求精，获得了诸多荣誉和加盟商、消费者的口碑。快乐星以美式高品质西式快餐为卖点，主要经营市场流行的多种系列西式餐饮美食。其中，明星产品为快乐鸡腿堡、黄金脆皮鸡、招牌奶茶、脆皮手枪腿等，定期还有新品上市。</p>
            <p>加盟店来公司总部进行技术培训，培训费全免，总部安排住宿；也可以向总部申请培训师上门进行营运培训和技术指导，但您需要为培训师提供食宿以及报销来回车费。</p>
            </div>
        </div>
      </li>
    </ul>
    <button class="moreBtn">加载更多</button>     
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import pageQrcode from "../pageQrcode";
export default {
  name: "Train",
  data() {
    return {
    };
  },
  components: {
    pageQrcode
  }
};
</script>

<style scoped>
.train{
  margin-top:40px;
  text-align: center;
}
.train li{
  text-align: left;
  margin-bottom: 60px;
}
.train .title{
  font-size:24px;
  margin-bottom:20px;
}
.train .trainPic{
  width:45%;
  float:left;
}
.train .train-info{
  width:50%;
  float:left;
  margin:5% 0 0 5%;
}
.train .train-info .train-name{
  font-size:18px;
  color:#c8161e;
  font-weight: bold
}
.train .train-info .train-inner{
  line-height: 3;
  margin-top:5%;
}
.train .train-info .train-inner p{
  text-indent: 2em;
}
</style>
