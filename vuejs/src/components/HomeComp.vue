<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <br />
    <MainHomeComp></MainHomeComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import MainHomeComp from "./Home/MainHomeComp.vue";
import FooterComp from "./FooterComp.vue";
export default {
  name: "HomeComp",
  metaInfo: {
    title: "صفحه نخست",
  },
  components: {
    HeaderComp,
    MainHomeComp,
    FooterComp
},
};
</script>

<style>
</style>
