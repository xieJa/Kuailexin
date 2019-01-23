<template>
  <div class="brandIP">
      <p><img src="@/assets/ip1.png" alt=""></p>
      <div class="setbase">
          <h2>基础设定</h2>
          <ul class="clearfix">
            <li v-for="item in list" :key="item.Id">
                <div class="ip-style"><img :src="item.Image" alt=""></div>
                <div class="ip-intro">
                    <div class="name">{{item.SubTitle}}<span>（{{item.Title}}）</span></div>
                    <p>基础设定</p>
                    <p><span>姓名：</span><em>{{item.SubTitle}}</em></p>
                    <p v-html="item.BasicSettings" style="white-space:pre"></p>                   
                    <p class="character"><span>性格特质：</span><em v-html="item.Character" style="white-space:pre"></em></p>                    
                </div>
            </li>            
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "brandIP",
  data() {
    return {
      list:[]
    };
  },
  created:function(){
    let that =this;
    this.$axios.get("/ajaxdata.aspx?Action=list&Object=brandip&pageIndex=1&pageSize=100")
    .then(function(res){
      that.list = res.data.list
    })
  }  
};
</script>

<style scoped>
.brandIP{
  text-align: center;
  margin-top:60px;
}
.setbase h2{
    text-align: center;
    font-size: 24px;
    color: #c51720;
    margin: 60px 0;
}
.setbase li{
  float:left;
  width:50%;
  position: relative;
  margin-bottom:90px;
}
.ip-style{
  position: absolute;
  left:0;
  height:100%;
  width:50%;
}
.ip-style img{
  vertical-align: middle;
}
.ip-style:after{
  content:'';
  display:inline-block;
  height:100%;
  vertical-align: middle;
}
.ip-intro{
  float:right;
  width:50%;
  text-align: left;
  line-height: 1.3;
}
.ip-intro em{
  font-style:inherit;
}
.ip-intro .name{
  font-size:24px;
  padding-bottom: 18px;
}
.ip-intro .name span{
  font-size:16px;
}
.ip-intro p{
  display: table;
}
.ip-intro p span{
  display: table-cell;
  white-space: nowrap;
}
.ip-intro p.character{
  margin-top:16px;
}
.ip-intro p.character span{
  display: block;
}
</style>
