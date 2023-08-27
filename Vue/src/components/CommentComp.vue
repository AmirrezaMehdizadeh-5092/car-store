<template>
  <div id="comment">
    <HeaderComp></HeaderComp>
    <MainCommentComp></MainCommentComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import MainCommentComp from "./Comment/MainCommentComp.vue";
export default {
    name: "CommentComp",
    metaInfo: {
        title: "نظرات",
    },
    components: { HeaderComp , FooterComp, MainCommentComp }
};
</script>