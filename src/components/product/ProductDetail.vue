<template>
  <div class="productDetail">
    <crumbs v-if="!this.$M">
      <a href="javascript:;">{{list.Title}}</a>
    </crumbs>
    <div class="cover">
      <h2 class="product-name">{{list.Title}}</h2>
      <div class="swiper-container product-show">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in list.Images" :key="index">
            <img :src="item.Image">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <router-link v-if="list.Pid" :to="{path:'/Product/ProductDetail',query:{Id:list.Pid}}" class="swiper-button-prev swiper-button-black product-prev" :title="'上一条:'+list.Ptitle"></router-link>
        <router-link v-if="list.Nid" :to="{path:'/Product/ProductDetail',query:{Id:list.Nid}}"  class="swiper-button-next swiper-button-black product-next" :title="'下一条:'+list.Ntitle"></router-link>
        <!-- <div class="hot"></div> -->
      </div>
      <div class="product-inner" v-html="list.Content"></div>
      <dl class="share">
        <dt>分享：</dt>
        <dd class="bdsharebuttonbox" data-tag="share_1">         
          <a class="bds_tsina" data-cmd="tsina"><img src="@/assets/sina.png" data-cmd="tsina"></a>
          <a class="bds_weixin iconfont icon-weixin" data-cmd="weixin"></a>
        </dd>
      </dl>
      <div class="other-related">猜您喜欢</div>
      <div class="relative">
        <div class="swiper-container product-other">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in rProduct"
              :key="item.Id"
              @click="proLink(item.Id)"
            >
              <div class="product-item clearfix">
                <div class="hot" v-if="item.Hot=='True'"></div>
                <div class="product-info">
                  <div class="name">{{item.Title}}</div>
                  <router-link :to="{name:'ProductDetail',params:{name:'脆皮全鸡'}}">查看详情</router-link>
                </div>
                <div class="product-pic">
                  <img :src="item.Image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-button-prev swiper-button-black product-other-prev"></div>
        <div class="swiper-button-next swiper-button-black product-other-next"></div>
      </div>
    </div>    
  </div>
</template>

<script>
import crumbs from "../crumbs";
export default {
  name: "productDetail",
  data() {
    return {
      list: {},
      rProduct: [],
      childValue: false
    };
  },
  created: function() {
    this.loadList();
    this.recommendProduct();
  },
  mounted: function() {
    
  },  
  methods: {
    loadList: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=ProductDetail", {
          params: {
            Id: that.$route.query.Id
          }
        })
        .then(function(res) {          
          that.list = res.data.list[0];
          that.$nextTick(function() {
            that.share();
          });
        });    
    },
    // 推荐产品
    recommendProduct: function() {
      let that = this;
      this.$axios
        .get(
          "/ajaxdata.aspx?Action=list&Object=ProductView&SearchKey=Recommend&SearchRecommend=1&pageIndex=1&pageSize=6"
        )
        .then(function(res) {          
          that.rProduct = res.data.list;
          that.$nextTick(function() {
            let other = this.$M ? 1 : 2;
            new this.$Swiper(".product-other", {
              slidesPerView: other,
              prevButton: ".product-other-prev",
              nextButton: ".product-other-next"
            });
          });
        });
    },
    
    proLink: function(id) {
      this.$router.push({
        path: "/Product/ProductDetail",
        query: { Id: id }
      });
    },
    share: function() {     
      let bdPic = '';
      for(let i=0;i<this.list.Images.length;i++){
        bdPic+= this.list.Images[i].Image+' || '
      }
      window._bd_share_config = {
        common: {
          bdText: "",
          bdDesc: "",
          bdUrl: window.location.href,
          bdPic: bdPic
        },
        share: [
          {
            bdSize: 16
          }
        ]
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=" +
        ~(-new Date() / 36e5);
      document.body.appendChild(s);
    }
  },
  components: {
    crumbs
  },
  watch: {
    $route(to, from) {
      this.loadList();
      this.recommendProduct();
    }
  }
};
</script>

<style scoped>
.product-name {
  font-size: 26px;
  font-weight: bold;
}
.product-show {
  border: 1px solid #cfcfcf;
  margin-top: 20px;
}

.swiper-slide {
  text-align: center;
}
.product-show .swiper-button-black {
  opacity: 0.2;
}
.product-show .swiper-button-black:hover {
  opacity: 0.6;
}
.product-show .swiper-button-disabled {
  opacity: 0.2;
}
.relative .swiper-button-black {
  opacity: 0.6;
  transform: scale(0.8);
}
.relative .swiper-button-disabled {
  opacity: 0.2;
}
.product-inner {
  padding: 30px 0;
  font-size: 18px;
  color: #666;
}
.share dt {
  float: left;
  display: inline-block;
  font-size: 18px;
}
.share dd {
  display: inline-block;
}
.share a {
  float: left;
  display: block;
  height: 26px;
  margin-right: 15px;
  background:none;
  margin:0;
  padding:0;
  margin-right:15px;
  font-size: 26px;
  line-height: 26px;
  color: #7f7f7f;
}

.relative {
  margin-top: -20px;
}
.product-other {
  margin: 0 40px;
}
.product-item {
  height: 230px;
  margin: 20px;
}
@media screen and (max-width: 1000px) {
  .product-name {
    font-size: 0.36rem;
    margin-top: 20px;
    margin: 20px 10px 0 10px;
  }
  .product-show {
    margin: 0.2rem 10px;
  }
  .hot {
    width: 25%;
  }
  .product-inner,
  .share {
    padding: 10px;
    font-size: 14px;
  }
  .other-related {
    margin-top: 1rem;
    border-top: 10px solid #f1f1f1;
    padding: 0 10px;
  }
  .other-related:after {
    left: 10px;
    width: 1.5em;
  }
  .product-other {
    margin: 0 20px;
  }
  .relative .swiper-button-black,
  .product-show .swiper-button-black {
    transform: scale(0.5);
  }
  .product-info a {
    line-height: 0.4rem;
  }
}
</style>
