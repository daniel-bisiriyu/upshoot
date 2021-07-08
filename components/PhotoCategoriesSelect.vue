<template>
  <div class="flex justify-between items-center mb-2">
    <p class="text-lg title">Free Stock Photos</p>
    <div class="relative bg-grey" @mouseleave="showDropdown = false">
      <div
        class="photo-categories text-sm font-semibold"
        @mouseenter="showDropdown = true"
      >
        <p class="flex items-center cursor-pointer">
          Trending
          <span class="pl-1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z"></path></svg
          ></span>
        </p>
      </div>
      <div
        class="absolute z-20 bg-white dropdown cursor-pointer"
        id="dropdown"
        v-show="showDropdown"
      >
        <p class="py-2 px-3">Trending</p>
        <p class="py-2 px-3">New</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
