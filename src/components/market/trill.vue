<template>
    <div class="trill">
           <div class="trill-info">
               <p>微信点餐系统是一款基于微信餐饮O2O系统平台开发的餐饮门店点餐系统，拥有用户网上点餐、菜单管理、订单流程管理的功能，快捷无线打印，简单微信点餐等模块，能够轻松帮您实线开通网上订餐、扩展餐厅业务的愿望</p>
               <p><img src="@/assets/trill.jpg" alt=""></p>
           </div>
           <ul class="clearfix">
               <li>
                   <div class="trill-video">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>遇上这些问题不要慌，快乐星教你一秒拯救汉堡加盟店的业绩！（上）</p>
               </li>                             
               <li>
                   <div class="trill-video">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>遇上这些问题不要慌，快乐星教你一秒拯救汉堡加盟店的业绩！（上）</p>
               </li>                             
           </ul>
           <a href="#" class="moreBtn">加载更多</a>           
           <div class="page-qrcode">
                <p>快乐星怎么样？登录官网获取快乐星汉堡最新资讯，就近考察品尝快乐星汉堡美味！出彩微信会员系统，多重惊喜和优惠，诚邀您来体验!24小时咨询热线：400-035-2688。</p>
                <img src="@/assets/qrcode2.jpg" alt="">
            </div>
    </div>    
</template>

<script>
export default {
    name:'Marketing',
    data(){
        return{
           
        }
    },
    methods:{
        tabJump:function(){
            this.$router.push({
                path:'/market/Marketingdetail',
                query:{name:111}
            })
        }
    }
}
</script>

<style scoped>
.trill{
    padding-top:40px;
    line-height: 26px;
    text-align: center;
}
.trill li{
    float:left;
    width:48%;
    margin-bottom:4%;
    text-align: left;
    position: relative;
}

.trill li:nth-child(2n){
    margin-left:4%;
}
.trill li .newProPic{
    transition:all .5s;
    position: relative;
    padding-bottom: 61%;
    overflow: hidden;
}
.trill li .newProPic img{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}
.trill li:hover .newProPic{
    box-shadow: 0 5px 13px rgba(0,0,0,.3);
}
.trill ul p{
    font-weight:bold;
    margin-top:15px;
}
.page-qrcode{
    margin-top:30px;
    border-top:1px solid #dfdfdf
}
.trill-info{
    text-align: center;
    color:#666;
    margin-bottom: 50px;
}
</style>
