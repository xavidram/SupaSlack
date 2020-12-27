<template>
  <div class="relative inline-block text-left">
    <div class="flex flex-col justify-center items-center">
      <button
        type="button"
        class="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        @click="dropdownToggle.isOpen = !dropdownToggle.isOpen"
      >
        <profile-avatar :size="18"></profile-avatar>
      </button>
    </div>
    <!-- Dropdown menu -->
    <div
      v-if="dropdownToggle.isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div class="py-1">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >Set yourself as <b>away</b></a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >Pause notifications</a
        >
      </div>
      <div class="py-1">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >Edit profile</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >View profile</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >Preferences</a
        >
      </div>
      <div class="py-1">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          >Sign out</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import ProfileAvatar from "../../ProfileAvatar.vue";
export default {
  components: { ProfileAvatar },
  name: "ProfileDropMenu",
  setup() {
    const dropdownToggle = reactive({
      isOpen: false,
    });

    return {
      dropdownToggle,
    };
  },
};
</script>
