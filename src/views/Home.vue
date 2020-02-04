<template>
  <div class="home">
    <Header />
    <main class="main container" id="main">
      <Section>
        <template v-slot:section__header>O firmie</template>
        Nasza firma załozona została w roku 2010. Od początku specjalizujemy się w wykonywaniu usług dla ludności. Przez te lata zdobywaliśmy wiedzę i doświadczenie w dziedzinie stolarki budowalnej i artystycznej co obecnie pozwala nam wykonywać zadania trudne i unikatowe. Park maszynowy, który mamy w posiadaniu, umożliwia wytworzenie każdego elementu i wyrobu z drewna.
      </Section>
      <Section>
        <template v-slot:section__header>Nasze usługi</template>
        Zajmujemy się wykonywaniem usług związanych z realizacją zamówień na takie wyroby jak:
        <span
          class="u-text--bold"
        >drzwi zewnętrzne, drzwi wewnętrzne, okna, schody, meble z drewna.</span>
        <CardContainer />
      </Section>
      <SectionCTA />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import Section from '@/components/layout/Section';
import SectionCTA from '@/components/layout/SectionCTA';
import CardContainer from '@/components/CardContainer';

export default {
  name: 'home',
  metaInfo() {
    return {
      meta: [{ vmid: 'description', name: 'description', content: 'SCHODY' }],
      titleTemplate:
        '%s | Zakład stolarski Radosław Borecki - schody, drzwi, okna',
      title: 'Strona główna'
    };
  },
  components: {
    Header,
    Footer,
    Section,
    SectionCTA,
    CardContainer
  }
};
</script>