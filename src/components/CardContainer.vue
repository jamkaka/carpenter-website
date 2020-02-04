<template>
  <div class="card-container">
    <CardItem
      v-for="productType in Object.keys(store).splice(0,Object.keys(store).length-1)"
      :key="productType"
      :productType="productType"
    />
  </div>
</template>

<script>
import { store } from '@/store';
import CardItem from '@/components/CardItem';

export default {
  name: 'CardContainer',
  components: {
    CardItem
  },
  computed: {
    store() {
      return store;
    }
  }
};
</script>

<style lang="scss">
.card-container {
  display: grid;
  padding-top: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 5rem;
}
</style>
