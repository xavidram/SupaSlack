<template>
  <div
    class="inline-flex items-center justify-between w-full bg-gray-800"
    style="height: 28px"
  >
    <!-- Left side -->
    <div class="flex flex-1"></div>
    <!-- Center -->
    <div class="inline-flex">
      <topbar-history-icon></topbar-history-icon>
      <topbar-search></topbar-search>
      <topbar-faq-icon></topbar-faq-icon>
    </div>
    <!-- Right Side -->
    <div class="flex">
      <profile-drop-menu></profile-drop-menu>
    </div>
  </div>
</template>

<script>
import ProfileDropMenu from "./components/ProfileDropMenu";
import TopbarFaqIcon from "./components/TopbarFaqIcon";
import TopbarHistoryIcon from "./components/TopbarHistoryIcon";
import TopbarSearch from "./components/TopbarSearch";

export default {
  name: "AppTopBar",
  components: {
    ProfileDropMenu,
    TopbarFaqIcon,
    TopbarHistoryIcon,
    TopbarSearch
  },
  setup() {
    return {};
  },
};
</script>
