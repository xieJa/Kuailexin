<template>
  <div class="FAQ">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :name="index" v-for="(item,index) in list" :key="index">
        <template slot="title">
          <span>{{index+1}}.</span>{{item.Title}}
        </template>
        <div v-html="item.Content"></div>
      </el-collapse-item>      
    </el-collapse>
    <LoadMore>            
        <button class="moreBtn"  @click="more" v-if="lastPage" slot="moreBtn">加载更多</button>
        <p v-else>没有更多信息了</p>
    </LoadMore>  
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
let pageIndex = 1;
import pageQrcode from "../pageQrcode";
export default {
  name: "FAQ",
  data() {
    return {
      list:[],
      activeNames: ["0"],
      lastPage:true
    };
  },
  created:function(){
    this.loadList()
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    loadList:function(){
      let that = this;
      this.$axios.get("/ajaxdata.aspx?Action=list&Object=Problems",{
        params:{
          pageIndex:pageIndex,
          pageSize:6,
        }
      })
      .then(function(res){
          for(let i=0;i<res.data.list.length;i++){
              that.list.push(res.data.list[i])
          }
          if(res.data.list.length==6){
              pageIndex++
          }else{
              that.lastPage = false;
          }  
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

<style>
.FAQ{
  text-align: center;
}
.el-collapse{
  margin-top:40px;
  text-align: left;
}
.el-collapse-item__header {
  font-size: 16px;
}
.el-collapse-item__header span{
  color:#c8161e;
  font-weight: bold;
}
</style>
