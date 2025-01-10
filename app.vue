<script setup lang="ts"></script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <h1>m a n e l</h1>
        <!-- <ModalTest /> -->
        <DropdownItems />

        <div class="flex justify-between">
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
