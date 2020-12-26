<template>
  <div>
    <div class="block">
      <form
        id="loginForm"
        class="block mx-auto"
        style="max-width: 500px"
        @submit.prevent="onSubmit"
      >
        <div class="error">
          <span class="text-md text-red-600 font-semibold">{{
            userStore.state.error
          }}</span>
        </div>
        <label class="block my-2">
          <input
            class="form-input mt-1 block w-full"
            v-model="model.email.$model"
            placeholder="sampe@example.com"
          />
          <error-span :property="model.email"></error-span>
        </label>
        <label class="block my-2">
          <input
            type="password"
            class="form-input mt-1 block w-full"
            v-model="model.password.$model"
            placeholder="********"
          />
          <error-span :property="model.password"></error-span>
        </label>
        <button
          class="mt-4 bg-gray-700 w-full block text-white py-2 hover:bg-gray-800"
          type="submit"
        >
          Sign In with Email
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import userStore from "@/stores/user";
import { required, minLength, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import ErrorSpan from "@/components/ErrorSpan";
export default {
  components: { ErrorSpan },
  name: "LoginForm",
  computed: {
    ErrorSpan,
  },
  setup() {
    const form = reactive({
      email: null,
      password: null,
      provider: null,
    });
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    };
    const model = useVuelidate(rules, form);
    const resetForm = () => {
      try {
        model.password.$reset();
        model.email.$reset();
      // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    const onSubmit = async () => {
      model.value.$validate();
      if (!model.$invalid) {
        await userStore.login(form);
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
  }
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
