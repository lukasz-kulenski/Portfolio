<template>
  <div class="row justify-center">
    <q-form
      @submit="sendMessage"
      @keyup.enter="sendMessage"
      class="q-gutter-xs q-mt-lg col-12 col-md-6"
      style="margin: 0 auto"
    >
      <span class="text-h6">Send Me a Message</span>
      <q-input
        dense
        outlined
        rounded
        v-model="message.name"
        lazy-rules
        label="Your name *"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        dense
        outlined
        rounded
        autogrow
        counter
        v-model="message.content"
        lazy-rules
        label="Your message *"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <div class="text-center">
        <q-btn
          no-caps
          padding="8px 60px"
          label="Send"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref({
  name: "",
  content: "",
});

const sendMessage = () => {};
</script>