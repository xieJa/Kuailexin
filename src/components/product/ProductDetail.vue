<template>
    <div class="productDetail">
        <crumbs v-if="!this.$M"></crumbs>
        <div class="cover">
            <h2 class="product-name">{{this.$route.query.name}}</h2>
            <div class="swiper-container product-show">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="@/assets/pro01.jpg"></div>
                    <div class="swiper-slide"><img src="@/assets/pro01.jpg"></div>
                    <div class="swiper-slide"><img src="@/assets/pro01.jpg"></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-button-prev swiper-button-black product-prev"></div>
                <div class="swiper-button-next swiper-button-black product-next"></div>   
                <div class="hot"></div>
            </div>
            <div class="product-inner">
                <p>配料：面包胚、鸡腿肉、辣味腌料、炸鸡粉、起酥油、蛋黄酱、球生菜</p>
<p>介绍：整块无骨鸡腿头，快乐星汉堡秘制腌料腌制搭配浓郁汉堡酱，松软面包和新鲜蔬菜，香脆鲜辣多汁，看似简单，却最具功夫，都只为带给您最经典美味的汉堡</p>
            </div>
            <dl class="share">
                <dt>分享：</dt>
                <dd>
                    <a href="#" class="sina"></a>
                    <a href="#" class="wechat"></a>
                </dd>
            </dl>
            <div class="other-related">
                猜您喜欢
            </div>
            <div class="relative">
            <div class="swiper-container product-other">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="product-item clearfix">
                            <div class="hot"></div>    
                            <div class="product-info">
                                <div class="name">
                                    脆皮全鸡
                                </div>
                                <router-link :to="{name:'ProductDetail',params:{name:'脆皮全鸡'}}">查看详情</router-link>
                            </div>                        
                            <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-item clearfix">
                            <div class="hot"></div>    
                            <div class="product-info">
                                <div class="name">
                                    脆皮全鸡
                                </div>
                                <router-link :to="{name:'ProductDetail',params:{name:'脆皮全鸡'}}">查看详情</router-link>
                            </div>                        
                            <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-item clearfix">
                            <div class="hot"></div>    
                            <div class="product-info">
                                <div class="name">
                                    脆皮全鸡
                                </div>
                                <router-link :to="{name:'ProductDetail',params:{name:'脆皮全鸡'}}">查看详情</router-link>
                            </div>                        
                            <div class="product-pic"><img src="@/assets/pro01.jpg"></div>
                        </div>
                    </div>
                </div>                
            </div>
            <!-- 如果需要分页器 -->
                <div class="swiper-button-prev swiper-button-black product-other-prev"></div>
                <div class="swiper-button-next swiper-button-black product-other-next"></div>   
            </div>
        </div>
        
    </div>
</template>

<script>
import crumbs from '../crumbs'
export default {
    name:'productDetail',    
    data(){
        return{
            childValue:false
        }
    },
    created:function(){
        this.$emit('childViewShow', true)
    },
    mounted:function(){
        new this.$Swiper ('.product-show', {
            prevButton:'.product-prev',
		    nextButton:'.product-next',
        });
        let other = this.$M ? 1 : 2;
        new this.$Swiper ('.product-other', {
            slidesPerView : other,
            prevButton:'.product-other-prev',
		    nextButton:'.product-other-next',
        });
    },
    destroyed:function(){
        this.$emit('childViewShow', false)
    },
    components:{
        crumbs
    }
}
</script>

<style scoped>
.product-name{
    font-size:26px;
    font-weight:bold
}
.product-show{
    border:1px solid #cfcfcf;
    margin-top:20px;
}
.swiper-slide{
    text-align: center;
}
.product-show .swiper-button-black{
        opacity: 0.6;
}
.product-show .swiper-button-disabled{
    opacity: 0.2;
}
.relative .swiper-button-black{
        opacity: 0.6;
        transform:scale(.8)
}
.relative .swiper-button-disabled{
    opacity: 0.2;
}
.product-inner{
    padding:30px 0;
    font-size:18px;
    color:#666;
}
.share dt{
    font-size:18px;
}
.relative{
    margin-top:-20px;
}
.product-other {
    margin:0 40px;
}
.product-item{
  height:230px;  
  margin:20px;
}
@media screen and (max-width:1000px){
    .product-name{
        font-size:.36rem;
        margin-top:20px;
        margin:20px 10px 0 10px;
    }
    .product-show{
        margin:.2rem 10px;
    }
    .hot{
        width:20%;
    }
    .product-inner,.share{
        padding:10px;
        font-size: 14px;        
    }
    .other-related{
        margin-top:1rem;
        border-top:10px solid #f1f1f1;
        padding:0 10px;
    }
    .other-related:after{
        left:10px;
        width: 1.5em;
    }
    .product-other{
        margin:0 20px;
    }
    .relative .swiper-button-black,.product-show .swiper-button-black{
            transform: scale(.5);
    }    
    .product-info a{
        line-height: .6rem;
    }
}
</style>
