<template>
  <div id="app">
    <MobileMenu />
    <transition name="fade-route" v-on:before-enter="navigateToTop">
      <router-view />
    </transition>
  </div>
</template>

<script>
import MobileMenu from '@/components/mobile-layout/MobileMenu';
export default {
  components: {
    MobileMenu
  },
  methods: {
    navigateToTop() {
      // this.$scrollTo('#HEADER', 1700);
    }
  }
};
</script>


<style lang="scss">
// resets and setup.
@import '/assets/scss/base/fonts';
@import '/assets/scss/base/reset';

@import '/assets/scss/abstracts/responsive_font';
@import '/assets/scss/base/base_layout';
@import '/assets/scss/abstracts/animations';
@import '/assets/scss/abstracts/utils';
@import '~@/assets/scss/abstracts/utils';

.gallery-item__image[lazy='loaded'] {
  opacity: 1;
}
</style>
