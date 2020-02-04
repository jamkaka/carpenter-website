<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__row">
        <Brand />
        <Navigation :isButtonShown="false" />
      </div>
      <div class="divider"></div>
      <div class="footer__row">
        <div class="footer__contact">
          <p>Imię Nazwisko</p>
          <p>Nazwa firmy</p>
          <p>email@email.com</p>
          <p>12 123 45 67</p>
          <p>123 456 789</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Brand from '@/components/generic/Brand';
import Navigation from '@/components/layout/Navigation';

export default {
  name: 'Footer',
  components: {
    Brand,
    Navigation
  }
};
</script>

<style lang="scss">
.footer {
  padding: 2.5rem 0;
  background-color: #5c6773;
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__contact {
    font-weight: 200;
    line-height: 1.3;
    font-size: 1.6rem;
    color: #fff;
  }
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 1.2rem 0 1.2rem 0;
}
@media screen and (max-width: 750px) {
  .footer {
    &__row {
      justify-content: center;
    }
    &__contact {
      text-align: center;
    }
  }
}
</style>
