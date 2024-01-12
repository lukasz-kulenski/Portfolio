<template>
  <div class="q-pa-md">
    <q-carousel v-model="tab" animated swipeable infinite vertical height="90vh" transition-prev="slide-down"
      transition-next="slide-up" transition-duration="800" control-color="primary">

      <q-carousel-slide name="home" class="text-center ">
        <q-scroll-area style="width: 100%; height: 80vh">
          <HomeSlide />
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="projects" class="text-center">
        <div class="text-h4 q-mb-md">
          Projects
          <q-icon name="terminal" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-xs" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <ProjectsSlide />
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="technologies" class="text-center">
        <div class="text-h4 q-mb-md">
          Technologies
          <q-icon name="memory" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-xs" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <TechnologiesSlide />
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="tools" class="text-center">
        <div class="text-h4 q-mb-md">
          Tools
          <q-icon name="build" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-xs" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <ToolsSlide />
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="about" class="text-center">
        <div class="text-h4 q-mb-md">
          About
          <q-icon name="person" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-sm" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <AboutSlide />
        </q-scroll-area>
      </q-carousel-slide>

      <q-carousel-slide name="contact" class="text-center">
        <div class="text-h4 q-mb-md">
          Contact
          <q-icon name="mail" color="primary" size="37px" />
        </div>
        <q-scroll-area class="q-pa-xs" :thumb-style="thumbStyle" :bar-style="barStyle" style="width: 100%; height: 80vh">
          <ContactSlide />
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useNavBarStore } from "stores/navBarStore";
import HomeSlide from "../components/HomeSlide";
import ProjectsSlide from "../components/ProjectsSlide";
import TechnologiesSlide from "../components/TechnologiesSlide";
import ToolsSlide from "../components/ToolsSlide";
import AboutSlide from "../components/AboutSlide";
import ContactSlide from "../components/ContactSlide";
import { customScrollBar } from "src/composables/scrollBarStyles";

const { thumbStyle, barStyle } = customScrollBar().useCustomScrollBar();

const navBarStore = useNavBarStore();

const newTab = computed(() => {
  return navBarStore.currentNavItem;
});

watch(newTab, (newItem) => {
  tab.value = newItem
})

const tab = ref(newTab.value)

// const info = ref(null)


// const slidesArray = ['home', 'projects', 'technologies', 'tools', 'about', 'contact']
// const slideIndex = computed(() => {
//   let newTab = slidesArray.findIndex(el => el == tab.value)

//   if (newTab < 0) {
//     newTab = 5
//   }

//   if (newTab < 5 && newTab > 4) {
//     newTab = 0
//   }

//   return newTab
// })
// const handlePan = ({ evt, ...newInfo }) => {
//   info.value = newInfo

//  
//     let slideIndexChange = slideIndex.value

//     if (info.value.delta.y < 0 && info.value.distance.y > 200) {
//       slideIndexChange++

//       if (slideIndexChange > 5) {
//         slideIndexChange = 0
//       }

//       navBarStore.currentNavItem = slidesArray[slideIndexChange]
//     }

//     if (info.value.delta.y > 0 && info.value.distance.y > 200) {
//       slideIndexChange--

//       if (slideIndexChange <= 0) {
//         slideIndexChange = 5
//       }

//       navBarStore.currentNavItem = slidesArray[slideIndexChange]
//     }

//   

// }
</script>
