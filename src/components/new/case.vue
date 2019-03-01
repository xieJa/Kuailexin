<template>
    <div class="newMarket">
           <ul class="clearfix">
               <li @click="tabJump(item.Id)" v-for="item in list" :key="item.Id">
                   <div class="newProPic">                       
                       <img :src="item.Image" alt="">
                   </div>
                   <p>{{item.Title}}</p>
                   <span>{{item.Description}}</span>                   
               </li>               
           </ul>
           <LoadMore>            
                <button class="moreBtn"  @click="more" v-if="lastPage" slot="moreBtn">加载更多</button>
                <p v-else>没有更多信息了</p>
            </LoadMore> 
    </div>    
</template>

<script>
export default {
    name:'Marketing',
    data(){
        return{
           list:[],
           newIcon:true,
           asb:'123',
           lastPage:true,
           pageIndex:1
        }
    },
    created:function(){
        this.loadCase();
    },
    methods:{
        tabJump:function(id){
            let routeUrl = this.$router.resolve({
                path:'/newdetail',
                query:{TypeId:this.$route.query.Id,Id:id}
            })
            window.open(routeUrl.href, '_blank');
        },
        loadCase:function(){
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=list&Object=news&SearchKey=TypeId",{
                params:{
                    SearchTypeId:that.$route.query.Id,
                    pageIndex:that.pageIndex,
                    pageSize:6,
                }
            })
            .then(function(res){
                for(let i=0;i<res.data.list.length;i++){
                    that.list.push(res.data.list[i])
                }
                if(res.data.list.length==6){
                    that.pageIndex++
                }else{
                    that.lastPage = false;
                }  
                console.log(res)
            })
        },       
        more:function(){
            if(this.lastPage){
                this.loadCase()
            }
        }
    }
}
</script>

<style scoped>
.newMarket{
    padding-top:40px;
    line-height: 26px;
    text-align: center;
}
.newMarket li{
    float:left;
    width:46%;
    margin-bottom:8%;
    text-align: left;
    position: relative;
}

.newMarket li:nth-child(2n){
    margin-left:8%;
}
.newMarket li .newProPic{
    transition:all .5s;
    position: relative;
    padding-bottom: 61%;
    overflow: hidden;
}
.newMarket li .newProPic img{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}
.newMarket li:hover .newProPic{
    box-shadow: 0 5px 13px rgba(0,0,0,.3);
}
.newMarket p{
    font-weight:bold;
    margin-top:15px;
    font-size: 16px;
}
.newMarket span{
    color:#999999;
    line-height: 1.5;
    display: block;
    height:42px;
    overflow: hidden;
}

@media screen and (max-width:600px){
    .newMarket li{
        width:100%;
    }
    .newMarket li:nth-child(2n){
        margin-left:0;
    }
    .newMarket p{
        line-height: 1.2;
        margin-bottom:5px;
    }
}
@media screen and (max-width:1200px){
    .newMarket{
        padding:0 10px;
        padding-top: 40px;
    }
}
</style>
