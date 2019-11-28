<template>
  <div id="app">
    <Header />
    <Section />
    <Sectionone />
    <Sectiontwo />
    <Footer />
  </div>
</template>

<script>
import Header from '../Header/index.vue'
import Footer from '../Footer/index.vue'
import Section from './section.vue'
import Sectionone from './sectionone.vue'
import Sectiontwo from './sectiontwo.vue'


export default {
  name: 'Projects',
  components: {
    Header,
    Footer,
    Section,
    Sectionone,
    Sectiontwo
  }
}
</script>

<style>

</style>
