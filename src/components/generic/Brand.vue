<template>
  <div>
    <h1 class="brand__title">NazwaFirmy</h1>
    <h2 class="brand__subtitle">Zakład stolarski</h2>
  </div>
</template>

<script>
export default {
  name: 'Brand'
};
</script>

<style lang="scss">
.brand {
  &__title {
    font-weight: 800;
    font-size: 2.9rem;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1;
  }
  &__subtitle {
    font-weight: 200;
    font-size: 2.2rem;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1;
  }
}
</style>


