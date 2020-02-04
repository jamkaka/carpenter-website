<template>
  <section class="header-subpage">
    <div
      class="header-subpage__image"
      :data-title="$attrs.productType"
      :style="{ backgroundImage: 'url(' + require(`@/assets/images/header-${$attrs.productType}.jpg`) + ')' }"
    >
      <transition name="slide-in" appear>
        <div class="header-subpage__title">{{ $attrs.productType }}</div>
      </transition>
      <div class="header-subpage__container container">
        <Navbar />
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: 'HeaderSubpage',
  inheritAttrs: false,
  components: {
    Navbar
  },
  data() {
    return {
      isSlideAnimationFired: false,
      isFadeAnimationFired: false
    };
  }
};
</script>

<style lang="scss">
.header-subpage {
  position: relative;
  &__container {
    height: 80vh;
    display: flex;
    flex-direction: column;
  }
  &__image {
    background-position: center;
    background-size: cover;
    position: relative;
    // &::after {
    //   content: attr(data-title);
    //   position: absolute;
    //   bottom: 15%;
    //   right: 0%;
    //   // i think i need to size this in fixed pixels so i can break from that fluid typography sass code. issue is that it does not result in desired size of headings when screen is small (in simple words: min_height var is not small enough). also, i think that sizing padding in ems may be a better idea, as i will also get away from which computed values vary. with ems it will only vary with this el font-size.
    //   font-size: calc(30px + 5vw);
    //   padding: calc(.35em + .4vw) calc(.35em + .8vw) calc(.35em + .4vw) calc(1.5em + 1vw);
    //   background-color: rgba(0,0,0,0.45);
    //   clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0 100%);
    //   color: #fff;
    //   line-height: 1;
    //   text-transform: uppercase;
    //   font-weight: 600;
    // }
  }
  &__title {
    position: absolute;
    bottom: 15%;
    right: 0%;
    // i think i need to size this in fixed pixels so i can break from that fluid typography sass code. issue is that it does not result in desired size of headings when screen is small (in simple words: min_height var is not small enough). also, i think that sizing padding in ems may be a better idea, as i will also get away from which computed values vary. with ems it will only vary with this el font-size.
    font-size: calc(30px + 5vw);
    padding: calc(0.35em + 0.4vw) calc(0.35em + 0.8vw) calc(0.35em + 0.4vw)
      calc(1.5em + 1vw);
    background-color: rgba(0, 0, 0, 0.45);
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0 100%);
    color: #fff;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
