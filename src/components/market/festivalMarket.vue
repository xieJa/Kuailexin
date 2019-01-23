<template>
    <div class="festival">
           <ul class="clearfix">
               <li @click="tabJump(item.Id)" v-for="item in list" :key="item.id">
                   <div class="festivalPic">
                       <img :src="item.Image" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">{{item.Title}}</div>
                       <p>{{item.Description}}</p>
                   </div>
               </li>                             
           </ul>
            <a href="javascript:;" class="moreBtn" @click="more" v-if="lastPage">加载更多</a>           
           <span style="margin-bottom:20px;display:block;" v-else>没有更多信息了</span>          
    </div>    
</template>

<script>
export default {
    name:'Marketing',
    data(){
        return{
           list:[],
           lastPage:true,
           pageIndex:1
        }
    },
    created:function(){
        this.loadHolidayMarke()
    },
    methods:{
        tabJump:function(id){
            this.$router.push({
                path:'/market/Marketingdetail',
                query:{name:this.$route.query.name,Object:this.$route.query.Object,Id:id}
            })
        },
        loadHolidayMarke:function(){
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=list&Object=HolidayMarketing",{
                params:{
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
                this.loadHolidayMarke()
            }
        }
    }
}
</script>

<style scoped>
.festival{
    padding-top:40px;
    line-height: 26px;
    text-align: center;
}
.festival li{
    float:left;
    width:31%;
    margin-bottom:3%;
    text-align: left;
    position: relative;
    overflow: hidden;
    border:1px solid #b3b3b3;
    transition:all .5s;
}

.festival li:nth-child(3n-1){
    margin:0 3%;
}
.festival li .festivalPic{
    position: relative;
    padding-bottom: 100%;
    overflow: hidden;
}
.festival li .festivalPic img{
    position: absolute;
    max-width: none;
    height:100%;
    left:50%;
    transform: translateX(-50%);
}
.festival li:hover{
    box-shadow: 0 5px 13px rgba(0,0,0,.3);
}

.festival-intro{
    position: absolute;
    top:100%;
    left:0;
    right:0;
    bottom:0;
    padding:30px;
    background:rgba(0,0,0,.68);
    color:#fff;
    transition:all .5s;
    overflow: hidden;
    opacity: 0;
}
.festival li:hover .festival-intro{
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity: 1;
}
.festival-intro .title{
    font-size:16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 20px;
}
.festival-intro .title:after{
    content:'';
    position: absolute;
    left:0;
    bottom:0;
    width:52px;
    height:2px;background:#fff;
}
.festival-intro p{
    position: absolute;
    bottom:30px;
    right:30px;
    left:30px;
    text-indent:2em;
}
</style>
