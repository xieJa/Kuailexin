<template>
    <div class="Market-detail cover">
        <crumbs v-if="!this.$M"></crumbs>
        <div class="market-info">
            <div class="market-info-head">
                <h2>快乐星汉堡加盟品牌带你解读权威4p营销理论</h2>
                <span><i class="iconfont icon-yueduliang" style="font-size:26px;"></i>阅读量：20</span>
                <span><i class="iconfont icon-shijian"></i>时间：2018-08-10</span>
            </div>
            <div class="market-info-body">
                <p>其实现在火爆的餐饮店，或多或少都离不开恰到好处的营销。不少加盟商就是看中快乐星汉堡有计划性、能洞察市场爆点的营销策略方案，这也是未来店铺长期运营，人气依旧火爆的主要原因。对于营销这块，快乐星汉堡设立了专业的营销中心，总结全国千家门店，将西式快餐加盟店与4P营销理论(The Marketing Theory of 4Ps)充分结合起来，成为又一大品牌特色。</p>
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
                <router-link to="/" class="back-list">
                    <i class="iconfont icon-liebiao"></i>
                    <p>返回列表</p>
                </router-link>
                <div class="paging page-next">
                    <router-link to="#">下一篇</router-link>         
                    <p>快乐星汉堡不一样的美味选择，汉堡买一送一</p>           
                </div>
            </div>
        </div>
        <pageQrcode></pageQrcode>        
    </div>
</template>

<script>
import crumbs from '../crumbs'
import pageQrcode from '../pageQrcode'
export default {
    name:'Marketing',
    data(){
        return{

        }
    },
    components:{
        crumbs,pageQrcode
    }
}
</script>

<style scoped>
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
    position: relative;
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
.back-list{
    position: absolute;
    text-align:center;
    left:50%;
    transform: translateX(-50%)
}
.back-list i{
    font-size: 26px;
}
@media screen and (max-width:1000px){
    .market-info{
        padding:10px;
    }
    .market-info-head span{
        margin:0 10px;
    }
    .back-list{
        display: none;
    }
    .page-turning .paging{
        width:100%;
        float:none;
        margin-bottom:20px;
        color:#c8161e;
    }
    .page-turning .page-next{
        text-align: left;
    }
    .page-turning .paging a{
        margin-bottom:5px;
        border:0;
        background:#c8161e;
        color:#fff;
    }
}
</style>
