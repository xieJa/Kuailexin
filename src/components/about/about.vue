<template>
    <div class="about">       
        <page-banner :pageBanner="pageBanner"></page-banner>
        
        <div class="cover">
            <ul class="information clearfix" v-if="pTitle=='公司简介'">
                <li>
                    <span class="t-num">2008</span>
                    <p>成立于2008年</p>
                </li>
                <li>
                    <span class="t-num">100+</span>
                    <p>100+名专业伙伴为您服务</p>
                </li>
                <li>
                    <span class="t-num">3000+</span>
                    <p>3000+加盟商与您一起成长</p>
                </li>
                <li>
                    <span class="t-num">190000+</span>
                    <p>190000+全国粉丝会员客户</p>
                </li>
            </ul>
            <PageTitle :title="pTitle" :description="description" v-if="pTitle!='公司简介'"></PageTitle>        
            
            <TimeLine v-if="pTitle=='发展历程'"></TimeLine>
            <Team v-else-if="pTitle=='优秀团队'"></Team>
            <TeamView v-else-if="pTitle=='优秀个人'"></TeamView>
            <PageView :content="pView" v-else></PageView>
            <JoinHotline  v-if="pTitle!='优秀团队' && pTitle!='优秀个人'"></JoinHotline>
        </div>
    </div>
</template>

<script>
import PageBanner from '../PageBanner'
import PageTitle from '../PageTitle'
import PageView from '../PageView'
import TimeLine from '../about/TimeLine'
import Team from '../about/Team'
import TeamView from '../about/TeamView'
import JoinHotline from '../about/JoinHotline'
export default {
    name:'about',
    data:function(){
        return{
            pageBanner:{
                name:'关于我们',
                enName:'About us',
                imageUrl:require('@/assets/banner02.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'快乐星汉堡将西式快餐与中国传承千年的经典文化相融合，做出更适合中国人的饮食习惯和生活品味的美食。'
            },
            pTitle:this.$route.params.Name,
            description:'',
            pView:''
        }
    },
    components:{
        PageBanner,PageTitle,PageView,TimeLine,JoinHotline,Team,TeamView
    },
    created:function(){
             
        
    },
    watch:{
        '$route'(to,from){
            console.log(this.$route.params.Name)
            if(this.$route.params.Name == '优秀团队'){
                this.description = '月度优秀个人和部门优秀人员展播'
            }else{
                this.description = ''
            }
            this.pTitle=this.$route.params.Name
            
        }
    }
}
</script>

<style>
.cover{
    position: relative;
}
.information {
    transform: translateY(-50%);
    background:#fff;
    box-shadow: 0 5px 13px rgba(0,0,0,.16)
}
.information+div{
    position: relative;
    top: -80px;
}
.information li{
    box-sizing: border-box;
    float:left;
    width: 25%;
    text-align: center;
    border-right: 1px solid #eaeaea;
    padding:45px 0;
}
.information li:last-child{
    border-right: 0;
}
.information li .t-num{
    font-size:48px;
    color:#c8161e;
}
.information li p{
    font-size:18px;
}

</style>
