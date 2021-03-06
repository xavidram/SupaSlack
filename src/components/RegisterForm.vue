<template>
  <div>
    <div class="p-4 bg-white shadow-md block">
      <form
        id="registerForm"
        class="block mx-auto text-left"
        style="max-width: 300px"
        @submit.prevent="onSubmit"
      >
        <section class="my-4 text-center">
          <h2 class="block w-full text-2xl font-semibold">Register</h2>
          <div class="text-red-600 my-2">{{ userStore.state.error }}</div>
        </section>
        <label class="block my-2">
          <span class="text-xs">Your Name</span>
          <input
            class="form-input mt-1 block w-full"
            v-model="model.name.$model"
            placeholder="John Doe"
          />
          <error-span :property="model.name"></error-span>
        </label>
        <label class="block my-2">
          <span class="text-xs">Email Address</span>
          <input
            class="form-input mt-1 block w-full"
            v-model="model.email.$model"
            placeholder="sampe@example.com"
          />
          <error-span :property="model.email"></error-span>
        </label>
        <label class="block my-2">
          <span class="text-xs">Password</span>
          <input
            type="password"
            class="form-input mt-1 block w-full"
            v-model="model.password.$model"
            placeholder="********"
          />
          <error-span :property="model.password"></error-span>
        </label>
        <label class="block my-2">
          <span class="text-xs">Confirm Password</span>
          <input
            type="password"
            class="form-input mt-1 block w-full"
            v-model="model.confirmPassword.$model"
            placeholder="********"
          />
          <error-span :property="model.confirmPassword"></error-span>
        </label>
        <button
          class="mt-4 bg-gray-700 w-full block text-white py-2 hover:bg-gray-800 text-sm"
          type="submit"
        >
          Register Now
        </button>
      </form>
      <div class="mt-8 text-center">
        <a href="/login" class="underline">Sign in instead?</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import userStore from "@/stores/user";
import { required, minLength, email } from "@vuelidate/validators";
import useVuelidate from '@vuelidate/core';
import ErrorSpan from '@/components/ErrorSpan';
export default {
  components: { ErrorSpan },
  name: "RegisterForm",
  computed: {
    ErrorSpan
  },
  setup() {
    const form = reactive({
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
    });
    const rules = {
      name: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required },
    };
    const model = useVuelidate(rules, form);
    const resetForm = () => {
      model.email.$reset();
      model.name.$reset();
      model.password.$reset();
      model.confirmPassword.$reset();
    };
    const onSubmit = async () => {
      model.value.$validate();
      if(!model.$invalid) {
        await userStore.register(form);
        resetForm();
      }
    };
    return {
      form,
      userStore,
      resetForm,
      onSubmit,
      model,
      rules
    };
  },
};
</script>
<style scoped>
.form-input {
  appearance: none;
  background-color: #fff;
  border-color: #d1d5db;
  border-width: 1px;
  border-radius: 0.275rem;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>