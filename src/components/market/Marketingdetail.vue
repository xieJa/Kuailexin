<template>
    <div class="Market-detail cover">
        <crumbs>
            <router-link :to="{path:'/market/Marketing',query:{name:this.$route.query.name,Object:this.$route.query.Object}}">{{this.$route.query.name}}</router-link>>
            <a href="javascript:;">{{list.Title}}</a>
        </crumbs>
        <div class="market-info">
            <div class="market-info-head">
                <h2>{{list.Title}}</h2>
                <span><i class="icon iconfont icon-personal-center"></i>来源：{{list.Source}}</span>
                <span><i class="icon iconfont icon-shijian"></i>时间：{{list.CreateDate}}</span>
            </div>
            <div class="market-info-body" v-html="list.Content">
            </div>
            <div class="page-turning clearfix">
                <div class="paging page-prev">
                    <router-link :to="{path:'/Marketingdetail',query:{name:this.$route.query.name,Object:this.$route.query.Object,Id:list.Pid}}"  v-show="list.Pid!=''">上一篇</router-link>         
                    <p>{{list.Ptitle}}</p>           
                </div>
                <div class="paging page-next" style="float:right;">
                    <router-link  :to="{path:'/Marketingdetail',query:{name:this.$route.query.name,Object:this.$route.query.Object,Id:list.Nid}}"  v-show="list.Nid!=''">下一篇</router-link>         
                    <p>{{list.Ntitle}}</p>           
                </div>
            </div>
        </div>
        <div class="page-qrcode">
            <p>快乐星怎么样？登录官网获取快乐星汉堡最新资讯，就近考察品尝快乐星汉堡美味！出彩微信会员系统，多重惊喜和优惠，诚邀您来体验!24小时咨询热线：400-035-2688。</p>
            <img src="@/assets/qrcode2.jpg" alt="">
        </div>
    </div>
</template>

<script>
import crumbs from '../crumbs'
export default {
    name:'Marketing',
    data(){
        return{
            list:[]
        }
    },
    created:function(){
        this.loadList()
    },
    methods:{
        loadList:function(){
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=loaddetail",{
                params:{
                    Object:that.$route.query.Object,
                    Id:that.$route.query.Id
                }
            })
            .then(function(res){
                that.list=res.data.list[0]
            })
        }
    },
    components:{
        crumbs
    },
    watch:{
        '$route'(to,from){
            this.loadList()
        }
    }
}
</script>

<style scoped>
.market-info{    
    border:1px solid #e1e1e1;
    padding:30px;
}
.market-info h2{
    
    font-size:22px;
    padding-bottom:20px;
    font-weight: bold;
}
.market-info-head{
    text-align: center;
    padding-top:20px;
}
.market-info-head span{
    color:#999;
    margin:0 30px;
    line-height: 20px;
    padding-bottom: 25px;
    display:inline-block;
}
.market-info-head span i{
    margin-right:5px;
    font-size: 20px;
    color:#ababab;
    float: left;
}
.market-info-body{
    padding:10px 0;
}
.page-turning{
    margin-top:50px;
    padding:30px 0;
    border-top:1px solid #e1e1e1;
}
.page-turning .paging{
    float:left;
    width:50%;
   
}
.page-turning .paging a{
    display:inline-block;
    width:165px;
    height:45px;
    text-align: center;
    line-height: 45px;
    margin-bottom:20px;
    border:1px solid #b3b3b3;
    transition:all .3s;
}
.page-turning .paging a:hover{
    color:#fff;
    border-color:#c51720;
    background:#c51720;
}
.page-turning .paging p{
    transition:all .3s;
}
.page-turning .paging a:hover+p{
    color:#c51720;
}
.page-turning .page-next{
    text-align: right;
}
@media screen and (max-width:1000px){ 
    .market-info{        
        padding:10px;
    }
    .market-info h2{
        font-size: 20px;
    }
    .market-info-head span{
        margin:0 5px;
        padding-bottom: 10px;
    }
}
</style>
