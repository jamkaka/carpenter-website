<template>
  <section class="section section-cta">
    <h6 class="cta-headings__subheading">Nie ograniczamy się do okien, schodów i drzwi!</h6>
    <h6 class="cta-headings__heading">Sprawdź co jeszcze umiemy!</h6>
    <Button check isLarge isCentered isRouteAttached to="/inne">Sprawdź!</Button>
  </section>
</template>

<script>
import Button from '@/components/generic/Button';

export default {
  name: 'SectionCTA',
  components: {
    Button
  }
};
</script>

<style lang="scss">
.section {
  padding-top: 4rem;
  &-cta {
    text-align: center;
    padding-bottom: 4rem;
  }
}

.cta-headings {
  &__subheading {
    font-size: calc(14px + (26 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 500;
    line-height: 1.2;
  }
  &__heading {
    font-size: calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 800;
    line-height: 1.6;
  }
}
</style>

