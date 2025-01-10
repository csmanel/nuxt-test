<script lang="ts" setup>
const items = [
  {
    label: 'menu',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    content: 'list of currently available coffees that can be picked up',
  },
];
</script>

<template>
  <!-- <UDropdown :items="[[{ label: 'Edit', shortcuts: ['E'] }]]" /> -->
  <UAccordion color="primary" :items="items" />
</template>
