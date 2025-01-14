<script setup lang="ts">
import MenuList from './components/MenuList.vue';
</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <h1>m a n e l</h1>
      </template>
      <div>
        <ColorScheme>
          <USelect
            v-model="$colorMode.preference"
            :options="['system', 'light', 'dark']"
          />
        </ColorScheme>
        <DropdownItems />
        <!-- <ModalTest /> -->
        <!-- <Form /> -->
        <MenuList />
      </div>
    </UCard>
  </UContainer>
</template>
