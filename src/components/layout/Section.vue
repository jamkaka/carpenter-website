<template>
  <section class="section">
    <SectionHeader>
      <slot name="section__header"></slot>
    </SectionHeader>
    <p class="section__text">
      <slot></slot>
    </p>
  </section>
</template>

<script>
import SectionHeader from '@/components/layout/SectionHeader';

export default {
  name: 'Section',
  components: {
    SectionHeader
  }
};
</script>


<style lang="scss">
.section {
  padding-top: 4rem;
  &__text {
    padding-top: 4rem;
    font-size: 1.8rem;
    line-height: 1.5em;
    font-weight: 500;
    text-align: justify;
    color: $primary;
  }
  &__card-container {
    display: flex;
    padding-top: 4rem;
    & > * {
      flex: auto;
    }
  }
}
</style>
