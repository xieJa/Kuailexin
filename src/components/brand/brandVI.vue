<template>
  <div class="brandVI">
      <ul>
        <li class="wow bounceInLeft" :class="index%2==1?'bounceInRight':'bounceInLeft'" v-for="(item,index) in list" :key="index"><img :src="'/'+item.Image" :alt="item.Title"></li>
      </ul>
      <LoadMore>            
          <button class="moreBtn"  @click="more" v-if="lastPage" slot="moreBtn">加载更多</button>
          <p v-else>没有更多信息了</p>
      </LoadMore> 
  </div>
</template>

<script>
let pageIndex = 1;
export default {
  name: "brandVI",
  data() {
    return {
      list:[],
      lastPage:true,
    };
  },
  created:function(){
    this.loadList()
  },  
  mounted:function(){         	
       this.$nextTick(function(){
           new this.$WOW.WOW().init()
       })      
  },
  methods:{
    loadList:function(){
      let that =this;
      this.$axios.get("/ajaxdata.aspx?Action=list&Object=brandvi",{
        params:{
          pageIndex:1
        }
      })
      .then(function(res){
        that.list = res.data.list
        if(res.data.list.length<6){
          that.lastPage=false
        }else{
          pageIndex++
        }
      })
    },
    more:function(){
      if(this.lastPage){
        this.loadList()
      }
    }
  },
  watch:{
    'list':function(){
       this.$nextTick(function(){
           new this.$WOW.WOW().init()
       }) 
    }
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
