<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Basic Form</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700"
          >Message</label
        >
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<!-- no ts -->
<!-- <script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
    },
  },
};
</script> -->

<!-- ts -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      } as FormData,
    };
  },
  methods: {
    handleSubmit(): void {
      console.log('Form submitted:', this.form);
    },
  },
});

interface FormData {
  name: string;
  email: string;
  message: string;
}
</script>
