<template>
  <div class="project">
      <ul>
          <li v-for="item in list" :key="item.Id">
              <div class="title">{{item.Title}}</div>
              <div class="kernel">核心要素：{{item.Elements}}</div>
              <div class="info">
                  <span>说明：</span>
                  <p v-html="item.Description"></p>
              </div>
              <div class="img">
                  <img :src="'/'+item.Image" alt="">
              </div>
          </li>          
      </ul>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
        list:[],
    };
  },
  created:function(){
      let that = this;
      this.$axios.get("/ajaxdata.aspx?Action=list&Object=shopplanning&pageIndex=1&pageSize=100")
      .then(function(res){
          that.list = res.data.list          
      })
  }
};
</script>

<style scoped>
.project{
    margin-top:40px;
}
.project li{
    margin-bottom: 60px;
}
.project .title,.kernel{
    font-size: 18px;
    font-weight: bold;
}
.project .info{
    display: table;
    padding:30px 0;
}
.project span{
    display: table-cell;
    white-space: nowrap;
}
.project p{
    display: table-cell;
}
</style>
