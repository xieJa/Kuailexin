<template>
    <div class="Market">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle> 
            <newMarketing v-if="this.$route.query.name=='新品营销' || this.$route.query.name=='日常营销'"></newMarketing>
            <festivalMarket v-else-if="this.$route.query.name=='节日营销'"></festivalMarket>
            <trill v-else-if="this.$route.query.name=='嗨！抖音'"></trill>
            <PageView :content="pView" v-else></PageView>
        </div>        
    </div>
</template>

<script>
import PageBanner from '../PageBanner'
import PageTitle from '../PageTitle'
import PageView from '../PageView'
import newMarketing from './newMarketing'
import festivalMarket from './festivalMarket'
import trill from './trill'
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
    },    
    created:function(){
        this.pTitle=this.$route.query.name
    },
    components:{
        PageBanner,PageTitle,PageView,newMarketing,festivalMarket,trill
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
