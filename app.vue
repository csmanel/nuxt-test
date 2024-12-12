<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Welcome to Nuxt.js',
    },
    description: {
      type: String,
      default: 'This is a simple container component in Nuxt.',
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
