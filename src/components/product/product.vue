<template>
    <div class="Product">
        
        <div v-if="!isChildViewShow">
            <PageBanner :pageBanner='pageBanner'></PageBanner>
            <PageTitle :title="pTitle" :description="description" ></PageTitle>  
            <NewProduct></NewProduct>           
        </div>
        <router-view @childViewShow="childViewShow"></router-view>
    </div>
</template>

<script>
import PageBanner from '../PageBanner'
import PageTitle from '../PageTitle'
import NewProduct from './NewProduct'

import imageUrl from '@/assets/banner03.jpg'
export default {
    name:'product',
    data(){
        return{
             pageBanner:{
                name:'新鲜美食',
                enName:'Fresh food',
                imageUrl:imageUrl,
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心。'
            },
            pTitle:this.$route.params.Name,
            description:'',
            isChildViewShow:false
        }
    },
    methods:{
       childViewShow:function(childViewShow){
           this.isChildViewShow = childViewShow
       }
    },
    components:{
        PageBanner,PageTitle,NewProduct
    }
}
</script>

<style>

</style>
