<template>
    <div class="newProduct cover">
        <ul class="newProduct-list">
            <li v-for="item in list" :key="item.Id">
                <div class="ad-pic"><img :src="'/'+item.Image"></div>
                <div class="ad-inner">
                    <div class="ad-bt">{{item.Title}}</div>
                    <p>{{item.Description}}</p>
                    <ol class="clearfix">
                        <li v-for="self in item.Products" :key="self.Id">{{self.Title}}</li>
                    </ol>
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
    name:'NewProduct',
    data(){
        return{
            list:[],
            lastPage:true,
            pageIndex:1,
        }
    },
    created:function(){
        this.loadList()
    },
    methods:{        
        loadList:function(){
            let that = this;
            this.$axios.get('/ajaxdata.aspx?Action=newproductlist',{
                params:{
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
    }
    
    
}
</script>

<style scoped>
.newProduct {
    padding:40px 0 60px 0;
    text-align: center;
}
.newProduct-list>li{
    border:1px solid #c4c4c4;
    position: relative;
    margin-bottom:26px;
    text-align: left;
    transition: all .5s;
    cursor: pointer;
}
.newProduct-list>li:hover{
    box-shadow: 0 5px 13px rgba(0,0,0,.16);
}
.newProduct-list .ad-pic{width: 60%;position:relative;padding-bottom: 35.4%;overflow: hidden;}
.newProduct-list .ad-pic img{width:100%;position: absolute;left:0;}
.newProduct-list .ad-inner{width: 30%;text-align: left;position: absolute;left:60%;top:50%;transform:translateY(-50%);padding:0 5%;}
.newProduct-list .ad-bt{font-size: 24px;margin-bottom: 36px;}
.newProduct-list p{font-size: 14px;color: #999999;max-height: 64px;overflow: hidden;}
.newProduct-list li:nth-child(even){
    text-align: right;
}
.newProduct-list li:nth-child(even) .ad-inner{
    left:0%;
}
.newProduct-list li:nth-child(even) .ad-pic{
    left:40%;
}
.newProduct-list ol{
    margin-top:40px;
}
.newProduct-list ol li{
    float:left;
    margin-right:26px;
    padding-left:15px;
    color:#c8161e;
    border:0;
    position: relative;
}
.newProduct-list ol li::before{
    content:'';
    display: block;
    border-radius: 50%;
    width:8px;
    height:8px;
    background:#c8161e;
    position: absolute;
    left:0;
    top:50%;
    margin-top:-4px;
}
@media screen and (max-width:1000px){
    .newProduct{
        background:#eaeaea;
        margin: 40px 0 0 0;
        padding-top:0;
    }
    .newProduct-list>li{
        margin-bottom:10px;
        background:#fff;
        padding-bottom:.1rem;
        border-color:#d8d8d8;
    }
    .newProduct-list .ad-pic{
        width:100%;
        padding:0;
        position: initial;
    }
    .newProduct-list .ad-pic img{
        position:initial;
    }
    .newProduct-list .ad-inner{
        position:initial;
        width: 100%;
        box-sizing: border-box;
        transform: translateY(0);
    }
    .newProduct-list .ad-bt{
        font-size:.36rem;        
        margin:.36rem 0 0 0;
    }
    .newProduct-list ol{
        margin-top:.2rem;
        margin-bottom:.2rem;
    }
}
</style>
