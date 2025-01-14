<script setup lang="ts">
const props = defineProps({
  menuItems: {
    type: Array as () => { group: string; options: string[] }[],
    required: true,
  },
  addToCart: {
    type: Function as () => (item: string) => void,
    required: true,
  },
});
</script>

<template>
  <div>
    <UForm>
      <div v-for="item in menuItems" :key="item.group">
        <UFormGroup :label="item.group" :name="item.group">
          <ul>
            <li
              v-for="option in item.options"
              :key="option"
              class="cursor-pointer hover:text-blue-500"
              @click="addToCart(option)"
            >
              {{ option }}
            </li>
          </ul>
        </UFormGroup>
      </div>
    </UForm>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
}
</style>
