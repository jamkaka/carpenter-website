<template>
  <div class="stairs">
    <HeaderSubpage id="HEADER" :productType="productType" />
    <main class="container">
      <Section>
        <template v-slot:section__header>Nasze {{ productType }}</template>
        Wykonujemy również meble z drewna litego i oklein naturalnych. Nasze wyroby to między innymi
        <span
          class="u-text--bold"
        >witryny, komody, stoły, szafki itd.</span>
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
      productType: 'inne'
    };
  }
};
</script>
