<template>
  <div class="Market-detail cover">
    <crumbs v-if="!this.$M">
      <router-link
        :to="{path:typeTitle=='成功案例'?'/case':'/news',query:{Id:list.TypeId}}"
      >{{typeTitle}}</router-link>>
      <a href="javascript:;">{{list.Title}}</a>
    </crumbs>
    <div class="market-info">
      <div class="market-info-head">
        <h2>{{list.Title}}</h2>
        <span>
          <i class="iconfont icon-yueduliang" style="font-size:26px;"></i>
          阅读量：{{list.ReadCount}}
        </span>
        <span>
          <i class="iconfont icon-shijian"></i>
          时间：{{list.CreateDate}}
        </span>
      </div>
      <div class="market-info-body" v-html="list.Content"></div>
      <div class="page-turning clearfix">
        <div class="paging page-prev">
          <router-link :to="{path:'/newdetail',query:{Id:list.Pid}}" v-show="list.Pid!=''">上一篇</router-link>
          <p>{{list.Ptitle}}</p>
        </div>
        <router-link
          :to="{path:typeTitle=='成功案例'?'/case':'/news',query:{Id:list.TypeId}}"
          class="back-list"
        >
          <i class="iconfont icon-liebiao"></i>
          <p>返回列表</p>
        </router-link>
        <div class="paging page-next" style="float:right;">
          <router-link :to="{path:'/newdetail',query:{Id:list.Nid}}" v-show="list.Nid!=''">下一篇</router-link>
          <p>{{list.Ntitle}}</p>
        </div>
      </div>
    </div>
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import crumbs from "../crumbs";
import pageQrcode from "../pageQrcode";
export default {
  name: "Marketing",
  metaInfo:function(){
    return{
      title:this.list.SEOTitle, // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: this.list.SEOKeyword
      },{                 // set meta
        name: 'description',
        content: this.list.SEODescription
      },{
        name:'viewport',
        content:'width=device-width,initial-scale=1.0'
      }]
    }
  },
  data() {
    return {
      list: {SEOTitle:'',SEOKeyword:'',SEODescription:''},
      typeTitle: ""
    };
  },
  created: function() {    
    this.loadNewDetail();
  },
  components: {
    crumbs,
    pageQrcode
  },
  methods: {
    loadNewDetail: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=loaddetail&Object=news", {
          params: {
            Id: that.$route.query.Id
          }
        })
        .then(function(res) {
          that.list = res.data.list[0];
          that.$nextTick(function(){
            that.loadTypeTitle();
          })
        });
    },
    loadTypeTitle: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=typetitle", {
          params: {
            Id: that.list.TypeId
          }
        })
        .then(function(res) {
          that.typeTitle = res.data.list[0].Title;
          
        });
    }
  },
  watch: {
    $route(to, form) {
      this.loadNewDetail();
    }
  }
};
</script>

<style scoped>
.market-info h2 {
  font-size: 22px;
  padding-bottom: 20px;
  font-weight: bold;
}
.market-info-head {
  text-align: center;
  padding-top: 20px;
}
.market-info-head span {
  color: #999;
  margin: 0 30px;
  line-height: 20px;
  padding-bottom: 25px;
  display: inline-block;
}
.market-info-head span i {
  margin-right: 5px;
  font-size: 20px;
  color: #ababab;
  float: left;
}
.market-info-body {
  padding: 10px 0;
}
.page-turning {
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1px solid #e1e1e1;
  position: relative;
}
.page-turning .paging {
  float: left;
  width: 50%;
}
.page-turning .paging a {
  display: inline-block;
  width: 165px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  margin-bottom: 20px;
  border: 1px solid #b3b3b3;
  transition: all 0.3s;
}
.page-turning .paging a:hover {
  color: #fff;
  border-color: #c51720;
  background: #c51720;
}
.page-turning .paging p {
  transition: all 0.3s;
}
.page-turning .paging a:hover + p {
  color: #c51720;
}
.page-turning .page-next {
  text-align: right;
}
.back-list {
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
.back-list i {
  font-size: 26px;
}
@media screen and (max-width: 1000px) {
  .market-info {
    padding: 10px;
  }
  .market-info-head span {
    margin: 0 10px;
  }
  .back-list {
    display: none;
  }
  .page-turning .paging {
    width: 100%;
    float: none;
    margin-bottom: 20px;
    color: #c8161e;
  }
  .page-turning .page-next {
    text-align: left;
  }
  .page-turning .paging a {
    margin-bottom: 5px;
    border: 0;
    background: #c8161e;
    color: #fff;
  }
}
</style>
