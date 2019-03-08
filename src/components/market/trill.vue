<template>
  <div class="trill">
    <div class="trill-info" v-html="pView"></div>
    <ul class="clearfix">
      <li v-for="(item,index) in video" :key="index" @click="tapIndex=index">
        <span><img :src="item.Image" alt=""></span>
        <p>{{item.Title}}</p>
      </li>
    </ul>
    <LoadMore>            
        <button class="moreBtn"  @click="more" v-if="lastPage" slot="moreBtn">加载更多</button>
        <p v-else>没有更多信息了</p>
    </LoadMore> 
    <div class="page-qrcode">
      <p>快乐星怎么样？登录官网获取快乐星汉堡最新资讯，就近考察品尝快乐星汉堡美味！出彩微信会员系统，多重惊喜和优惠，诚邀您来体验!24小时咨询热线：400-035-2688。</p>
      <img src="@/assets/qrcode2.jpg" alt>
    </div>
    <transition-group name="fade">
      <div v-show="tapIndex == index" v-for="(item,index) in video" :key="item.Id" class="videoPop">
        <div class="shade"></div>
        <div class="trill-video" @click="close($event)">
          <video :src="item.Video" :poster="item.Image" width="100%" controls @click.stop></video>
        </div>
        <p>{{item.Title}}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Marketing",
  data() {
    return {
      pView: "",
      video: [],
      lastPage: true,
      pageIndex: 1,
      tapIndex:null
    };
  },
  created: function() {
    this.loadMemoinfo();
    this.loadVideo();
  },
  methods: {
    tabJump: function() {
      this.$router.push({
        path: "/market/Marketingdetail",
        query: { name: 111 }
      });
    },
    loadMemoinfo: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=memoinfo", {
          params: {
            Type:'嗨！抖音'
          }
        })
        .then(function(res) {
          that.pView = res.data.list[0].Content;
        });
    },
    loadVideo: function() {
      let that = this;
      this.$axios
        .get("/ajaxdata.aspx?Action=list&Object=Video", {
          params: {
            pageIndex: that.pageIndex,
            pageSize: 6
          }
        })
        .then(function(res) {
          for (let i = 0; i < res.data.list.length; i++) {
            that.video.push(res.data.list[i]);
          }
          if (res.data.list.length == 6) {
            that.pageIndex++;
          } else {
            that.lastPage = false;
          }
        });
    },
    more: function() {
      if (this.lastPage) {
        this.loadVideo();
      }
    },
    close:function(e){
        e.target.children[0].pause()
        this.tapIndex = null
    }
  }
};
</script>

<style scoped>
.trill {
  padding-top: 40px;
  line-height: 26px;
  text-align: center;
}
.trill li {
  float: left;
  width: 48%;
  margin-bottom: 4%;
  text-align: left;
  position: relative;
  cursor: pointer;
}

.trill li:nth-child(2n) {
  margin-left: 4%;
}
.trill li .newProPic {
  transition: all 0.5s;
  position: relative;
  padding-bottom: 61%;
  overflow: hidden;
}
.trill li .newProPic img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.trill li:hover .newProPic {
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.3);
}
.trill ul p {
  font-weight: bold;
  margin-top: 15px;
}
.page-qrcode {
  margin-top: 30px;
  border-top: 1px solid #dfdfdf;
}
.trill-info {
  text-align: center;
  color: #666;
  margin-bottom: 50px;
}
.trill ul li span{
    display: block;
    width:100%;
    padding-bottom:56%;
    position: relative;
}
.trill ul img {
  width:100%;
  height:100%;
  display: block;
  position: absolute;
}
.videoPop .trill-video{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 1000;
    
}
.videoPop .trill-video video{
    position: relative;
    top:50%;    
    width:auto;    
    transform:translateY(-50%);
    background:#000;
}
.shade{
    background:#191919;
}
</style>
