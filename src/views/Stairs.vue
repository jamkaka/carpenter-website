<template>
  <div class="stairs">
    <HeaderSubpage id="HEADER" :productType="productType" />
    <main class="container">
      <Section>
        <template v-slot:section__header>Nasze {{ productType }}</template>
        Schody w naszym wykonaniu charakteryzują się wysoką jakością i solidnym wykonaniem. Do wytwarzania stosujemy głównie wyselekcjonowaną tarcicę dębową, jesionową, bukową jak i egzotyczną. Schody są bardzo ważnym, jeżeli nie najważniejszym elementem wystroju wewnętrznego twojego domu.
      </Section>
      <Gallery :productType="productType" isGalleryShown>
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
      productType: 'schody'
    };
  }
};
</script>
