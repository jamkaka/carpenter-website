<template>
  <div class="hamburger-menu hamburger-menu__wrapper" @click="toggleMobileMenu">
    <div
      :class="{
        'hamburger-menu__icon': true,
        'is-clicked': isMobileMenuOpened
      }"
    ></div>
  </div>
</template>

<script>
import { eventsHub } from "@/store";

export default {
  name: "Hamburger",
  computed: {
    isMobileMenuOpened() {
      return eventsHub.isMobileMenuOpened;
    }
  },
  methods: {
    // * okay, interesting stuff.
    // if i wanted to to assign toggleMobileMenu from eventsHub as:
    // toggleMobileMenu: eventsHub.toggleMobileMenu
    // i would get an error complaining about isMobileOpen not having setter.
    // it probably means that with that kind of assigning and invoking toggleMobileMenu i refer to the component's computed isMobileMenu (above) and not to the one specified in store.js
    toggleMobileMenu() {
      eventsHub.toggleMobileMenu();
    }
  }
};
</script>

<style lang="scss">
.hamburger-menu {
  // init state
  display: none;
  cursor: pointer;
  //
  &__wrapper {
    padding: 15px;
    z-index: 9999;
  }
  &__icon {
    position: relative;
    width: 20px;
    height: 2px;
    background-color: #fff;
    transition: 0.5s background-color ease-in-out;
    &::before,
    &::after {
      position: absolute;
      content: "";
      left: 0;
      width: 20px;
      height: 2px;
      background-color: #fff;
      transition: 0.5s transform ease-in-out, 0.5s background-color ease;
    }
    &::before {
      top: -6px;
    }
    &::after {
      top: 6px;
    }
  }
}

.is-clicked {
  background-color: transparent;
  &::before {
    transform: translateY(6px) rotate(45deg);
    background-color: #000;
  }
  &::after {
    transform: translateY(-6px) rotate(-45deg);
    background-color: #000;
  }
}

@media screen and (max-width: 750px) {
  .hamburger-menu {
    display: block;
  }
}
</style>
