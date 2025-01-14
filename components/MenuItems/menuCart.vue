<script setup lang="ts">
const props = defineProps({
  cart: {
    type: Array as () => string[],
    required: true,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
  closeModal: {
    type: Function as () => void,
    required: true,
  },
});
</script>

<template>
  <div
    v-if="showModal"
    class="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded shadow-lg w-1/2">
      <h2 class="text-xl font-bold mb-4">Your Order</h2>
      <ul>
        <li v-for="item in cart" :key="item">{{ item }}</li>
      </ul>
      <button
        class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        @click="closeModal"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  z-index: 1000;
}
</style>
