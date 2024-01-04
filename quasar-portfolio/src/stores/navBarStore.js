import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useNavBarStore = defineStore('navBarStore', () => {
  const currentNavItem = ref('home')

  return {
    currentNavItem
  }
});
