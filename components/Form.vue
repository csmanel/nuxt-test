<!-- basic form -->

<!-- <script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template> -->

<!-- custom validation -->

<!-- <script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Required' });
  if (!state.password) errors.push({ path: 'password', message: 'Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  console.log(event.data);
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template> -->

<script setup lang="ts">
import type { Form, FormSubmitEvent } from '#ui/types';

interface Schema {
  email?: string;
  password?: string;
}

const state = reactive<Schema>({
  email: undefined,
  password: undefined,
});

const form = ref<Form<Schema>>();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  try {
    const response = await $fetch('...');
    // ...
  } catch (err) {
    if (err.statusCode === 422) {
      form.value!.setErrors(
        err.data.errors.map((err) => ({
          message: err.message,
          path: err.path,
        }))
      );
    }
  }
}
</script>

<template>
  <UForm ref="form" :state="state" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
