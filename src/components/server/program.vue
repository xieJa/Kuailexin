<template>
    <div class="program">
        <h3>特许加盟简述</h3>
        <p>特许加盟也称之为特许经营，在中国习惯口语加盟.是指特许者将自已所持有的商标、商号、商品、专利和持有技木、经菅模式等以特忤经营合同的形式授予被特许者使用，被特许者按合同规定，在特许者统一的模式下从事经营活劫，并向特许者支付相应费用.特许企业的存在形式具有统一形象、统一管理等基本特征。</p>
        <p>快乐星汉堡在全国30多个省区几千家门店，超过95%的店都是由加盟商独资径营管理。加盟快乐星汉堡是个巨大的机会.我们正在寻找认同我们的经营理念且有一定投资经营管理能力的人加入我们！</p>
        
        <dl class="program-item" v-for="(item,index) in list" :key="index" :id="item.Id">                    
            <dt class="clearfix">
                <div class="swiper-container swiper1">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="image in item.Images" :key="image.Id">
                        <img :src="image.Image" alt>
                    </div>                    
                    </div>
                    <div class="swiper-button-prev swiper-button-white"></div>
                    <div class="swiper-button-next swiper-button-white"></div>
                </div>
                <div class="program-item-intro">
                    <div class="v-middle">
                        <div class="name">{{item.Title}}</div>
                        <p>面积标准：{{item.Area}}</p>
                        <p>选址要求：{{item.Location}}</p>
                        <p>核心产品：{{item.Products}}</p>
                        <p>售卖方式：{{item.Sale}}</p>
                        <p>经营方式：{{item.Operating}}</p>
                    </div>
                </div>
            </dt>
            <dd>
                <!-- <div class="title">店型分类说明</div> -->
                <p>{{item.Description}}</p>
            </dd>
        </dl>        
        <pageQrcode></pageQrcode>
    </div>
</template>

<script>
import pageQrcode from '../pageQrcode'
export default {
    name:'program',
    data(){
        return{
            list:[]
        }
    },
    created:function(){
        this.loadList();
    },
    methods:{
        swiper:function(){
             new this.$Swiper(".swiper1", {
                    prevButton:'.swiper-button-prev',
		            nextButton:'.swiper-button-next',
            });
        },
        loadList:function(){
            let that = this;
            this.$axios.get("/ajaxdata.aspx?Action=AffiliateSolutionslist&Object=AffiliateSolutions&pageIndex=1&pageSize=100")
            .then(function(res){
                that.list = res.data.list
                that.$nextTick(function(){
                    this.swiper()                    
                })
            })
        }
    },
    components:{
        pageQrcode
    }
}
</script>

<style scoped>
.program{
    margin:40px 0;
}
.program p{
    text-indent:2em;
}
.program-item{
    padding-bottom:20px;
}
.program-item dt{
    position: relative;
    border:1px solid #d9d9d9;
    padding-bottom:35%;
    margin:4% 0;
}
.program-item .swiper-container{
    position: absolute;
    width:60%;
    height:100%;
   
}
.program-item-intro{
    width:40%;
    left:60%;
    height:100%;
    position: absolute;
}
.program-item-intro .name{
    margin:0 15%;
    font-size:18px;
    font-weight: bold;
    margin-bottom:50px;
}
.program-item-intro p{
    margin:5px 15%;
    text-indent: 0;
}
.v-middle{
    width:100%;
    position: absolute;
    top:50%;
    transform:translateY(-50%)
}
.program-item dd .title{
    margin-bottom: 20px;
    font-size:18px;
    font-weight:bold
}
@media screen and (max-width:1000px){
    h3{
        padding:0 10px;
        font-size: .38rem;
        font-weight: 400;
    }
    .program p{
        padding:0 10px;
    }
    .program-item dt{
        padding-bottom:0;
        border:0;
    }
    .program-item{
        padding:0 10px;
        margin-top:10px;
        border-top: 10px solid #f1f1f1;
    }
    .program-item .swiper-container{
        position:relative;
        width:100%;
    }
    .program-item-intro,.v-middle{
        width: 100%;
        position:initial;
        transform: translateY(0);
    }
    .program-item-intro .name{
        margin: 10px 0;
    }
    .program-item-intro p,.program-item dd p{
        margin:0;
        padding:0;
    }
    .program-item dd .title{
        font-size: 16px;
        margin-bottom:.2rem;
        font-weight: 400;
    }
}
</style>
