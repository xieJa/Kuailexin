<template>
    <div class="crumbs cover">
        <router-link to="/">首页</router-link>>
        <slot></slot>        
    </div>
</template>

<script>
export default {
    name:'crumbs',   
}
</script>

<style scoped>
.crumbs{
    margin:30px auto;
    padding-left:15px;
    background:url(~@/assets/home.png) no-repeat;
}
.crumbs a{
    margin:0 5px;
}
.crumbs a:last-child{color:#c8161e;}
@media screen and (max-width:1000px){ 
    .crumbs{        
        display: none;
    }
}
</style>
