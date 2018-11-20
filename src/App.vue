<template>
  <div id="app">
    <my-header></my-header>    
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Hearder from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    'my-header': Hearder,
    'my-footer': Footer
  }
}
</script>

<style>

</style>
