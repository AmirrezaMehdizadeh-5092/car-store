<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <MainContactComp></MainContactComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import MainContactComp from "./Contact/MainContactComp.vue";
import FooterComp from "./FooterComp.vue";
export default {
    name: "ContentComp",
    metaInfo: {
        title: "تماس با ما",
    },
    components: { HeaderComp, MainContactComp, FooterComp }
};
</script>
