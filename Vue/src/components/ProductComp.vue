<template>
    <div id="product">
        <HeaderComp></HeaderComp>
        <MainProductComp></MainProductComp>
        <FooterComp></FooterComp>
    </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import MainProductComp from "./Shop/MainProductComp.vue";
export default {
    name: "ProductComp",
    components: { HeaderComp, FooterComp, MainProductComp }
}
</script>