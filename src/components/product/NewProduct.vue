<template>
    <div class="newProduct cover">
        <ul class="newProduct-list">
            <li @click="tapJump()">
                <div class="ad-pic"><img src="@/assets/ad_01.jpg"></div>
                <div class="ad-inner">
                    <div class="ad-bt">快乐星昔果乐</div>
                    <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                    <ol>
                        <li>新鲜西柚</li>
                        <li>鲜奶</li>
                    </ol>
                </div>
            </li>
            <li>
                <div class="ad-pic"><img src="@/assets/ad_01.jpg"></div>
                <div class="ad-inner">
                    <div class="ad-bt">快乐星昔果乐</div>
                    <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                </div>
            </li>
            <li>
                <div class="ad-pic"><img src="@/assets/ad_01.jpg"></div>
                <div class="ad-inner">
                    <div class="ad-bt">快乐星昔果乐</div>
                    <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                </div>
            </li>
            <li>
                <div class="ad-pic"><img src="@/assets/ad_01.jpg"></div>
                <div class="ad-inner">
                    <div class="ad-bt">快乐星昔果乐</div>
                    <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                </div>
            </li>
        </ul>
        <button class="moreBtn">加载更多</button>        
    </div>
</template>

<script>
export default {
    name:'NewProduct',
    methods:{
        tapJump:function(){
            this.$router.push({
                path:'/Product/ProductDetail',
                query:{name:'快乐星昔果乐'}               
            })
        }
    },
    
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
.newProduct-list .ad-pic{width: 60%;display:inline-block;}
.newProduct-list .ad-pic img{width:100%;}
.newProduct-list .ad-inner{width: 30%;text-align: left;position: absolute;left:60%;top:50%;transform:translateY(-50%);padding:0 5%;}
.newProduct-list .ad-bt{font-size: 24px;margin-bottom: 36px;}
.newProduct-list p{font-size: 14px;color: #999999;max-height: 64px;overflow: hidden;}
.newProduct-list li:nth-child(even){
    text-align: right;
}
.newProduct-list li:nth-child(even) .ad-inner{
    left:0%;
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
</style>
