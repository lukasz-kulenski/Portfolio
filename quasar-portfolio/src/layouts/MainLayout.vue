<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat denses color="white" icon="menu" class="lt-sm">
          <q-menu transition-show="scale" transition-hide="scale">
            <q-list>
              <q-item
                @click="navBarStore.currentNavItem = navItem.to"
                v-for="navItem in navLinks"
                :key="navItem.name"
                clickable
                v-ripple
                v-close-popup
              >
                <q-item-section>{{ navItem.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <div class="gt-xs full-width">
          <q-list dense class="flex justify-end">
            <q-item
              @click="navBarStore.currentNavItem = navItem.to"
              v-for="navItem in navLinks"
              :key="navItem.name"
              clickable
              v-ripple
              class="items-center text-bold"
            >
              {{ navItem.name }}
            </q-item>
          </q-list>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useNavBarStore } from "stores/navBarStore";

const navBarStore = useNavBarStore();

const navLinks = ref([
  {
    name: "Home",
    to: "home",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Technologies",
    to: "technologies",
  },
  {
    name: "Dev Tools",
    to: "devTools",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Contact",
    to: "contact",
  },
]);
</script>
