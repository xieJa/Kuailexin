<template>
    <div class="Product">
        
        <div v-if="!isChildViewShow">
            <PageBanner :pageBanner='pageBanner'></PageBanner>
            <PageTitle :title="pTitle" :description="description" ></PageTitle>  
            
            <NewProduct v-if="this.$route.query.name=='新品动态'"></NewProduct>   
            <StarProduct v-else-if="this.$route.query.name=='明星产品'"></StarProduct> 
            <GeneralProduct v-else></GeneralProduct>        
        </div>
        <router-view @childViewShow="childViewShow"></router-view>
    </div>
</template>

<script>
import NewProduct from './NewProduct'
import StarProduct from './StarProduct'
import GeneralProduct from './GeneralProduct'
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
            pTitle:this.$route.query.name,
            description:'',
            isChildViewShow:false
        }
    },
    created:function(){        
        console.log(this.$route)
        this.pTitle=this.$route.query.name
    },
    methods:{
       childViewShow:function(childViewShow){
           this.isChildViewShow = childViewShow
       }
    },
    components:{
        NewProduct,StarProduct,GeneralProduct
    },
    watch:{
        '$route'(to,from){     
             console.log(this.$route)       
            this.pTitle=this.$route.query.name            
        }
    }
}
</script>

<style>

</style>
