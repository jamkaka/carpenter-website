<template>
  <div class="header__navbar navbar">
    <router-link to="/">
      <div class="navbar__brand brand">
        <Brand />
      </div>
    </router-link>
    <Hamburger />
    <Navigation :isButtonShown="true" />
  </div>
</template>

<script>
import Brand from '@/components/generic/Brand';
import Navigation from '@/components/layout/Navigation';
import Hamburger from '@/components/mobile-layout/Hamburger';

export default {
  name: 'Navbar',
  components: {
    Brand,
    Navigation,
    Hamburger
  }
};
</script>

<style lang="scss">
.navbar {
  &__brand {
    display: flex;
    flex-direction: column;
  }
}
</style>
