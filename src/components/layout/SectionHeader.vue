<template>
  <header class="heading__container">
    <h5 class="section__heading">
      <slot/>
    </h5>
  </header>
</template>

<script>


export default {
  name: 'SectionHeader'
};
</script>

<style lang="scss">
.heading__container {
  display:flex;
  justify-content: center;
}

.section__heading {
  display: inline-block;
  margin: 0 auto;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  position: relative;
  line-height: 1.4;
  &:after, &:before {
    content: "";
    height: 2px;
    width: 140%;
    background-color: #5c6773;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  &:before {
    top: 0%;
    left: 50%;
  }
  &:after {
    bottom: 0%;
    left: 50%;
  }
}
</style>


