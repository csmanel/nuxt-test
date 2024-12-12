<template>
  <div class="bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-lg">
    <h1 class="text-xl font-bold text-gray-800">{{ title }}</h1>
    <p class="text-gray-600 mt-2">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Welcome to Vue.js with Tailwind',
    },
    description: {
      type: String,
      default: 'This is a simple container component styled with Tailwind CSS.',
    },
  },
};
</script>
