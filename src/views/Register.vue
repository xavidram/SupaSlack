<template>
  <div class="flex h-full flex-col items-center justify-center">
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";

export default {
  name: "Register",
  components: {
    RegisterForm
  }
};
</script>
