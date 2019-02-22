<template>
    <div class="teamView">
        <div class="nameJob">
            {{list.Department}}---{{list.Title}}
        </div>
        <div class="team-info">
            <h3>简介</h3>
            <p>{{list.Description}}</p>
            <p style="text-align:center;padding:30px 0;"><img :src="list.Image" alt=""></p>
            <h3>工作特长</h3>
            <p v-html="list.Content"></p>            
        </div>
        <div class="other-related">
            更多优秀团队和员工
        </div>
        <ul class="team-list clearfix">
            <li @click="tapJump(item.Id)" v-for="item in list.MoreData" :key="item.Id">
                <div class="item-img">
                    <img :src="item.Image" alt="">
                </div>
                <p class="item-name">{{item.Title}}</p>
                <p class="item-job">{{item.Department}}</p>
                <p class="item-intro">{{item.Description}}</p>
            </li>          
        </ul>
    </div>
</template>

<script>
export default {
    name:'teamView',
    data(){
        return{
            list:{
                "MoreData": [ ] //更多优秀团队
            }
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
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=teamdetail",{
                params:{
                    Id:this.$route.query.id
                }
            })
            .then(function(res){
                that.list = res.data.list[0];            
            })
        }
    },
    watch:{
        '$route'(to,from){
            this.loadList()
        }
    }
}
</script>

<style scoped>
.teamView{
    margin-top:40px;
    position: relative;
    padding-bottom: 60px;
}
.nameJob{
    font-size: 16px;
    padding-bottom: 20px;
}
.team-info h3{
    font-size: 24px;
    margin-bottom: 15px;
}
.team-info p{
    padding-bottom:10px;
    text-indent:2em;
    line-height: 24px;
}
.team-list li{
    width:30%;
    float:left;
    text-align: center;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    margin-bottom:4%;
    transition:all .5s;
    cursor: pointer;
}
.team-list li:nth-child(3n-1){
    margin:0 5%;
    margin-bottom:4%;
}
.team-list li:hover{
    box-shadow: 0 5px 13px rgba(0,0,0,.16);
}
.item-img{
    position: relative;
    height:276px;
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
