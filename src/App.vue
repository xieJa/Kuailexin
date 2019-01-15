<template>
  <div id="app">
    <mHeader v-if="this.$M"></mHeader>
    <Hearder v-else></Hearder>
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