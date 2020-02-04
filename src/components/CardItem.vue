<template>
  <article class="card">
    <div
      class="card__image"
      :data-title="productType"
      :style="{ backgroundImage: 'url(' + require(`@/assets/images/card-${this.productType}.jpg`) + ')' }"
    >&nbsp;</div>
    <div class="card__details">
      <!-- <ul>
        <li>Opis#1</li>
        <li>Opis#2</li>
        <li>Opis#3</li>
      </ul>-->
      <Button check isCentered isRouteAttached :to="productType" class="u-mt-3">Sprawdź!</Button>
      <!-- <Button :to="productType" check isCentered class="u-mt-3">Sprawdź!</Button> -->
    </div>
  </article>
</template>


<script>
import Button from '@/components/generic/Button';

export default {
  name: 'CardItem',
  components: {
    Button
  },
  props: {
    productType: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.card {
  position: relative;
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 30px #000;
    opacity: 0.12;
    transition: all 0.5s;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover::after {
    opacity: 0.28;
  }
  &__image {
    height: 35rem;
    background-size: cover;
    background-position: center;
    position: relative;
    &::after {
      content: attr(data-title);
      position: absolute;
      display: block;
      background-color: rgba(0, 0, 0, 0.2);
      top: 70%;
      font-weight: 600;
      font-size: 3.8rem;
      line-height: 1;
      color: #fff;
      text-transform: uppercase;
      padding: 1.5rem 6rem 1.5rem 3.5rem;
      clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
    }
  }
  &__details {
    padding-bottom: 2rem;
    ul {
      list-style-type: none;
      li {
        padding: 1.5rem 0 1.5rem 0;
        text-align: center;
        font-size: 2rem;
        color: #000;
        text-transform: uppercase;
        position: relative;
        &:not(:last-child):after {
          content: '';
          position: absolute;
          height: 1px;
          background-color: #000;
          width: 40%;
          bottom: 0%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
