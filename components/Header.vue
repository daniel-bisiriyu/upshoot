<template>
  <header class="header">
    <div class="w-full px-12 lg:w-3/4 xl:w-3/5">
      <div>
        <p class="text-white font-bold text-4xl">
          The best free stock photos & videos shared by talented creators.
        </p>
      </div>
      <div class="mt-3">
        <search-bar />
      </div>

      <small class="mt-2">
        <span class="text-white">Suggested: </span> working, happy, travel,
        group, young, laptop, more</small
      >
    </div>
  </header>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    SearchBar
  }
};
</script>

<style scoped>
.header {
  background: linear-gradient(
      rgba(0.6, 0.6, 0.6, 0.3),
      rgba(0.6, 0.6, 0.6, 0.3)
    ),
    url("https://images.pexels.com/photos/8552529/pexels-photo-8552529.jpeg?auto=compress&crop=focalpoint&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&sharp=20&w=1400");
  width: 100%;
  max-height: 500px;
  min-height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

small {
  color: #9daca9;
}
</style>
