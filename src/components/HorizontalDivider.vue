<template>
  <div class="flex space-x-2 items-center">
    <div
      class="flex-1 h-0"
      style="border-top: 1px solid #ddd"
      v-if="location !== 'start'"
    ></div>
    <span class="" v-if="text" style="color: #868686">{{ text }}</span>
    <div
      class="flex-1 h-0"
      style="border-top: 1px solid #ddd"
      v-if="location !== 'end'"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HorizontalDivider",
  props: ["text", "location"],
  setup() {
    return {};
  },
};
</script>
