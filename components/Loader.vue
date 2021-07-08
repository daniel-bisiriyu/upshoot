<template>
  <div class="skeleton-loaders-wrapper">
    <div class="card short"></div>
    <div class="card tall"></div>
    <div class="card"></div>
    <div class="card tall"></div>
    <div class="card"></div>
    <div class="card tall"></div>
    <div class="card short"></div>
    <div class="card tall"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card tall"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.skeleton-loaders-wrapper {
  display: grid;
  grid-gap: 0.5rem 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 10px;
}
.card {
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  grid-row-end: span 15;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
  grid-row-end: span 20;
}
.card:nth-child(even) {
  background: rgb(57, 86, 88);
}
.card:nth-child(odd) {
  background: rgb(168, 145, 131);
}
.card.tall {
  grid-row-end: span 35;
}

@media screen and (max-width: 1024px) {
  .skeleton-loaders-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
