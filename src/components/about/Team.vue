<template>
    <div class="team">
        <p class="describe">我们拥有一支结构完善优秀且高效的团队，他们肩负着对加盟商一丝不苟的服务...</p>
        <ul class="team-list clearfix">
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
        </ul>
        <button class="moreBtn">加载更多</button>
    </div>
</template>

<script>
export default {
    name:'team',
    methods:{
        tapJump:function(){
            this.$router.push({
                path: '/about/优秀个人',
                query:{
                    name:'周云重'
                }
            })
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
