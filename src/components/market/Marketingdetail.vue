<template>
    <div class="Market-detail cover">
        <crumbs></crumbs>
        <div class="market-info">
            <div class="market-info-head">
                <h2>快乐星汉堡新品来袭！“性感”口味，在线撩你，还等什么~</h2>
                <span><i class="icon iconfont icon-personal-center"></i>来源：快乐星汉堡</span>
                <span><i class="icon iconfont icon-shijian"></i>时间：2018-08-10</span>
            </div>
            <div class="market-info-body">
                <p style="text-align:center;padding-bottom:30px;"><img src="@/assets/market.jpg" alt=""></p>
                <p style="text-align:center; white-space: pre-wrap;">〔海苔鸡排〕

你说你喜欢大海
而我却怕水

 你喜欢熬夜
而我总是倒头就睡

 你喜欢吃海苔
而我钟爱鸡排

 连吃都没有默契
我们还怎么做夫妻

 别急！
快乐星汉堡让吃货的爱情不再将就！

 无论在哪里
海苔永远是美味的点睛之笔
千篇一律的鸡排因海苔焕发全新活力

 “我们不一样！

 鲜味十足的海苔与弹嫩鸡肉酥香交织

开演一场魔都热恋！

外酥里嫩的夏日美味

海苔鸡排来挑逗你的味蕾！</p>
            </div>
            <div class="page-turning clearfix">
                <div class="paging page-prev">
                    <router-link to="#">上一篇</router-link>         
                    <p>快乐星汉堡不一样的美味选择，汉堡买一送一</p>           
                </div>
                <div class="paging page-next">
                    <router-link to="#">下一篇</router-link>         
                    <p>快乐星汉堡不一样的美味选择，汉堡买一送一</p>           
                </div>
            </div>
        </div>
        <div class="page-qrcode">
            <p>快乐星怎么样？登录官网获取快乐星汉堡最新资讯，就近考察品尝快乐星汉堡美味！出彩微信会员系统，多重惊喜和优惠，诚邀您来体验!24小时咨询热线：400-035-2688。</p>
            <img src="@/assets/qrcode2.jpg" alt="">
        </div>
    </div>
</template>

<script>
import crumbs from '../crumbs'
export default {
    name:'Marketing',
    data(){
        return{

        }
    },
    components:{
        crumbs
    }
}
</script>

<style scoped>
.market-info{    
    border:1px solid #e1e1e1;
    padding:30px;
}
.market-info h2{
    
    font-size:22px;
    padding-bottom:20px;
    font-weight: bold;
}
.market-info-head{
    text-align: center;
    padding-top:20px;
}
.market-info-head span{
    color:#999;
    margin:0 30px;
    line-height: 20px;
    padding-bottom: 25px;
    display:inline-block;
}
.market-info-head span i{
    margin-right:5px;
    font-size: 20px;
    color:#ababab;
    float: left;
}
.market-info-body{
    padding:10px 0;
}
.page-turning{
    margin-top:50px;
    padding:30px 0;
    border-top:1px solid #e1e1e1;
}
.page-turning .paging{
    float:left;
    width:50%;
   
}
.page-turning .paging a{
    display:inline-block;
    width:165px;
    height:45px;
    text-align: center;
    line-height: 45px;
    margin-bottom:20px;
    border:1px solid #b3b3b3;
    transition:all .3s;
}
.page-turning .paging a:hover{
    color:#fff;
    border-color:#c51720;
    background:#c51720;
}
.page-turning .paging p{
    transition:all .3s;
}
.page-turning .paging a:hover+p{
    color:#c51720;
}
.page-turning .page-next{
    text-align: right;
}
</style>
