<template>
  <div class="q-gutter-lg flex justify-center q-py-md">
    <q-card
      v-for="item in devToolsItems"
      :key="item.name"
      class="shadow-1 bg-grey-1 cursor-pointer devTool-item"
      style="min-height: 100px; max-width: 130px; min-width: 130px"
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

const devToolsItems = ref([
  {
    name: "Github",
    link: require("../assets/github.svg"),
  },
  {
    name: "Git",
    link: require("../assets/git.svg"),
  },
  {
    name: "VSCode",
    link: require("../assets/vscode.svg"),
  },
  {
    name: "Vue Devtools",
    link: require("../assets/vueDevtools.png"),
  },
  {
    name: "Firebase",
    link: require("../assets/firebase.svg"),
  },
  {
    name: "Netlify",
    link: require("../assets/netlify.svg"),
  },
]);
</script>
  
  <style lang="scss">
.devTool-item {
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }

  div.q-card__section.q-card__section--vert {
    height: 80px;

    span {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
    }
  }
}
</style>