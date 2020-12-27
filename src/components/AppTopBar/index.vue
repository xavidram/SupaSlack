<template>
  <div
    class="grid grid-cols-12 w-full bg-gray-800 px-2"
    style="height: 28px"
  >
    <!-- Left side -->
    <div class="flex col-span-3"></div>
    <!-- Center -->
    <div class="flex flex-grow justify-center items-center col-span-6">
      <topbar-history-icon></topbar-history-icon>
      <topbar-search></topbar-search>
      <topbar-faq-icon></topbar-faq-icon>
    </div>
    <!-- Right Side -->
    <div class="flex justify-end items-center col-span-3">
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
