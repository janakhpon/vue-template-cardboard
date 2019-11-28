<template>
  <div id="app">
    <Section />
    <Sectionone />
    <Sectiontwo />
  </div>
</template>

<script>
import Section from "./section.vue";
import Sectionone from "./sectionone.vue";
import Sectiontwo from "./sectiontwo.vue";

export default {
  name: "About",
  components: {
    Section,
    Sectionone,
    Sectiontwo
  }
};
</script>

<style>
</style>
