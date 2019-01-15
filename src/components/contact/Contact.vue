<template>
    <div class="contact">
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="cover">
            <PageTitle :title="pTitle" :description="description"></PageTitle>
            <Contactus v-if="this.$route.query.name=='联系我们'"></Contactus>    
            <complain v-else-if="this.$route.query.name=='投诉建议'"></complain>    
            <Message v-else></Message>    
        </div>
    </div>
</template>

<script>
import Contactus from './contactus'
import Message from './Message'
import complain from './complain'
export default {
    name:'Contact',
    data(){
        return{
            pageBanner:{
                name:'联系我们',
                enName:'Contact us',
                imageUrl:require('@/assets/banner08.jpg'),
                text:'快乐星汉堡， 专注西式快餐加盟！',
                content:'卖的就是专业，我们拒绝忽悠，品质，我们为快乐星品牌代言'
            },
            pTitle:'',
            description:'',
            pView:''  
        }
    },
    created:function(){
        this.pTitle=this.$route.query.name
    },
    components:{
        Contactus,Message,complain
    },
    watch:{
        '$route'(to,from){            
            this.pTitle=this.$route.query.name            
        }
    }
}
</script>
