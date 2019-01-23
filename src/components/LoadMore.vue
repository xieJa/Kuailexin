<template>
    <div class="LoadMore">
        <slot name="moreBtn"></slot>   
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'LoadMore',   
}
</script>

<style scoped>
.LoadMore{
    text-align: center;
    padding:30px 0;
}
.moreBtn{
  display: inline-block;
  width:140px;
  height:50px;
  background:#cfcfcf;
  border:0;
  color:#fff;
  transition: all .5s;
  cursor: pointer;
  outline:none;
  text-align: center;
  line-height: 50px;
}
.moreBtn:hover{
  background:#c8161e;
  color:#fff;
}
</style>
