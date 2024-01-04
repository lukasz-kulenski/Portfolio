<template>
  <div class="q-mt-md text-center">
    <span class="text-h6">Send Me a Message</span>

    <q-form @submit="onSubmit" method="post" action="" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>

  </div>
</template>

<script setup>
</script>