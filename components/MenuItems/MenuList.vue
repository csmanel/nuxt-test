<script setup lang="ts">
import { ref } from 'vue';
import MenuItems from '~/components/MenuItems.vue';
import MenuCart from '~/components/MenuCart.vue';

const menuItems = ref([
  {
    group: 'Pour Over',
    options: ['Columbian', 'Ethiopian', 'Rwanda'],
  },
  {
    group: 'Espresso',
    options: ['Latte', 'Americano', 'Double Espresso'],
  },
  {
    group: 'Teas',
    options: ['Green Tea', 'Black Tea', 'Oolong'],
  },
]);

const cart = ref<string[]>([]);
const showModal = ref(false);

const addToCart = (item: string) => {
  if (!cart.value.includes(item)) {
    cart.value.push(item);
  }
};

const closeModal = () => {
  showModal.value = false;
};

const placeOrder = () => {
  showModal.value = true;
};
</script>

<template>
  <div class="menu">
    <MenuItems :menuItems="menuItems" :addToCart="addToCart" />
    <button
      class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      @click="placeOrder"
    >
      Order
    </button>
    <MenuCart :cart="cart" :showModal="showModal" :closeModal="closeModal" />
  </div>
</template>

<style scoped>
.menu {
  padding: 1rem;
}
</style>
