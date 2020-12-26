<template>
  <div class="block h-screen">
    <div class="home-page flex flex-col items-center justify-center">
      <div class="inline-flex items-center mb-6">
        <!-- Logo -->
        <img
          src="../assets/logo.png"
          width="50"
          alt="SupaSlack Logo"
          aria-label="hidden"
        />
        <h2 class="text-2xl font-black">SupaSlack</h2>
      </div>
      <!-- Headers -->
      <h1 class="text-3xl font-extrabold">Sign in to SupaSlack</h1>
      <p class="mt-4 text-sm text-gray-800">
        Please log in below using an email address or one of the supported
        providers.
      </p>
      <!-- Login Providers -->
      <div class="w-full mt-6 space-y-2" style="max-width: 400px">
        <social-login-button :provider="'github'"></social-login-button>
        <social-login-button :provider="'google'"></social-login-button>
      </div>
      <!-- Divider -->
      <div class="w-full my-2" style="max-width: 400px">
        <horizontal-divider :text="'OR'"></horizontal-divider>
      </div>
      <!-- Login Form -->
      <div class="w-full" style="max-width: 400px">
        <login-form></login-form>
      </div>
      <!-- magic link login -->
      <div class="mt-4 w-full" style="max-width: 400px">
        <div class="w-full bg-gray-200 p-4 rounded-md">
          <p class="text-sm">
            We'll email you a maging code for a password-free sign in. Or you
            can
            <a href="/login-link" class="font-semibold text-blue-800"
              >sign in manually instead</a
            >.
          </p>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import SocialLoginButton from "../components/SocialLoginButton";
import HorizontalDivider from "@/components/HorizontalDivider";
import AppFooter from "@/components/AppFooter";
export default {
  name: "login",
  components: {
    LoginForm,
    SocialLoginButton,
    HorizontalDivider,
    AppFooter,
  },
};
</script>
<style scoped>
.home-page {
  height: calc(100% - 40px);
}
</style>
