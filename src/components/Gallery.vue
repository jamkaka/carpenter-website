<template>
  <section class="section-gallery">
    <SectionHeader>
      <slot name="section__header"></slot>
    </SectionHeader>

    <div class="gallery gallery__container">
      <GalleryItem
        v-for="product in singleProductStore"
        @click.native="showModal(product.id, product.images)"
        :key="product.id"
        :productType="productType"
        :product="product.id"
      />
    </div>
  </section>
</template>

<script>
import { store } from '@/store';

import GalleryItem from '@/components/GalleryItem';
import SectionHeader from '@/components/layout/SectionHeader';
import Modal from '@/components/Modal';
// const Modal = () => import('@/components/Modal.vue');

export default {
  name: 'Gallery',
  components: {
    GalleryItem,
    SectionHeader
  },
  props: {
    productType: {
      type: String,
      required: true
    }
  },
  computed: {
    singleProductStore() {
      return store[this.productType];
    }
  },
  methods: {
    showModal(productId, productImages = null) {
      // vue-js-modal
      this.$modal.show(
        Modal,
        {
          productImages,
          productId,
          productType: this.productType,
          isGalleryShown: this.$attrs.isGalleryShown
        },
        {
          width: '70%',
          height: 'auto',
          adaptive: true,
          transition: 'pop-out',
          overlayTransition: 'fade-modal'
        }
      );
    }
  }
};
</script>

<style lang="scss">
.section {
  &-gallery {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
.gallery {
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 2.5rem;
  max-width: 100%;
}
</style>
