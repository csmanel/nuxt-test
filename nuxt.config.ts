// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
  ],
  compatibilityDate: '2024-12-17',
  colorMode: {
    classSuffix: '',
  },
});

// alternative syntax rather than using array
// modules: [
//   //...
//   '@vee-validate/nuxt',
// ],
// veeValidate: {
//   // disable or enable auto imports
//   autoImports: true,
//   // Use different names for components
//   componentNames: {
//     Form: 'VeeForm',
//     Field: 'VeeField',
//     FieldArray: 'VeeFieldArray',
//     ErrorMessage: 'VeeErrorMessage',
//   },
// },
