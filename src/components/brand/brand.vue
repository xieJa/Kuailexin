<template>
    <div class="brand">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle> 
            <PageView :content="pView"></PageView>
        </div>
        
    </div>
</template>

<script>
import PageBanner from '../PageBanner'
import PageTitle from '../PageTitle'
import PageView from '../PageView'
export default {
    name:'brand',
    data(){
        return{
            pageBanner:{
                name:'关于我们',
                enName:'About us',
                imageUrl:require('@/assets/banner02.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'快乐星汉堡将西式快餐与中国传承千年的经典文化相融合，做出更适合中国人的饮食习惯和生活品味的美食。'
            },
            pTitle:'',
            description:'',
            pView:''
        }
    },
    created:function(){
        this.pTitle=this.$route.query.name
    },
    components:{
        PageBanner,PageTitle,PageView
    },
    watch:{
        '$route'(to,from){            
            this.pTitle=this.$route.query.name            
        }
    }
}
</script>

<style>

</style>
