<template>
  <div
    class="flex justify-between items-center fixed top-0 right-0 left-0 px-3 lg:px-6 py-3 z-10"
    :class="{ 'bg-primary-blue': scrollPosition > 280 }"
  >
    <div class="flex items-center z-20">
      <img src="~/assets/icons/logo.svg" alt="logo" />
      <p class="font-semibold pl-2 text-white text-xl hidden lg:block">
        Pexels
      </p>
    </div>
    <div
      class="w-full lg:w-2/4 mx-6 z-20"
      v-if="scrollPosition > 280 || showMobileMenu"
    >
      <search-bar padding="px-2 py-3" />
    </div>
    <div
      class="block lg:hidden z-20 cursor-pointer"
      @click="showMobileMenu = !showMobileMenu"
    >
      <hamburger />
    </div>
    <div class="hidden lg:block">
      <ul class="flex items-center">
        <li class="nav-item">Explore</li>
        <li class="nav-item">Licence</li>
        <li class="nav-item">Upload</li>
        <li class="nav-item">
          <ellipsis />
        </li>
        <li>
          <button
            class="bg-primary-green px-8 py-2 text-white rounded font-semibold focus:outline-none"
          >
            Join
          </button>
        </li>
      </ul>
    </div>
    <mobile-menu v-if="showMobileMenu" />
  </div>
</template>

<script>
import Ellipsis from "./ellipsis.vue";
import Hamburger from "./hamburger.vue";
import MobileMenu from "./MobileMenu.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    Ellipsis,
    Hamburger,
    MobileMenu,
    SearchBar
  },
  data() {
    return {
      showMobileMenu: false,
      scrollPosition: 0
    };
  },
  computed: {
    // scrollPosition() {
    //   if (process.client) {
    //     console.log(window.scrollY);
    //     return window.scrollY;
    //   }
    //   return 0;
    // }
  },
  mounted() {
    if (process.client) {
      window.addEventListener("scroll", this.saveScrollPosition);
    }
  },
  methods: {
    saveScrollPosition() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>

<style scoped>
.nav-item {
  @apply text-white font-semibold px-6;
}
</style>
