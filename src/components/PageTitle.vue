<template>
    <div class="pageTitle">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name:'pageTitle',
    props:{
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:false
        }
    }
}
</script>

<style scoped>
.pageTitle{
    padding-top:50px;
}
.pageTitle h2{
    position:relative;
    font-size:24px;
    line-height: 100%;
    color:#000;
    text-align: center;
    padding:15px 0;
    
}
.pageTitle h2:after{
    position: absolute;
    left:50%;
    bottom:0;
    margin-left:-26px;
    content:'';
    display: block;
    width:52px;
    height:2px;
    background:#c8161e;
}
.pageTitle p{
    margin-top:10px;
    text-align: center;
    font-size:16px;
    color:#c8161e;
}
</style>
