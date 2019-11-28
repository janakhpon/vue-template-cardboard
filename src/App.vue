<template>
  <div id="app">
    <Header />
    <Section />
    <Sectionone />
    <Sectiontwo />
    <Sectionthree />
    <Sectionfour />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import Section from './components/Section/index.vue'
import Sectionone from './components/Sectionone/index.vue'
import Sectiontwo from './components/Sectiontwo/index.vue'
import Sectionthree from './components/Sectionthree/index.vue'
import Sectionfour from './components/Sectionfour/index.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Section,
    Sectionone,
    Sectiontwo,
    Sectionthree,
    Sectionfour
  }
}
</script>

<style>

</style>
