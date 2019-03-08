<template>
    <div class="contact">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle></PageTitle>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'Contact',
    data(){
        return{
            pageBanner:{
                name:'联系我们',
                enName:'Contact us',
                imageUrl:require('@/assets/banner08.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'卖的就是专业，我们拒绝忽悠，品质，我们为快乐星品牌代言'
            },
            pTitle:'',
            pView:''  
        }
    }
}
</script>
