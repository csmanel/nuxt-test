<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <BasicForm />
  </div>
  <NuxtPage />
</template>

<script>
import BasicForm from '@/components/BasicForm.vue';

export default {
  components: {
    BasicForm,
  },
};
</script>
