<template>
    <div class="GeneralProduct cover">
        <ul class="GeneralProduct-list clearfix">
            <li v-for="item in list" :key="item.Id">
                <div class="product-item clearfix">
                    <div class="hot" v-if="item.Hot=='True'"></div>  
                    <div class="product-info">
                        <div class="name">
                            {{item.Title}}
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{Id:item.Id}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img :src="item.Image"></div>
                </div>
            </li>            
        </ul>
        <LoadMore>            
            <button class="moreBtn" @click="more" v-if="lastPage" slot="moreBtn">加载更多</button>
            <p v-else>没有更多信息了</p>
        </LoadMore>
          
    </div>
</template>

<script>
export default {
    name:'StarProduct',
    data(){
        return{
            list:[],
            lastPage:true,
            pageIndex:1
        }
    },
    created:function(){
        this.loadList()
    },
    mounted:function(){
        document.querySelector('body').setAttribute('style', 'background:url('+require('../../assets/bg.jpg')+') repeat')
    },
    methods:{
        loadList:function(){
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=list&Object=ProductView&SearchKey=TypeId",{
                params:{
                    SearchTypeId:that.$route.query.id,
                    pageIndex:that.pageIndex,
                    pageSize:6
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
                this.loadList()
            }
        }
    },
    beforeDestroy () {
        document.querySelector('body').setAttribute('style', '')
    },    
    watch:{
        '$route'(to,from){   
            this.list=[];
            this.pageIndex = 1;
            this.lastPage = true;
            this.loadList();
        }
    }
}
</script>
<style scoped>

.GeneralProduct{
    text-align: center;
}
.GeneralProduct-list {
    margin-top:50px;
}
.GeneralProduct-list li{
    float:left;
    width:49%;
    margin-bottom:20px;
}
.GeneralProduct-list li:nth-child(2n){
    margin-left:2%;
}
.product-item{
    background:#fff;
    height:350px;
    transition:all .5s;
}
.product-info .name{
    font-size:18px;
    padding-left: 20%;
}
.product-info a{    
    margin-left:20%;
}
@media screen and (max-width:1000px){
    .GeneralProduct-list{
        padding:0 8px;
    }
    .GeneralProduct-list li{
        width:100%;
        margin-bottom: 10px;
    }
    .GeneralProduct-list li:nth-child(2n){
        margin-left:0;
    }
    .product-item{
        height: 5rem;
    }
    .product-info .name{
        font-size: .4rem;
    }
    .product-info a{
        font-size: 14px;
        line-height: .6rem;
        width: 60%;
        max-width: none;
    }
    .product-item .hot{
        width: 20%;
    }
}
</style>
