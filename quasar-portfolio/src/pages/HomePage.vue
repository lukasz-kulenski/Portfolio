<template>
  <div>
    <q-tab-panels v-model="tab" animated swipeable transition-prev="slide-down" transition-next="slide-up"
      transition-duration="800">
      <q-tab-panel name="home" class="text-center">
        <q-scroll-area style="width: 100%; height: 80vh">
          <HomeSlide />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="projects" class="text-center">
        <div class="text-h4 q-mb-md">
          Projects
          <q-icon name="terminal" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-md" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <ProjectsSlide />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="technologies" class="text-center">
        <div class="text-h4 q-mb-md">
          Technologies
          <q-icon name="memory" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-md" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <TechnologiesSlide />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="devTools" class="text-center">
        <div class="text-h4 q-mb-md">
          Dev Tools
          <q-icon name="build" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-md" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <DevToolsSlide />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="about" class="text-center">
        <div class="text-h4 q-mb-md">
          About
          <q-icon name="person" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-md" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <AboutSlide />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="contact" class="text-center">
        <div class="text-h4 q-mb-md">
          Contact
          <q-icon name="mail" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-md" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <ContactSlide />
        </q-scroll-area>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNavBarStore } from "stores/navBarStore";
import HomeSlide from "../components/HomeSlide";
import ProjectsSlide from "../components/ProjectsSlide";
import TechnologiesSlide from "../components/TechnologiesSlide";
import DevToolsSlide from "../components/DevToolsSlide";
import AboutSlide from "../components/AboutSlide";
import ContactSlide from "../components/ContactSlide";
import { customScrollBar } from "src/composables/scrollBarStyles";

const { thumbStyle, barStyle } = customScrollBar().useCustomScrollBar();

const navBarStore = useNavBarStore();

const tab = computed(() => {
  return navBarStore.currentNavItem;
});
</script>