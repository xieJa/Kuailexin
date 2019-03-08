<template>
    <div class="about-info" v-html="content">        
    </div>    
</template>

<script>
export default {
    name:'PageView',
    data(){
        return{
            content:''
        }
    },
    created:function(){
        this.loadContent()        
    },
    methods:{
        loadContent:function(){
            let that = this;
            let typeInfo = ''
            if(this.$route.query.name!=''){
                switch(this.$route.query.name){
                    case 'CompanyInfo':
                        typeInfo = '公司简介';                        
                        break;
                    case 'EnterpriseVision':
                        typeInfo = '企业愿景';
                        break;
                    case 'SystemConstruction':
                        typeInfo = '体系建设';
                        break;
                    case 'order':
                        typeInfo = '微信点餐';
                        break;
                    case 'takeOut':
                        typeInfo = '外卖运营';
                        break;
                    case 'choose':
                        typeInfo = '如何选择';
                        break;
                    case 'process':
                        typeInfo = '加盟流程';
                        break;
                    case 'side':
                        typeInfo = '在您身边';
                        break;
                }
            }else{
                typeInfo = this.$route.name
            }
            this.$axios.get("/ajaxdata.aspx?Action=memoinfo",{
                params:{
                    Type:typeInfo
                }
            })
            .then(function(res){
                that.content=res.data.list[0].Content
            })
        }
    },
    watch:{
        '$route'(to,from){
            this.content=''
            this.loadContent()
        }
    }
}
</script>

<style>
.about-info {
    position: relative;
    padding-top:40px;
    overflow: hidden;
}
.about-info h3{
    font-size: 24px;
    margin-bottom: 15px;
}
.about-info p{
    padding-bottom:10px;
    line-height: 24px;
}
@media screen and (max-width:1000px){    
    .about-info{
        padding:40px 10px 0 10px;
    }
}
</style>
