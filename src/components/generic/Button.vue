<template>
  <component
    :is="isRouteAttached ? 'router-link' : 'a'"
    :class="{
      btn: true,
      'btn--call-us': callUs,
      'btn--check': check,
      'btn--is-large': isLarge,
      'btn--is-centered': isCentered,
    }"
    :to="to"
    :href="this.isMailAttached ? 'email@email.com' : ''"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    callUs: {
      type: Boolean,
      default: false
    },
    check: {
      type: Boolean,
      default: false
    },
    isLarge: {
      type: Boolean,
      default: false
    },
    isCentered: {
      type: Boolean,
      default: false
    },
    isMailAttached: {
      type: Boolean,
      default: false
    },
    isRouteAttached: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: '#'
    }
  }
};
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  &--call-us {
    width: 25rem;
    height: 4rem;
    background-color: #fff;
    border-radius: 0.5rem;
    font-size: 2rem;
    line-height: 1;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
  }
  &--check {
    width: 22rem;
    height: 3rem;
    border-radius: 0.5rem;
    line-height: 1;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.8rem;
    background-color: #485462;
  }
  &--is-large {
    width: 26rem;
    height: 4.2rem;
    border-radius: 0.6rem;
    font-size: 2.4rem;
  }
  &--is-centered {
    margin: 0 auto;
  }
}
</style>
