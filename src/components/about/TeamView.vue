<template>
    <div class="teamView">
        <div class="nameJob">
            培训部资深培训师---周云重
        </div>
        <div class="team-info">
            <h3>个人简介</h3>
            <p>始终坚持服务为导向，加强公司内部管理，积极优化组织结构,公司经过硬件和软件的系统化建设及优化升级，体系的不断完善，使公同得以迅速发展。以“专心用心放心”的经营理念规范提升专业度和服务模块</p>
            <p style="text-align:center;padding:30px 0;"><img src="@/assets/team01.jpg" alt=""></p>
            <h3>工作特长</h3>
            <p>始终坚持服务为导向，加强公司内部管理，积极优化组织结构，公司经过硬件和软件的系统化建设及优化升级，体系的不断完善，使公司得以迅速发展。以“专心用心放心”的经营理念规范提升专业度和服务模块，从加盟开店前期选址、装修、开业、培训到后期门店营运、管理、产品、活动、线上线下推广，“快乐星汉堡” 已形成了加盟连锁经营的完整体系。</p>
            <p style="text-align:center;padding:30px 0;"><img src="@/assets/team01.jpg" alt=""></p>
            <p>始终坚持服务为导向，加强公司内部管理，积极优化组织结构，公司经过硬件和软件的系统化建设及优化升级，体系的不断完善，使公司得以迅速发展。以“专心用心放心”的经营理念规范提升专业度和服务模块，从加盟开店前期选址、装修、开业、培训到后期门店营运、管理、产品、活动、线上线下推广，“快乐星汉堡” 已形成了加盟连锁经营的完整体系。</p>
        </div>
        <div class="moreTeam">
            更多优秀团队
        </div>
        <ul class="team-list clearfix">
            <li @click="tapJump()">
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li>
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>
            <li>
                <div class="item-img">
                    <img src="@/assets/team-item.jpg" alt="">
                </div>
                <p class="item-name">周云重</p>
                <p class="item-job">门店培训师</p>
                <p class="item-intro">8年西式快餐门店和培训经验，做事一丝不苟</p>
            </li>            
        </ul>
    </div>
</template>

<script>
export default {
    name:'teamView'
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
.moreTeam{
    font-size:18px;
    position: relative;
    line-height: 46px;
    margin-bottom: 30px;
    margin-top:100px;
}
.moreTeam:after{
    content:'';
    display:block;
    position: absolute;
    left:0;
    bottom:0;
    width:40px;
    height:2px;
    background:#c8161e;
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
