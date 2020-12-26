<template>
  <div class="app-layout block h-screen">
    <!-- App Topbar -->
    <div class="w-full bg-gray-800" style="height: 28px;"></div>
    <!-- App Content -->
    <div class="app-content flex flex-row h-full">
      <!-- Sidenav -->
      <div class="bg-gray-700" style="width: 185px;"></div>
      <!-- Content View -->
      <div class="content flex-1">
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
  height: calc(100% - 28px);
}
</style>
