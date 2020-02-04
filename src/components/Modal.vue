<template>
  <div class="modal-gallery">
    <div
      :style="!isGalleryShown && { 'height': '90vh' }"
      class="modal-gallery__main-image-container"
    >
      <transition name="fade--fast" mode="out-in" v-on:after-leave="updateCounter">
        <img
          :src="require(`@/assets/images/${productType}/${productId}/${shownImage}.jpg`)"
          :key="shownImage"
          :alt="shownImage"
          class="main-image"
        />
      </transition>

      <div
        v-if="isGalleryShown"
        :key="shownImage"
        class="image-count"
      >{{ `${shownImageCount} / ${productImages.length}` }}</div>
    </div>
    <div v-if="isGalleryShown" class="modal-gallery__images-container">
      <img
        v-for="productImage in productImages"
        :key="productImage"
        @click="shownImage = productImage"
        v-lazy="require(`@/assets/images/${productType}/${productId}/${productImage}.jpg`)"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    productId: {
      type: String,
      required: true
    },
    productImages: {
      // need to specify validator for array or null as null is not working with 'type' property.
      validator: prop => Array.isArray(prop) || prop === null,
      required: true
    },
    productType: {
      type: String,
      required: true
    },
    isGalleryShown: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      shownImage: 'main',
      shownImageCount: 1
    };
  },
  methods: {
    updateCounter() {
      this.shownImageCount = this.productImages.indexOf(this.shownImage) + 1;
    }
  }
};
</script>

<style lang="scss">
// ! overriding default modal background
.v--modal-overlay {
  background: transparent !important;
}
.v--modal-box {
  overflow: visible !important;
}

.modal-gallery {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // perfomance HIT!
    // box-shadow: 0 20px 150px rgba(0, 0, 0, 0.8);
    //
    // box-shadow: 0 5px 5px 0 rgb(90, 90, 90);
    z-index: -2000;
  }

  &__main-image-container {
    overflow: hidden;
    position: relative;
    height: 70vh;
  }
  &__images-container {
    flex: 0 0 auto;
    overflow-x: scroll;
    display: grid;
    grid-gap: 1.2rem;
    padding: 1.5rem 2.5rem;
    grid-auto-flow: column;
    grid-auto-columns: minmax(calc(150px + 8vmin), 1fr);
    grid-auto-rows: minmax(60px, calc(60px + 2vw));
    & > * {
      cursor: pointer;
      xdisplay: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      // box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    // caveat for horizontal scroll
    // description on
    // https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
    &::after {
      content: '';
      // difference between padding defined in images-container and its grid gap
      // for clarity, used calc()
      width: calc(2.5rem - 1.3rem);
    }
  }
}
.main-image {
  object-fit: contain;
  height: 100%;
  width: 100%;
  display: block;
}
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: calc(25px + 1vmin);
  height: calc(25px + 1vmin);
  border-radius: 50%;
  color: #fff;
  border: 2px solid currentColor;
  z-index: 5000;
  cursor: pointer;
  &:hover {
    &::before {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg) scale(1.1);
    }
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform-origin: center;
    width: 15px;
    height: 2px;
    background-color: currentColor;
    transition: 0.3s transform ease;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
.image-count {
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5000;
  font-size: calc(10px + 0.5vw);
  font-weight: 600;
  line-height: 1;
  padding: 0.4em 0.8em;
  color: #fff;
  border: 1.5px solid currentColor;
  border-radius: calc(4px + 0.2vw);
}
</style>
