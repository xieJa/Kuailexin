<template>
  <div id="app">
    <Hearder></Hearder>
    <mHeader></mHeader>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Hearder from './components/Header.vue'
import mHeader from './components/m_Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Hearder,Footer,mHeader
  },
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
