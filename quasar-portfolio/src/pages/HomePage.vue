<template>
  <q-page class="q-pa-xs">
    <q-carousel
      v-model="slide"
      vertical
      swipeable
      animated
      transition-prev="slide-down"
      transition-next="slide-up"
      class="text"
      transition-duration="600"
      height="max-content"
    >
      <q-carousel-slide name="home" class="column no-wrap flex-center">
        <q-icon name="home" color="primary" size="40px" />
        <div class="q-mt-md text-center">
          <HomeSlide />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="projects" class="column no-wrap flex-center">
        <q-icon name="terminal" color="primary" size="40px" />
        <div class="q-mt-md text-center">
          <ProjectsSlide />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="technologies" class="column no-wrap flex-center">
        <q-icon name="memory" color="primary" size="40px" />
        <div class="q-mt-md text-center">
         <TechnologiesSlide />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="devTools" class="column no-wrap flex-center">
        <q-icon name="build" color="primary" size="40px" />
        <div class="q-mt-md text-center">
        <DevToolsSlide />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="about" class="column no-wrap flex-center">
        <q-icon name="person" color="primary" size="40px" />
        <div class="q-mt-md text-center">
         <AboutSlide />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="contact" class="column no-wrap flex-center">
        <q-icon name="mail" color="primary" size="40px" />
        <ContactSlide />
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useNavBarStore } from "stores/navBarStore";
import HomeSlide from '../components/HomeSlide'
import ProjectsSlide from '../components/ProjectsSlide'
import TechnologiesSlide from '../components/TechnologiesSlide'
import DevToolsSlide from '../components/DevToolsSlide'
import AboutSlide from '../components/AboutSlide'
import ContactSlide from '../components/ContactSlide'

const navBarStore = useNavBarStore();

const slide = computed(() => {
  return navBarStore.currentNavItem;
});
</script>