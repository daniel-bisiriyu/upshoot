<template>
  <div class="search-bar flex items-center w-full px-3">
    <input
      type="text"
      class="search-input w-full  focus:outline-none"
      :class="[padding]"
      placeholder="Search for free photos and videos"
    />
    <search-icon />
  </div>
</template>

<script>
import SearchIcon from "./icons/SearchIcon.vue";

export default {
  props: {
    padding: {
      type: String,
      required: false,
      default: "py-4 px-2"
    }
  },
  components: {
    SearchIcon
  }
};
</script>

<style scoped>
.search-bar {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
}
.search-input {
  background: transparent;
}
.search-input::placeholder {
  color: #5f5e5e;
}
</style>
