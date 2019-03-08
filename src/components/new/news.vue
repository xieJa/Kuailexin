<template>
    <div class="news">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle></PageTitle>             
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'news',
    data(){
        return{
            pageBanner:{
                name:'新闻资讯',
                enName:'News and information',
                imageUrl:require('@/assets/banner07.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'从加盟开店前期选址、装修、开业、培训到后期门店营运、管理、产品、活动、线上线下推广，“快乐星汉堡”已形成了加盟连锁经营的完整体系。'
            },
            pView:''  
        }
    }
}
</script>

<style>

</style>
