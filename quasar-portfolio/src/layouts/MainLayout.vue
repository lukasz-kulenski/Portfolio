<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
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
                <q-item-section avatar>
                  <q-icon :name="navItem.icon" color="primary" size="20px" />
                </q-item-section>

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
    icon: "home",
  },
  {
    name: "Projects",
    to: "projects",
    icon: "terminal",
  },
  {
    name: "Technologies",
    to: "technologies",
    icon: "memory",
  },
  {
    name: "Dev Tools",
    to: "devTools",
    icon: "build",
  },
  {
    name: "About",
    to: "about",
    icon: "person",
  },
  {
    name: "Contact",
    to: "contact",
    icon: "mail",
  },
]);
</script>
