import Vue from 'vue';
import App from './App.vue';
import router from './router';

// * importing local fonts.
// ! one way. using the one specified in App.vue
// eslint-disable-next-line
// import styles from '@/assets/scss/fonts.scss'

// ! plugins
// * vue-js-modal
import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

// * vue-scroll-to
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

// * vue-meta
import VueMeta from 'vue-meta';
Vue.use(VueMeta);

// * vue-lazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.5,
  lazyComponent: true,
  attempt: 3,
  observer: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');
