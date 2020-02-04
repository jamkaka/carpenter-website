<template>
  <div class="stairs">
    <HeaderSubpage :productType="productType" />
    <main class="container">
      <Section>
        <template v-slot:section__header>Nasze {{ productType }}</template>
        Okna to kluczowy element przy budowie lub remoncie domu. Wpływają one na energoosczędność oraz standard twojego lokum. Specjalizujemy się również w wytwarzaniu okien do budynków zabytkowych dzięki czemu możliwe jest wierne odwzorowanie oryginalnego wyglądu.
        <br />Nasze okna wykonujemy w standardzie
        <span class="u-text--bold">68, 78, 90</span>.
      </Section>

      <Gallery :productType="productType">
        <template v-slot:section__header>Galeria</template>
      </Gallery>
    </main>

    <Footer />
  </div>
</template>

<script>
import HeaderSubpage from '@/components/layout/HeaderSubpage';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import Gallery from '@/components/Gallery';

export default {
  name: 'Stairs',
  metaInfo() {
    return {
      meta: [{ vmid: 'description', name: 'description', content: 'SCHODY' }],
      titleTemplate:
        '%s | Zakład stolarski Radosław Borecki - schody, drzwi, okna',
      title:
        this.productType.substring(0, 1).toUpperCase() +
        this.productType.substring(1)
    };
  },
  components: {
    HeaderSubpage,
    Section,
    Footer,
    Gallery
  },
  data() {
    return {
      productType: 'okna'
    };
  }
};
</script>
