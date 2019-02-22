<template>
    <div class="about">       
        <page-banner :pageBanner="pageBanner"></page-banner>
        
        <div class="cover">
            <ul class="information clearfix" v-if="pTitle=='公司简介'">
                <li>
                    <span class="t-num">
                        <animated-integer v-bind:value="parseInt(memoinfo.Data1)"></animated-integer>
                    </span>
                    
                    <p>成立于{{memoinfo.Data1}}年</p>
                </li>
                <li>
                    <span class="t-num">
                        <animated-integer v-bind:value="parseInt(memoinfo.Data2)"></animated-integer>+
                    </span>
                    <p>{{memoinfo.Data2}}名专业伙伴为您服务</p>
                </li>
                <li>
                    <span class="t-num">
                        <animated-integer v-bind:value="parseInt(memoinfo.Data3)"></animated-integer>+
                    </span>
                    <p>{{memoinfo.Data3}}加盟商与您一起成长</p>
                </li>
                <li>
                    <span class="t-num">
                        <animated-integer v-bind:value="parseInt(memoinfo.Data4)"></animated-integer>+
                    </span>
                    <p>{{memoinfo.Data4}}全国粉丝会员客户</p>
                </li>
            </ul>
            <PageTitle :title="pTitle" :description="description" v-if="pTitle!='公司简介'"></PageTitle>                    
            <TimeLine v-if="pTitle=='发展历程'"></TimeLine>
            <Team v-else-if="pTitle=='优秀团队'"></Team>
            <TeamView v-else-if="pTitle=='优秀员工'"></TeamView>
            <PageView :content="memoinfo.Content" v-else></PageView>
            <JoinHotline  v-if="pTitle!='优秀团队' && pTitle!='优秀员工'"></JoinHotline>
        </div>
    </div>
</template>

<script>
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
            memoinfo:[{
                "Data1": '', //成立时间
                "Data2": '', //服务参数
                "Data3": '', //加盟商参数
                "Data4": '',   //会员客户参数
                "Content":'' 
            }]
        }
    },
    components:{
        TimeLine,JoinHotline,Team,TeamView
    },
    created:function(){
        let that = this;
        // 公司简介
        this.$axios.get('/ajaxdata.aspx?Action=memoinfo',{
            params:{
                Type:'公司简介'
            }
        })
        .then(function(res){             
            that.memoinfo = res.data.list[0]
        })
        .catch(function(err){
            console.log(err)
        })

        this.$axios.get('/ajaxdata.aspx?Action=memoinfo',{
            params:{
                Type:this.$route.params.Name
            }
        })
        .then(function(res){             
            that.memoinfo.Content = res.data.list[0].Content
        })
        .catch(function(err){
            console.log(err)
        })

        if(this.$route.params.Name == '优秀团队'){
            this.description = '月度优秀部门和优秀员工展播'
        }else{
            this.description = ''
        }
    },
    watch:{
        '$route'(to,from){            
            if(this.$route.params.Name == '优秀团队'){
                this.description = '月度优秀部门和优秀员工展播'
            }else{
                this.description = ''
            }
            this.pTitle=this.$route.params.Name
            let that = this;
            this.$axios.get('/ajaxdata.aspx?Action=memoinfo',{
                params:{
                    Type:this.$route.params.Name
                }
            })
            .then(function(res){                
                that.memoinfo.Content = res.data.list[0].Content
            })
            .catch(function(err){
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
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
@media screen and (max-width: 1000px){
    .information{
        margin:0 10px;
        transform: translateY(-30%);
    }
    .information li{
        width:50%;
        padding:.45rem 0;
        border-top: 1px solid #eaeaea;
    }
    .information li .t-num{
        font-size:.48rem;
    }
    .information li p{
        font-size:.18rem;
    }
    .information+div{
        top:-60px;
    }
}
</style>
