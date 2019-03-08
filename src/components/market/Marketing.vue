<template>
    <div class="Market">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle>             
            <router-view></router-view>
        </div>        
    </div>
</template>

<script>
export default {
    name:'Marketing',
    data(){
        return{
            pageBanner:{
                name:'营销活动',
                enName:'Marketing activities',
                imageUrl:require('@/assets/banner05.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'公司斥资开发了快乐星微信会员系统。互联网+核心媒体平台，<br/>全新O2O营销，线上线下双管齐下，助您赢在起跑线上。'
            },            
            pTitle:'',
            description:'',
            pView:''  
        }
    }
}
</script>

<style>

</style>
