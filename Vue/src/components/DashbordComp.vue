<template>
  <div id="app">
    <MainDashbordComp></MainDashbordComp>
  </div>
</template>

<script>
import MainDashbordComp from "./Dashbord/MainDashbordComp.vue";
export default {
  name: "DashboardComp",
  metaInfo: {
    title: "داشبورد",
  },
  components: { MainDashbordComp },
};
</script>
