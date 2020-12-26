<template>
  <div class="app-layout block h-screen">
    <!-- App Topbar -->
    <div class="w-full h-6 bg-gray-700"></div>
    <!-- App Content -->
    <div class="app-content grid grid-cols-12 gap-0">
      <!-- Sidenav -->
      <div class="bg-gray-800 col-span-2 h-full"></div>
      <!-- Content View -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLayout"
};
</script>
<style scoped>
.app-content {
  height: calc(100% - 24px);
}
</style>
