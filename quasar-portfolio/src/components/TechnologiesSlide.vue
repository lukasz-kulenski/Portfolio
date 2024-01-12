<template>
  <div class="q-gutter-lg flex justify-center q-py-md">
    <q-card v-for="item in technologiesItems" :key="item.name" @mouseover="item.showTooltip = true"
      @mouseout="item.showTooltip = CSSFontFeatureValuesRule" class="shadow-1 bg-grey-1 cursor-pointer technology-item"
      style="min-height: 100px; max-width: 130px; min-width: 130px;">
      <q-card-section class="flex items-center justify-center">
        <q-img width="70%" :src="`${item.icon}`" />
      </q-card-section>
      <q-card-section>
        <span class="text-h6">{{ item.name }}</span>
      </q-card-section>

      <div v-show="item.showTooltip" class="bg-blue text-body2 text-white absolute-bottom">
        docs: <a :href="item.tooltipLink" target="_blank" class="text-white">link</a>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const technologiesItems = ref([
  {
    name: "HTML5",
    icon: require("../assets/html5.svg"),
    showTooltip: false,
    tooltipLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: "CSS3",
    icon: require("../assets/css3.svg"),
    showTooltip: false,
    tooltipLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: "JS",
    icon: require("../assets/js.svg"),
    showTooltip: false,
    tooltipLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: "Vue3",
    icon: require("../assets/vue3.svg"),
    showTooltip: false,
    tooltipLink: 'https://vuejs.org/guide/introduction.html',
  },
  {
    name: "Quasar2",
    icon: require("../assets/quasar.svg"),
    showTooltip: false,
    tooltipLink: 'https://quasar.dev/docs/',
  },
]);
</script>

<style lang="scss">
.technology-item {
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}
</style>