<template>
    <div class="GeneralProduct cover">
        <ul class="GeneralProduct-list">
            <li>
                <div class="product-item clearfix">
                    <div class="product-info">
                        <div class="name">
                            脆皮全鸡
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{name:'脆皮全鸡'}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                </div>
            </li>
            <li>
                <div class="product-item clearfix">
                    <div class="product-info">
                        <div class="name">
                            脆皮全鸡
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{name:'脆皮全鸡'}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                </div>
            </li>
            <li>
                <div class="product-item clearfix">
                    <div class="product-info">
                        <div class="name">
                            脆皮全鸡
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{name:'脆皮全鸡'}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                </div>
            </li>
            <li>
                <div class="product-item clearfix">
                    <div class="product-info">
                        <div class="name">
                            脆皮全鸡
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{name:'脆皮全鸡'}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                </div>
            </li>
            <li>
                <div class="product-item clearfix">
                    <div class="product-info">
                        <div class="name">
                            脆皮全鸡
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{name:'脆皮全鸡'}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                </div>
            </li>
            <li>
                <div class="product-item clearfix">
                    <div class="product-info">
                        <div class="name">
                            脆皮全鸡
                        </div>
                        <router-link :to="{path:'/Product/ProductDetail',query:{name:'脆皮全鸡'}}">查看详情</router-link>
                    </div>                        
                    <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                </div>
            </li>
        </ul>
        <button class="moreBtn">加载更多</button>        
    </div>
</template>

<script>
export default {
    name:'StarProduct',
    mounted:function(){
        document.querySelector('body').setAttribute('style', 'background:url('+require('../../assets/bg.jpg')+') repeat')
    },
    beforeDestroy () {
        document.querySelector('body').setAttribute('style', '')
    }
}
</script>
<style scoped>

.GeneralProduct{
    text-align: center;
}
.GeneralProduct-list {
    margin-top:50px;
}
.GeneralProduct-list li{
    float:left;
    width:49%;
    margin-bottom:20px;
}
.GeneralProduct-list li:nth-child(2n){
    margin-left:2%;
}
.product-item{
    background:#fff;
    height:350px;
    transition:all .5s;
}
.product-info .name{
    font-size:18px;
    padding-left: 20%;
}
.product-info a{    
    margin-left:20%;
}
</style>
