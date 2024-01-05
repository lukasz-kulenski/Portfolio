<template>
  <div>
    <q-carousel
      v-model="project"
      transition-prev="slide-left"
      transition-next="slide-right"
      transition-duration="600"
      swipeable
      animated
      control-color="primary"
      padding
      arrows
      infinite
      height="450px"
      class="text-black"
    >
      <q-carousel-slide
        v-for="project in projectsItems"
        :key="project.title"
        :name="project.name"
        class="column no-wrap flex-center"
      >
        <q-card flat bordered class="my-card" style="min-width: 240px">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6 text-left">{{ project.title }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div>
              {{ project.working }}
            </div>
          </q-card-section>

          <q-card-section>
            <div>
              {{ project.plans ? project.plans : "" }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="row">
            <div class="text-left q-gutter-sm col-6">
              <q-img width="40%" src="../assets/github.svg" />
              <q-img width="40%" src="../assets/netlify.svg" />
            </div>
            <div class="text-right col-6">
              <span class="">{{
                project.completed
                  ? "project completed"
                  : "project in developmenet"
              }}</span>
            </div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>

    <q-img width="50%" src="../assets/project.svg" style="margin: 0 auto" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const project = ref("justEat");

const projectsItems = ref([
  {
    title: "Just Eat",
    name: 'justEat',
    completed: true,
    githubLink: "link to github",
    netlifyLink: "link to netlify",
    working: "działa tak tak i tak działa tak tak i tak działa tak tak i tak działa tak tak i tak działa tak tak i tak",
  },
  {
    title: "Just Chat",
    name: 'justChat',
    completed: false,
    githubLink: "link to github",
    netlifyLink: "link to netlify",
    working: "działa tak tak i tak działa tak tak i tak działa tak tak i tak działa tak tak i tak działa tak tak i tak działa tak tak i tak",
    plans: "plany takie takie i takie plany takie takie i taki plany takie takie i taki plany takie takie i taki plany takie takie i taki plany takie takie i taki plany takie takie i taki",
  },
]);
</script>