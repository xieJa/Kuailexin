<template>
    <div class="newMarket">
           <ul class="clearfix">
               <li @click="tabJump(item.Id)" v-for="item in list" :key="item.Id">
                   <div class="newProPic">                       
                       <img :src="item.Image" alt="">
                   </div>
                   <p>{{item.Title}}</p>
                   <span>{{item.StartDate}} — {{item.EndDate}}</span>
                   <em class="new-icon" v-if="item.New=='是'"><img src="@/assets/new_icon.png" alt=""></em>
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
        this.list = [];
        this.loadNewProduct();
    },
    methods:{
        tabJump:function(id){
            this.$router.push({
                path:'/market/Marketingdetail',
                query:{name:this.$route.query.name,Object:this.$route.query.Object,Id:id}
            })
        },
        loadNewProduct:function(){
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=list",{
                params:{
                    Object:that.$route.query.Object,
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
            })
        },       
        more:function(){
            if(this.lastPage){
                this.loadNewProduct()
            }
        }
    },
    watch:{
        '$route'(to,from){   
            this.list = [];
            this.pageIndex = 1;
            this.loadNewProduct();
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
    width:48%;
    margin-bottom:4%;
    text-align: left;
    position: relative;
}

.newMarket li:nth-child(2n){
    margin-left:4%;
}
.newMarket li .newProPic{
    transition:all .5s;
    position: relative;
    padding-bottom: 59%;
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
}
.newMarket span{
    color:#999999
}
.newMarket li em{
    position:absolute;
    right:-2.2%;
    top:-2.2%;
    width:18%;
}
</style>
