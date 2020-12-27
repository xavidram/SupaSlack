<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <profile-avatar :size="18"></profile-avatar>
      </button>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from '../../ProfileAvatar.vue';
export default {
  components: { ProfileAvatar },
  name: "ProfileDropMenu",
};
</script>
