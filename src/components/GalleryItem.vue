<template>
  <article class="gallery-item" :data-title="product">
    <img
      class="gallery-item__image"
      v-lazy="require(`@/assets/images/${this.productType}/${this.product}/main.jpg`)"
      :alt="`${this.product}-galleryImage`"
    />
  </article>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    productType: {
      type: String
    },
    product: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.gallery-item {
  position: relative;
  cursor: pointer;
  height: 20rem;
  transform: scale(1);
  will-change: transform;
  transition: 0.5s all;
  &__image {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    // for lazy loading aninmation
    opacity: 0;
    will-change: opacity;
    transition: 0.5s opacity;
  }
  &:hover {
    transform: scale(1.03);
  }
  &:hover::before {
    opacity: 0.3;
  }
  &::before {
    content: '';
    position: absolute;
    // not working with lazy loading properly.
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.14;
    box-shadow: 0 5px 5px 0 rgb(90, 90, 90);
    will-change: opacity;
    transition: 0.5s all;
  }
  &::after {
    content: attr(data-title);
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.46);
    will-change: transform;
    transition: 0.5s all;
  }
  // &__image {
  //   position: relative;
  //   height: 25rem;
  //   border: 1rem solid #fff;
  //   transform: scale(1);
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center;
  // }
}
</style>
