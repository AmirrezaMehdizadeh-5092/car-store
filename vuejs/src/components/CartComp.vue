<template>
  <div id="cart">
    <HeaderComp></HeaderComp>
    <MainCartComp></MainCartComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import MainCartComp from "./Cart/MainCartComp.vue";
export default {
    name: "CartComp",
    metaInfo: {
        title: "سبد خرید",
    },
    components: { HeaderComp, FooterComp , MainCartComp }
};
</script>