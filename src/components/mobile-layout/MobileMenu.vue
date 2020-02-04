<template>
  <div :class="{
    'mobile-menu': true,
    'is-opened': isMobileMenuOpened
  }">
    <!-- rewrite class names -->
    <ul class="mobile-menu__list menu-list">
      <li class="menu-list__item" v-for="productType in productTypes" :key="productType">
        <router-link @click.native="toggleMobileMenu" :to="`/${productType}`">{{ productType }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '@/store';
import { eventsHub } from '@/store';

export default {
  name: 'MobileMenu',
  computed: {
    isMobileMenuOpened() {
      return eventsHub.isMobileMenuOpened;
    },
    productTypes() {
      return Object.keys(store);
    }
  },
  methods: {
    toggleMobileMenu() {
      eventsHub.toggleMobileMenu();
    }
  }
};
</script>

<style lang="scss">
.mobile-menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-100vw);
  background-color: #fff;
  z-index: 9999;
  transition: 0.5s transform ease;
}
.is-opened {
  transform: translateX(0);
}
.menu-list {
  list-style-type: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 5rem;
  &__item {
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 4px solid #000;
    }
  }
}
</style>
