<template>
    <div class="newlist">
        <ul>
            <li class="clearfix">
                <div class="newPic">
                    <img src="@/assets/newpic.jpg" alt="">
                </div>
                <div class="new-inner">
                    <div class="new-title">快乐星汉堡加盟品牌带你解读权威4p营销理论</div>
                    <div class="new-date">2018-10-26</div>
                    <div class="new-intro">其实现在火爆的餐饮店，或多或少都离不开恰到好处的营销。不少加盟商就是看中快乐星汉堡有计划性、
能洞察市场爆点的营销策略方案，这也是未来店铺长期运营，人气依旧火爆的主要原因。对于营销这块，
快乐星汉堡设立了专业的营销中心，总结全国千家门店，将西式快餐加盟店与4P营销...</div>
                    <router-link to="/newdetail">查看详情    ></router-link>
                </div>
            </li>
            <li class="clearfix">
                <div class="newPic">
                    <img src="@/assets/newpic.jpg" alt="">
                </div>
                <div class="new-inner">
                    <div class="new-title">快乐星汉堡加盟品牌带你解读权威4p营销理论</div>
                    <div class="new-date">2018-10-26</div>
                    <div class="new-intro">其实现在火爆的餐饮店，或多或少都离不开恰到好处的营销。不少加盟商就是看中快乐星汉堡有计划性、
能洞察市场爆点的营销策略方案，这也是未来店铺长期运营，人气依旧火爆的主要原因。对于营销这块，
快乐星汉堡设立了专业的营销中心，总结全国千家门店，将西式快餐加盟店与4P营销...</div>
                    <router-link to="/newdetail">查看详情    ></router-link>
                </div>
            </li>
            <li class="clearfix">
                <div class="newPic">
                    <img src="@/assets/newpic.jpg" alt="">
                </div>
                <div class="new-inner">
                    <div class="new-title">快乐星汉堡加盟品牌带你解读权威4p营销理论</div>
                    <div class="new-date">2018-10-26</div>
                    <div class="new-intro">其实现在火爆的餐饮店，或多或少都离不开恰到好处的营销。不少加盟商就是看中快乐星汉堡有计划性、
能洞察市场爆点的营销策略方案，这也是未来店铺长期运营，人气依旧火爆的主要原因。对于营销这块，
快乐星汉堡设立了专业的营销中心，总结全国千家门店，将西式快餐加盟店与4P营销...</div>
                    <router-link to="/newdetail">查看详情    ></router-link>
                </div>
            </li>
        </ul>
        <p style="text-align:center;margin-bottom:60px;">
            <button class="moreBtn">加载更多</button>       
        </p>
    </div>
</template>

<script>
export default {
    name:'newlist'
}
</script>

<style scoped>
.newlist{
    margin-top:40px;
}
.newlist li{
    margin-bottom:60px;
}
.newlist .newPic{
    float:left;
    width:35%;
    overflow: hidden;
    position: relative;
}
.newlist .newPic:after{
    content:'';
    display: block;
    padding-bottom:68%;
}
.newlist .newPic img{
    max-width: none;
    height:100%;
    position: absolute;
    left:50%;
    transform:translateX(-50%)
}
.new-inner{
    float:left;
    width:60%;
    margin-left:5%;
}
.new-inner .new-title{
    font-size:16px;
    font-weight: bold;
    padding-top:15px;
}
.new-inner .new-date{
    color:#999999;
    line-height: 40px;
}
.new-inner .new-intro{
    height:66px;
    margin:4% 0;
    overflow: hidden;
}
.new-inner a{
    display: block;
    width:210px;
    height:43px;
    text-align: center;
    line-height: 43px;
    color:#999999;
    border:1px solid #c7c7c7;
    transition:all .3s;
}
.new-inner a:hover{   
    background:#c8161e;
    color:#fff;
    border:1px solid #c8161e;
}
</style>
