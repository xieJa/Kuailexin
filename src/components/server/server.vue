<template>
    <div class="server">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle>             
            <Credit v-if="this.$route.query.name=='品牌资信'"></Credit>
            <mapSide v-else-if="this.$route.query.name=='在您身边'"></mapSide>
            <program v-else-if="this.$route.query.name=='加盟方案'"></program>
            <example v-else-if="this.$route.query.name=='装修指导'"></example>
            <joinIn v-else-if="this.$route.query.name=='申请加盟'"></joinIn>
            <Train v-else-if="this.$route.query.name=='培训系统'"></Train>
            <FAQ v-else-if="this.$route.query.name=='常见问题'"></FAQ>
            <PageView :content="pView" v-else></PageView>
        </div>
        
    </div>
</template>

<script>
import Credit from './Credit'
import mapSide from './mapSide'
import program from './program'
import example from './example'
import joinIn from './joinIn'
import Train from './Train'
import FAQ from './FAQ'
export default {
    name:'brand',
    data(){
        return{
            pageBanner:{
                name:'加盟服务',
                enName:'Join the service',
                imageUrl:require('@/assets/banner06.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'让每一位加盟快乐星汉堡店的加盟商，都能更加轻松经营，助力加盟者成就梦想！以品牌自身的“专心、用心”，让加盟商“放心”！'
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
        Credit,mapSide,program,example,joinIn,Train,FAQ
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
