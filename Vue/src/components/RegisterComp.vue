<template>
  <div id="register">
    <HeaderComp></HeaderComp>
    <MainRegisterComp></MainRegisterComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import MainRegisterComp from "./Register/MainRegisterComp.vue";
export default {
  name: "RegisterComp",
  metaInfo: {
    title: "ثبت نام",
  },
  components: { HeaderComp , FooterComp, MainRegisterComp },
};
</script>

<style>
</style>