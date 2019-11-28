<template>
  <div id="app">
    <Section />
    <Sectionone />
    <Sectiontwo />
    <Sectionthree />
    <Sectionfour />
  </div>
</template>

<script>
import Section from "./section.vue";
import Sectionone from "./sectionone.vue";
import Sectiontwo from "./sectiontwo.vue";
import Sectionthree from "./sectionthree.vue";
import Sectionfour from "./sectionfour.vue";

export default {
  name: "Home",
  components: {
    Section,
    Sectionone,
    Sectiontwo,
    Sectionthree,
    Sectionfour
  }
};
</script>

<style>
</style>
