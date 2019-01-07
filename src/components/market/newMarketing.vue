<template>
    <div class="newMarket">
           <ul class="clearfix">
               <li @click="tabJump()">
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星汉堡新品来袭！“性感”口味，在线撩你，还等什么~</p>
                   <span>2015-07-20 — 2015-07-21</span>
                   <em class="new-icon" v-if="this.new"><img src="@/assets/new_icon.png" alt=""></em>
               </li>
               <li>
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星汉堡新品来袭！“性感”口味，在线撩你，还等什么~</p>
                   <span>2015-07-20 — 2015-07-21</span>
                   <em class="new-icon" v-if="this.new"><img src="@/assets/new_icon.png" alt=""></em>
               </li>
               <li>
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星汉堡新品来袭！“性感”口味，在线撩你，还等什么~</p>
                   <span>2015-07-20 — 2015-07-21</span>
                   <em class="new-icon" v-if="this.new"><img src="@/assets/new_icon.png" alt=""></em>
               </li>
               <li>
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星汉堡新品来袭！“性感”口味，在线撩你，还等什么~</p>
                   <span>2015-07-20 — 2015-07-21</span>
                   <em class="new-icon" v-if="this.new"><img src="@/assets/new_icon.png" alt=""></em>
               </li>
           </ul>
           <a href="#" class="moreBtn">加载更多</a>           
    </div>    
</template>

<script>
export default {
    name:'Marketing',
    data(){
        return{
           new:true
        }
    },
    methods:{
        tabJump:function(){
            this.$router.push({
                path:'/market/Marketingdetail',
                query:{name:111}
            })
        }
    },
    watch:{
        '$route':function(){
             this.new = this.$route.query.new
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
