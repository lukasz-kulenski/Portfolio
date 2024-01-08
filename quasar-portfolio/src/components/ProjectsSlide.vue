<template>
  <div class="row">
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
      class="text-black col-11"
      style="margin: 0 auto"
    >
      <q-carousel-slide
        v-for="project in projectsItems"
        :key="project.title"
        :name="project.name"
        class="column no-wrap flex-center"
      >
        <q-card
          flat
          bordered
          class="my-card"
          style="min-width: 240px; max-width: 450px"
        >
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">{{ project.title }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <span class="text-h6 text-left">About the App</span>
            <div class="text-justify">
              {{ project.description }}
            </div>
          </q-card-section>

          <q-card-section>
            <span class="text-h6 text-left">Future Plans</span>
            <div class="text-justify">
              {{ project.futurePlans }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="row q-pa-sm">
            <div class="text-left q-gutter-sm flex">
              <a :href="project.githubLink" target="_blank">
                <q-img
                  src="../assets/github.svg"
                  style="width: 30px; height: 30px"
                />
              </a>

              <a :href="project.netlifyLink" target="_blank">
                <q-img
                  src="../assets/netlify.svg"
                  style="width: 30px; height: 30px"
                />
              </a>
            </div>

            <div>
              <span class="absolute-bottom-right q-pa-sm">{{
                project.completed
                  ? "project completed"
                  : "project in development"
              }}</span>
            </div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const project = ref("justEat");

const projectsItems = ref([
  {
    title: "JustEat",
    name: "justEat",
    completed: true,
    githubLink: "https://github.com/Azgeda-debug/JustEat",
    netlifyLink: "https://just-eat-azgeda.netlify.app/",
    description: `This is a simple app designed to calculate daily macronutrients. I created the app to make tracking my daily macronutrients easier.
      While there are many similar apps on the market, none of them met my specific requirements. Therefore, I developed my own application that allows users to personalize it according to their individual preferences.
      The app is user-friendly, and in case someone encounters difficulties, they can refer to the instructions provided in the 'App Info' section.
      Users have the option to search for a product in the existing product database or add their own products to a personalized database (my preferred method).`,
    futurePlans: `As of now, the project is completed. However, I may consider adding more features in the future`,
  },
  {
    title: "JustChat",
    name: "justChat",
    completed: false,
    githubLink: "https://github.com/azgeda-debug/JustChatAzgeda",
    netlifyLink: "https://justchat-azgeda.netlify.app/#/",
    description: `The JustChat app combines some features from Messenger and WhatsApp.
     The main purpose of this project was to create an application that showcases my skills.
     Currently, the app consists of two main pages. The first is the users' page, where you can search for a specific user or engage in conversations with users you already have. The second is the chat page, allowing you to customize your chat experience.
      Additionally, the app features a settings page where you can tailor the application to meet your specific requirements.`,
    futurePlans: `I definitely plan to add more interesting features to the app, such as additional settings, the option to send photos and files, notifications, and perhaps more themes.
      I am eager to further develop the JustChat app and simultaneously work on other applications.`,
  },
]);
</script>