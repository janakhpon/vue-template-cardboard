<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'


export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
