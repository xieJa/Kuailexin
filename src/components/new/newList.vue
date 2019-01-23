<template>
    <div class="newlist">
        <ul>
            <li class="clearfix" v-for="(item,index) in list" :key="index">
                <div class="newPic">
                    <img :src="item.Image" alt="">
                </div>
                <div class="new-inner">
                    <div class="new-title">{{item.Title}}</div>
                    <div class="new-date">{{item.CreateDate}}</div>
                    <div class="new-intro">{{item.Description}}</div>
                    <router-link :to="{path:'/newdetail',query:{TypeId:$route.query.Id,Id:item.Id}}">查看详情    ></router-link>
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
    name:'newlist',
    data(){
        return{
            list:[],
            lastPage:true,
            pageIndex:1,
        }
    },
    created:function(){
        this.loadNewProduct()
    },
    methods:{
        loadNewProduct:function(){
            console.log(this.pageIndex)
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
.newlist{
    margin-top:40px;
}
.newlist li{
    margin-bottom:60px;
}
.newlist .newPic{
    float:left;
    width:35%;
    overflow: hidden;
    position: relative;
}
.newlist .newPic:after{
    content:'';
    display: block;
    padding-bottom:68%;
}
.newlist .newPic img{
    max-width: none;
    height:100%;
    position: absolute;
    left:50%;
    transform:translateX(-50%)
}
.new-inner{
    float:left;
    width:60%;
    margin-left:5%;
}
.new-inner .new-title{
    font-size:16px;
    font-weight: bold;
    padding-top:15px;
}
.new-inner .new-date{
    color:#999999;
    line-height: 40px;
}
.new-inner .new-intro{
    height:66px;
    margin:4% 0;
    overflow: hidden;
}
.new-inner a{
    display: block;
    width:210px;
    height:43px;
    text-align: center;
    line-height: 43px;
    color:#999999;
    border:1px solid #c7c7c7;
    transition:all .3s;
}
.new-inner a:hover{   
    background:#c8161e;
    color:#fff;
    border:1px solid #c8161e;
}

@media screen and (max-width:1000px){
    .newlist{
        background:#f1f1f1;
    }
    .newlist li{
        padding:10px;
        background:#fff;
        margin-bottom:10px;
    }
    .newlist .newPic{
        width: 100%;
    }
    .new-inner{
        width: 100%;        
        margin-left: 0;
    }
    .new-inner .new-intro{
        margin:0;
        height: 64px;
    }
    .new-inner a{
        margin:20px auto;
        border:0;
        background:#c8161e;
        color:#fff;
        width: 180px;
        height: 36px;
        line-height: 36px;
    }
}
</style>
