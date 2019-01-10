<template>
    <div class="newMarket">
           <ul class="clearfix">
               <li @click="tabJump()">
                   <div class="newProPic">                       
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星怎么样|产品口味好才是核心竞争力！云南王先生一吃定情</p>
                   <span>有些人忙碌拼搏了一辈子，可能也攒不了多少积蓄；而有的人善于发现市场，并勇敢迈出实现的一步，成功突破阶级，从此不再为别人打工！可能大家听到...</span>                   
               </li>
               <li>
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星怎么样|产品口味好才是核心竞争力！云南王先生一吃定情</p>
                   <span>有些人忙碌拼搏了一辈子，可能也攒不了多少积蓄；而有的人善于发现市场，并勇敢迈出实现的一步，成功突破阶级，从此不再为别人打工！可能大家听到...</span>                   
               </li>
               <li>
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星怎么样|产品口味好才是核心竞争力！云南王先生一吃定情</p>
                   <span>有些人忙碌拼搏了一辈子，可能也攒不了多少积蓄；而有的人善于发现市场，并勇敢迈出实现的一步，成功突破阶级，从此不再为别人打工！可能大家听到...</span>                   
               </li>
               <li>
                   <div class="newProPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <p>快乐星怎么样|产品口味好才是核心竞争力！云南王先生一吃定情</p>
                   <span>有些人忙碌拼搏了一辈子，可能也攒不了多少积蓄；而有的人善于发现市场，并勇敢迈出实现的一步，成功突破阶级，从此不再为别人打工！可能大家听到...</span>                   
               </li>
           </ul>
           <a href="#" class="moreBtn" style="margin-bottom:60px;margin-top:0;">加载更多</a>           
    </div>    
</template>

<script>
export default {
    name:'Marketing',
    data(){
        return{
           newIcon:true,
           asb:'123'
        }
    },
    methods:{
        tabJump:function(){
            this.$router.push({
                path:'/newdetail',
                query:{name:111}
            })
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
</style>
