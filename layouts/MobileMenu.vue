<template>
  <div class="mobile-menu px-3 pt-16">
    <ul>
      <li>Home</li>
    </ul>
    <hr />
    <ul>
      <li>Discover lihotos</li>
      <li>Popular Searches</li>
      <li>Free Videos</li>
      <li>Challenges</li>
      <li>Leaderboard</li>
      <li>Pexels Blog</li>
    </ul>
    <hr />
    <ul>
      <li>Login</li>
      <li>Join</li>
      <li class="flex items-center">
        Change Language<img
          width="36"
          height="26"
          class="pl-2"
          src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #232a34;
}

li {
  @apply text-white text-xl py-1;
}
li {
  opacity: 0.7;
}
hr {
  border: none;
  height: 0.5px;
  background: #ffffff;
  opacity: 0.7;
  margin: 0.5rem 0;
}
</style>
