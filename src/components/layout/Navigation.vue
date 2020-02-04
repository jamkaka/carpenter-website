<template>
  <nav class="navbar__nav nav">
    <router-link class="nav__link" to="/drzwi">Drzwi</router-link>
    <router-link class="nav__link" to="/schody">Schody</router-link>
    <router-link class="nav__link" to="/okna">Okna</router-link>
    <Button callUs isMailAttached>Napisz do nas!</Button>
  </nav>
</template>


<script>
import Button from '@/components/generic/Button';

export default {
  name: 'Navigation',
  components: {
    Button
  },
  props: {
    isButtonShown: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  transition: 0.5s all ease-in-out;
  &__link {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 3rem;
    }
    position: relative;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -15%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 2.8rem;
      background-color: #fff;
      transition: 0.45s transform ease-out;
    }
    &:hover {
      &::after {
        transform: translate(-50%, -50%) scaleY(1.5);
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .nav {
    display: none;
  }
}
</style>
