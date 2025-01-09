<script setup lang="ts"></script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <ModalTest />
        <DropdownItems />

        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
        <div>
          <Form />
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
