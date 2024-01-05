<template>
  <div class="q-gutter-lg flex justify-center q-py-md">
    <q-card
      v-for="item in technologiesItems"
      :key="item.name"
      class="shadow-1 bg-grey-1 cursor-pointer technology-item"
      style="min-height: 100px; max-width: 130px; min-width: 130px;"
    >
      <q-card-section class="flex items-center justify-center">
        <q-img width="70%" :src="`${item.link}`" />
      </q-card-section>
      <q-card-section>
        <span class="text-h6">{{ item.name }}</span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const technologiesItems = ref([
  {
    name: "HTML5",
    link: require("../assets/html5.svg"),
  },
  {
    name: "CSS3",
    link: require("../assets/css3.svg"),
  },
  {
    name: "JS",
    link: require("../assets/js.svg"),
  },
  {
    name: "Vue3",
    link: require("../assets/vue3.svg"),
  },
  {
    name: "Quasar2",
    link: require("../assets/quasar.svg"),
  },
]);
</script>

<style lang="scss">
.technology-item {
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
}
</style>