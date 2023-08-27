<template>
  <div id="login">
    <HeaderComp></HeaderComp>
    <MainLoginComp></MainLoginComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import MainLoginComp from "./Login/MainLoginComp.vue";
import FooterComp from "./FooterComp.vue";
export default {
  name: "LoginComp",
  metaInfo: {
    title: "ورود",
  },
  components: { HeaderComp, MainLoginComp, FooterComp },
};
</script>

<style>
</style>
