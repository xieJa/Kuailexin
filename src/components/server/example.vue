<template>
    <div class="program">
        <div class="program-item" v-for="(item,index) in list" :key="index">
            <div class="title">{{item.Title}}</div>
            <div class="program-pic">
                <img :src="item.Image" alt="">
            </div>
            <div class="program-info">
                <p>
                    <span>面积：</span>
                    <span>{{item.Area}}</span>
                </p>
                <p>
                    <span>产品配置：</span>
                    <span>{{item.Products}}</span>
                </p>
                <p>
                    <span>选址建议：</span>
                    <span>{{item.Location}}</span>
                </p>
                <p>
                    <span>装修意见：</span>
                    <span>{{item.Opinion}}</span>
                </p>
            </div>
        </div>        
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
        this.loadList()
    },
    methods:{
        loadList:function(){
            let that = this;
            
            this.$axios.get("/ajaxdata.aspx?Action=list&Object=DecorationGuide&pageIndex=1&pageSize=100")
            .then(function(res){
                console.log(res)
                that.list = res.data.list
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
    margin-top:40px;
}
.program .title{
    text-align: center;
    font-size:18px;
    color:#c51720;
    font-weight: bold;
}
.program-item{
    margin-bottom:80px;
}
.program .program-pic{
    text-align: center;
    margin:40px 0;
}
.program-info p{
    display: table;
    margin-bottom:5px;
}
.program-info span:first-child{
    white-space: nowrap;
}
.program-info span{
    display: table-cell;
}
.page-qrcode{
    padding-top:0;
}
</style>
