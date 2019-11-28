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
import Header from '../Header/index.vue'
import Footer from '../Footer/index.vue'
import Section from './section.vue'
import Sectionone from './sectionone.vue'
import Sectiontwo from './sectiontwo.vue'
import Sectionthree from './sectionthree.vue'
import Sectionfour from './sectionfour.vue'

export default {
  name: 'Home',
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
