<template>
    <div class="crumbs cover">
        <router-link to="/">首页</router-link>>
        <span v-for="(crumb,index) in crumbs" :key="index" v-if="index!=crumbs.length-1">
            <router-link :to="crumb.breadUrl" >{{crumb.breadText}}</router-link>>
        </span>
        <a href="javascript:;" style="color:#c8161e">{{this.$route.params.Name}}</a>
    </div>
</template>

<script>
export default {
    name:'crumbs',
    data:function(){
        return{
            crumbs:[]
        }
    },
    created:function(){
        var breadUrl = this.$route.matched
        var breadText = decodeURI(window.location.pathname).split('/');     
        var s = breadText.splice(0,2);        
        for(let i=0;i<breadUrl.length;i++){
            let itemUrl = s.concat(breadText.slice(0,i+1)).join("/")
            this.crumbs[i] = {
                breadText:breadText[i],
                breadUrl:itemUrl
            }
        }
        console.log(this.crumbs,this.$route)
    }
}
</script>

<style scoped>
.crumbs{
    margin:30px auto;
}
.crumbs a{
    margin:0 5px;
}
</style>
