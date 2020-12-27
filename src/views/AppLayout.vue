<template>
  <div class="app-layout block h-screen">
    <!-- App Topbar -->
    <app-top-bar></app-top-bar>
    <!-- App Content -->
    <div class="app-content flex flex-row h-full">
      <!-- Sidenav -->
      <div class="bg-gray-700" style="width: 185px"></div>
      <!-- Content View -->
      <div class="content flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppTopBar from "../components/AppTopBar/index.vue";

export default {
  name: "AppLayout",
  components: { AppTopBar },
};
</script>
<style scoped>
.app-content {
  height: calc(100% - 28px);
}
</style>
