<template>
    <div class="StarProduct cover">
        <ul class="StarProduct-list">
            <li>
                <div class="product-item clearfix">
                    <div class="hot"></div>    
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
                    <div class="hot"></div>    
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
                    <div class="hot"></div>    
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
                    <div class="hot"></div>    
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

.StarProduct{
    text-align: center;
}
.StarProduct-list {
    margin-top:50px;
}
.StarProduct-list li{
    margin-bottom:35px;
}
.product-item{
    background:#fff;
    height:515px;
    transition:all .5s;
}
.product-info .name{
    font-size:30px;
    padding-left: 20%;
}
.product-info a{
    font-size:16px;
    line-height: 52px;
    border-radius: 26px;
    max-width: 233px;
    margin-left:20%;
}
</style>
