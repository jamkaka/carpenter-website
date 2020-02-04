<template>
  <div class="stairs">
    <HeaderSubpage id="HEADER" :productType="productType" />
    <main class="container">
      <Section>
        <template v-slot:section__header>Nasze {{ productType }}</template>
        Drzwi zewnątrzne jak i wewnętrzne wykonujemy wyłącznie z drewna klejonego co zapewnia wysoką stabilność wyrobu. Nasze drzwi wykonywane są zgodnie z najnowszą technologią dzięki czemu są nie tylko ozdobą twojego domu, ale doskonale chronią Ciebie i Twoją rodzinę.
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
      productType: 'drzwi'
    };
  }
};
</script>
