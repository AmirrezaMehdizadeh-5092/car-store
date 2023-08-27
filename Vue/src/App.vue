<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//add package and components
//import axios from 'axios';

export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
@font-face {
  font-family: iran;
  src: url(./assets/iran.ttf);
}

* {
  direction: rtl;
  box-sizing: border-box;
  font-family: iran;
}

body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}
</style>
