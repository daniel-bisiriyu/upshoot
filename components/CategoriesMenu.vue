<template>
  <div class="flex justify-center items-center categories w-full">
    <p :class="{ active: true }">Home</p>
    <p>Discover</p>
    <p>Videos</p>
    <p>Leaderboard</p>
    <p>Challenges</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.categories {
  overflow: auto;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
}
.categories::-webkit-scrollbar {
  width: 0px;
}
.categories p {
  color: #5e5e5e;
  font-size: 17px;
  font-weight: 600;
  padding: 1.25rem;
  cursor: pointer;
}
.categories p:hover {
  color: #0064f9;
}
.categories p.active {
  color: #0064f9;
  position: relative;
}
.categories p.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0064f9;
  height: 0.22rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
@media screen and (max-width: 700px) {
  .categories p {
    padding: 1rem;
  }
  .categories {
    justify-content: flex-start;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
  }
}
</style>
