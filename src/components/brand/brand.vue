<template>
    <div class="brand">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle> 
            <Project v-if="this.$route.query.name==='店面规划'"></Project>
            <DecorationEffect v-else-if="this.$route.query.name==='我们的店'"></DecorationEffect>
            <Cartoon v-else-if="this.$route.query.name==='卡通形象'"></Cartoon>
            <brandVI v-else-if="this.$route.query.name==='品牌VI'"></brandVI>
            <brandIP v-else-if="this.$route.query.name==='品牌IP'"></brandIP>
            <PageView :content="pView" v-else></PageView>
        </div>
        
    </div>
</template>

<script>
import Project from './project'
import DecorationEffect from './Decorationeffect'
import Cartoon from './cartoon'
import brandVI from './brandVI'
import brandIP from './brandIP'
export default {
    name:'brand',
    data(){
        return{
            pageBanner:{
                name:'品牌形象',
                enName:'Brand image',
                imageUrl:require('@/assets/banner04.jpg'),
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
        Project,DecorationEffect,Cartoon,brandVI,brandIP
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
