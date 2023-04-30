<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <MainShopComp></MainShopComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import MainShopComp from "./Shop/MainShopComp.vue";
import FooterComp from "./FooterComp.vue";
export default {
    name: "ShopComp",
    metaInfo: {
        title: "محصولات",
    },
    components: { HeaderComp, MainShopComp, FooterComp }
};
</script>

