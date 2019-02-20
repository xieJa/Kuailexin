<template>
  <div id="app">
    <Hearder v-if="!this.$M"></Hearder>
    <mHeader v-else></mHeader>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Hearder from './components/Header'
import mHeader from './components/m_Header'
import Footer from './components/Footer'
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
