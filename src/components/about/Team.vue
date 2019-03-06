<template>
    <div class="team">
        <p class="describe">我们拥有一支结构完善优秀且高效的团队，他们肩负着对加盟商一丝不苟的服务...</p>
        <ul class="team-list clearfix">
            <li @click="tapJump(item.Id)" v-for="item in list" :key="item.Id">
                <div class="item-img">
                    <img :src="'/'+item.Image" alt="" :onerror="errorImg">
                </div>
                <p class="item-name">{{item.Title}}</p>
                <p class="item-job">{{item.Department}}</p>
                <p class="item-intro">{{item.Description}}</p>
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
    name:'team',
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
    methods:{
        tapJump:function(id){
            this.$router.push({
                path: '/about/优秀员工',
                query:{
                    id:id
                }
            })
        },
        loadList:function(){
            let that =this
            this.$axios.get('/ajaxdata.aspx?Action=list&Object=Team',{
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
            console.log( that.list)
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
.team {
    position: relative;
    padding-top:40px;
    text-align: center;}
.describe{
    font-size:16px;
    color:#000;
    text-align: left;
}
.team-list li{
    width:30%;
    float:left;
    text-align: center;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    margin-top:4%;
    transition:all .5s;
    cursor: pointer;
}
.team-list li:nth-child(3n-1){
    margin:0 5%;
    margin-top:4%;
}
.team-list li:hover{
    box-shadow: 0 5px 13px rgba(0,0,0,.16);
}
.item-img{
    position: relative;
    padding-bottom: 100%;
    overflow: hidden;
}
.item-img img{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    max-height:100%;
    max-width: none;
}
.item-name{
    font-size:20px;
    padding-top:10px;
    line-height: 100%;
}
.item-job{
    padding:10px 0;
}
.item-intro{
    color:#999;
    height:42px;
    padding:0 10px 10px 10px;
    overflow: hidden;
}

</style>
