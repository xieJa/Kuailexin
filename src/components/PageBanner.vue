<template>
    <div class="pageBanner" :style="'background:url('+ pageBanner.imageUrl +')'">
        <div class="cover">
            <div class="slogan">
                <div class="pageTitle">
                    <h1>{{pageBanner.name}}</h1>
                    <span>{{pageBanner.enName}}</span>
                </div>
                <p class="vice-title">{{pageBanner.text}}</p>
                <p class="describe">{{pageBanner.content}}</p>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name:'pageBanner',
    props:{
        pageBanner:{
            type:Object,
            required:true
        }
    } 
}
</script>
<style scoped>
.pageBanner{
    height:700px;
    color:#fff;
    position: relative;
}
.pageBanner .cover{
   display: flex;
   align-items: center;
   height:100%;
}
.slogan{
    width:50%;
}
.pageTitle{    
    display: inline-block;
    border-bottom:1px solid #fff; 
}
.pageTitle h1{
    font-size:48px;
    display: inline-block;
}
.pageTitle span{
    padding-left:20px;
    font-size:20px;
    display: inline-block;
}
.vice-title{    
    padding:30px 0;
    font-size:24px;
    position: relative;
}
.vice-title:before{
    position: absolute;
    content:'';
    display: block;
    width:68px;
    height:3px;
    background:#fff;
    top:-1px;
}
.describe{
    padding-bottom: 30px;
    font-size: 16px;
    line-height: 1.5;
    position: relative;
}
.describe:after{    
    position: absolute;
    content:'';
    display: block;
    width:68px;
    height:3px;
    background:#fff;
    bottom:0;
}
</style>
