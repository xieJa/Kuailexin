<template>
  <div id="app">
    <div v-show="Errorinfo">
      <Hearder v-if="!this.$M"></Hearder>
      <mHeader v-else></mHeader>
    </div>
    <router-view/>
    <div v-show="Errorinfo">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Hearder from './components/Header'
import mHeader from './components/m_Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return{
      Errorinfo:true
    }
  },
  components: {
    Hearder,Footer,mHeader
  },
  watch:{
    '$route'(to,from){      
      if(to.name=='Errorinfo'){
          this.Errorinfo = false
      }else{
          this.Errorinfo = true
      }
    }
  }
}
</script>

<style>
.m-head{display:none;}
.pc-head{display:block;}
@media screen and (max-width:1000px){
  .pc-head{display:none;}
  .m-head{display:block;}
}
</style>
