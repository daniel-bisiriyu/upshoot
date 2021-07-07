<template>
  <div>
    <app-navbar />
    <nuxt />
  </div>
</template>

<script>
import AppNavbar from "./TheNavbar.vue";
export default {
  components: {
    AppNavbar
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;

  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
