<template>
    <div class="Product">
        
        <div v-if="!isChildViewShow">
            <PageBanner :pageBanner='pageBanner'></PageBanner>
            <PageTitle :description="description" ></PageTitle>                          
            <router-view></router-view>     
        </div>
    </div>
</template>

<script>
// import imageUrl from ''
export default {
    name:'product',
    data(){
        return{
             pageBanner:{
                name:'新鲜美食',
                enName:'Fresh food',
                imageUrl:require('../../assets/banner03.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心。'
            },
            description:'',
            isChildViewShow:false
        }
    },   
}
</script>

<style>

</style>
