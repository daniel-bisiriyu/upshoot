<template>
  <div class="skeleton-loaders-wrapper">
    <div class="card short">
      <div class="loader-text top"></div>
      <div class="loader-text bottom"></div>
    </div>
    <div class="card tall">
      <div class="loader-text top"></div>
      <div class="loader-text bottom"></div>
    </div>
    <div class="card">
      <div class="loader-text top"></div>
      <div class="loader-text bottom"></div>
    </div>
    <div class="card">
      <div class="loader-text top"></div>
      <div class="loader-text bottom"></div>
    </div>
    <div class="card">
      <div class="loader-text top"></div>
      <div class="loader-text bottom"></div>
    </div>
    <div class="card tall">
      <div class="loader-text top"></div>
      <div class="loader-text bottom"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.skeleton-loaders-wrapper {
  display: grid;
  grid-gap: 15px 50px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 10px;
}
.card {
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  background: #f5f5f5;
  grid-row-end: span 15;
  width: 90%;
  border-radius: 4px;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.card.tall {
  grid-row-end: span 18;
}
.loader-text {
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 1.5rem;
  background: #e6e6e6;
  border-radius: 5px;
  margin-top: 1rem;
}
.loader-textbottom {
  width: 50%;
}
.loader-text::before {
  content: "";
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 300px;
  background: linear-gradient(
    to right,
    transparent 0%,
    #eeeeee 50%,
    transparent 100%
  );
  animation: load 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>
