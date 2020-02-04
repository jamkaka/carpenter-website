<template>
  <section class="header">
    <div class="header__image">
      <div class="header__container container">
        <Navbar />
        <div class="header__headings headings">
          <h4 class="headings__subheading">#Tekst nagłówku#1</h4>
          <h3 class="headings__heading">#Tekst nagłówku#2</h3>
        </div>
        <div class="header__cta">
          <a
            v-scroll-to="{
              el: '#main',
              duration: 1000,
              easing: 'ease-in-out'  
            }"
            class="cta-btn"
          >↓</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: 'Header',
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.header {
  position: relative;
  &__navbar {
    flex: initial;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3.5rem;
  }
  &__container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  &__image {
    background-image: url('~@/assets/images/header.jpg');
    background-position: center;
    background-size: cover;
  }
  &__cta {
    flex: initial;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.headings {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  &__subheading {
    font-weight: 300;
    font-size: calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1;
  }
  &__heading {
    font-weight: 600;
    // font-size: 10rem;
    font-size: calc(32px + (100 - 32) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.3;
  }
}

// * to fix
.cta-btn {
  // btn reset
  cursor: pointer;
  color: #fff;
  height: 7rem;
  width: 7rem;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1;
  border: 0.5rem solid currentColor;
  border-radius: 50%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite backwards paused;
  &:hover {
    animation-play-state: running;
  }
}

@keyframes pulse {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(-8px);
  }
}
</style>
