<template>
  <div class="search-bar  w-full px-3">
    <form class="flex items-center" @submit.prevent="search">
      <input
        type="text"
        class="search-input w-full  focus:outline-none"
        :class="[padding]"
        placeholder="Search for free photos and videos"
        v-model="query"
      />
      <div class="cursor-pointer" @click="search">
        <search-icon />
      </div>
    </form>
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
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      if (this.query.length) {
        this.$router.push(`/search/${this.query}`);
      }
    }
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
