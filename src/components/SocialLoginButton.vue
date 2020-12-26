<template>
  <div>
    <button
      v-if="provider === 'google'"
      class="bg-red-500 text-white p-2 w-full flex items-center justify-center rounded-sm"
      type="button"
      @click="loginWithProvider('google')"
    >
      <i class="bx bxl-google md:mr-4 lg:mr-4"></i>
      <span class="hidden md:block lg:block">Sign in with Google</span>
    </button>
    <button
      v-else-if="provider === 'github'"
      class="bg-gray-900 text-white p-2 rounded-full w-10 md:w-full lg:w-full md:flex lg:flex items-center md:justify-center lg:justify-center md:rounded-sm lg:rounded-sm"
      type="button"
      @click="loginWithProvider('github')"
    >
      <i class="bx bxl-github md:mr-4 lg:mr-4"></i>
      <span class="hidden md:block lg:block">Sign in with Github</span>
    </button>
  </div>
</template>

<script>
import userStore from "@/stores/user";
export default {
  name: "SocialLoginButton",
  props: ["provider"],
  setup() {
    const loginWithProvider = async (provider) => {
      const payload = { email: null, password: null, provider };
      userStore.login(payload);
    };
    return { userStore, loginWithProvider };
  }
};
</script>
