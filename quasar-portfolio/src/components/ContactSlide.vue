<template>
  <div>
    <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2" style="max-width: 450px; margin: 0 auto">
      <q-tab name="message" icon="mail" label="Message" />
      <q-tab name="contact" icon="phone" label="Contact" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
      <q-tab-panel name="message" style="max-width: 700px; margin: 0 auto">
        <form @submit.prevent="sendMessage" ref="form" class="q-gutter-xs q-mt-lg col-12 col-md-6" style="margin: 0 auto">
          <span class="text-h6">Send Me a Message</span>

          <q-input dense outlined rounded v-model="message.name" lazy-rules label="Name" name="name"
            :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

          <q-input dense outlined rounded v-model="message.email" type="email" lazy-rules label="Email" name="email"
            :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

          <q-input dense outlined rounded counter v-model="message.content" type="textarea" lazy-rules label="Message"
            name="message" :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

          <div class="text-center">
            <q-btn no-caps padding="8px 60px" label="Send" type="submit" color="primary" />
          </div>
        </form>
      </q-tab-panel>

      <q-tab-panel name="contact" style="max-width: 450px; margin: 0 auto">
        <q-list>
          <q-item dense>
            <q-item-section avatar>
              <q-icon name="mail" color="primary" size="md" />
            </q-item-section>

            <q-item-section>
              <span class="text-bold">lukasz.kulenski17@op.pl</span>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="phone" color="primary" size="md" />
            </q-item-section>

            <q-item-section>
              <span class="text-bold">+48 736 874 155</span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

    </q-tab-panels>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from 'emailjs-com';
import { useQuasar } from 'quasar'

const $q = useQuasar()

const tab = ref('message')

const message = ref({
  name: "",
  email: '',
  content: "",
});

const form = ref('')
const sendMessage = (e) => {

  emailjs.sendForm('service_nfhgwza', 'template_wowung7', form.value, '1tNJMT5x5voAu80Z3', {
    name: message.value.name,
    email: message.value.email,
    message: message.value.content,
  })
    .then((result) => {
      $q.notify({
        type: 'positive',
        message: 'Message sent.'
      })

    }, (error) => {
      $q.notify({
        type: 'negative',
        message: 'Error, try again later.'
      })
    });


  message.value = {
    name: '',
    content: '',
  }

};
</script>
