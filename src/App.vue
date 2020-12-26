<template>
  <div class="block h-screen">
    <router-view />
  </div>
</template>
<script>
import userStore from "@/stores/user";
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    onMounted(() => userStore.getUser());
    return { userStore };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
