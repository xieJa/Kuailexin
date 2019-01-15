<template>
    <div class="page-qrcode">
        <hr>
        <p>快乐星怎么样？登录官网获取快乐星汉堡最新资讯，就近考察品尝快乐星汉堡美味！出彩微信会员系统，多重惊喜和优惠，诚邀您来体验!24小时咨询热线：400-035-2688。</p>
        <img src="@/assets/qrcode2.jpg" alt="">
        <div class="tel">
            <p>加盟热线：400-035-2688</p>
            <p>官方网站： http://www.k2688.com</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"pageQrcode"
}
</script>

<style scoped>
.tel{    
    margin-top:20px;
}
.tel p{
    text-align: center;
    font-size:22px;
    font-weight: 100;
    padding-bottom: 10px;
}
hr{
    margin-bottom:50px;
}
@media screen and (max-width:1000px){   
    .page-qrcode{
        padding:0;        
    } 
    .page-qrcode p{
        padding:0 10px;        
    } 
    .tel{
        margin-bottom: 20px;
    }
    .tel p{
        font-size:.3rem;
        
    }
    hr{
        border-top: 10px solid #f1f1f1;
        background: none;
        margin-bottom: .5rem;
    }
}
</style>
