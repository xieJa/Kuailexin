<template>
    <div class="festival">
           <ul class="clearfix">
               <li @click="tabJump()">
                   <div class="festivalPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">情满五月五，快乐星汉堡祝大家端午安康！</div>
                       <p>据史书记载，顺阳在上，五月是仲夏，它的第一个五日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”...</p>
                   </div>
               </li>
               <li @click="tabJump()">
                   <div class="festivalPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">情满五月五，快乐星汉堡祝大家端午安康！</div>
                       <p>据史书记载，顺阳在上，五月是仲夏，它的第一个五日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”...</p>
                   </div>
               </li>
               <li @click="tabJump()">
                   <div class="festivalPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">情满五月五，快乐星汉堡祝大家端午安康！</div>
                       <p>据史书记载，顺阳在上，五月是仲夏，它的第一个五日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”...</p>
                   </div>
               </li>
               <li @click="tabJump()">
                   <div class="festivalPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">情满五月五，快乐星汉堡祝大家端午安康！</div>
                       <p>据史书记载，顺阳在上，五月是仲夏，它的第一个五日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”...</p>
                   </div>
               </li>
               <li @click="tabJump()">
                   <div class="festivalPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">情满五月五，快乐星汉堡祝大家端午安康！</div>
                       <p>据史书记载，顺阳在上，五月是仲夏，它的第一个五日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”...</p>
                   </div>
               </li>
               <li @click="tabJump()">
                   <div class="festivalPic">
                       <img src="@/assets/market.jpg" alt="">
                   </div>
                   <div class="festival-intro">
                       <div class="title">情满五月五，快乐星汉堡祝大家端午安康！</div>
                       <p>据史书记载，顺阳在上，五月是仲夏，它的第一个五日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”...</p>
                   </div>
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
           
        }
    },
    methods:{
        tabJump:function(){
            this.$router.push({
                path:'/market/Marketingdetail',
                query:{name:111}
            })
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
    padding-bottom: 106%;
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
