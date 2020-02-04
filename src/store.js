// products data.
import stairsData from '@/data/stairsData.json';
import windowsData from '@/data/windowsData.json';
import doorsData from '@/data/doorsData.json';
import anotherData from '@/data/anotherData.json';
import Vue from 'vue';

export const store = Vue.observable({
  schody: [...stairsData],
  okna: [...windowsData],
  drzwi: [...doorsData],
  inne: [...anotherData]
});

export const eventsHub = Vue.observable({
  isMobileMenuOpened: false,
  toggleMobileMenu() {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }
});
