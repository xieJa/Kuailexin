<template>
    <div class="server">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle>                         
            <router-view ></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'brand',
    data(){
        return{
            pageBanner:{
                name:'加盟服务',
                enName:'Join the service',
                imageUrl:require('@/assets/banner06.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'让每一位加盟快乐星汉堡店的加盟商，都能更加轻松经营，助力加盟者成就梦想！以品牌自身的“专心、用心”，让加盟商“放心”！'
            },
            pTitle:'',
            description:'',
            pView:''            
        }
    },
    created:function(){
        this.pTitle=this.$route.query.name
    },
    watch:{
        '$route'(to,from){            
            this.pTitle=this.$route.query.name            
        }
    }
}
</script>

<style>

</style>
