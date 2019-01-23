<template>
  <div class="train">
    <ul>
      <li class="clearfix" v-for="(item,index) in list" :key="index">
        <div class="title">{{item.Title}}</div>
        <div class="trainPic">
          <img :src="item.Image" alt="">
        </div>
        <div class="train-info">
          <div class="train-name">{{item.SubTitle}}</div>
          <div class="train-inner" v-html="item.Description"></div>
        </div>
      </li>      
    </ul>
    <LoadMore>            
        <button class="moreBtn"  @click="more" v-if="lastPage" slot="moreBtn">加载更多</button>
        <p v-else>没有更多信息了</p>
    </LoadMore> 
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import pageQrcode from "../pageQrcode";
export default {
  name: "Train",
  data() {
    return {
      list:[],
      lastPage:true,
      pageIndex:1,
    };
  },
  created:function(){   
      this.loadList();
  },
  methods:{
    loadList:function(){
      let that = this;
      this.$axios.get("/ajaxdata.aspx?Action=list&Object=Training",{
        params:{
          pageIndex:that.pageIndex,
          pageSize:6,
        }
      })
      .then(function(res){
          for(let i=0;i<res.data.list.length;i++){
              that.list.push(res.data.list[i])
          }
          if(res.data.list.length==6){
              that.pageIndex++
          }else{
              that.lastPage = false;
          }  
          console.log(res)
      })
    },
    more:function(){
        if(this.lastPage){
            this.loadList()
        }
    }
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
