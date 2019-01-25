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
            this.$axios.get("/ajaxdata.aspx?Action=memoinfo",{
                params:{
                    Type:that.$route.query.name || that.$route.params.Name
                }
            })
            .then(function(res){
                that.content=res.data.list[0].Content
            })
        }
    },
    watch:{
        '$route'(to,from){
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
