<template>
  <div>
    <img
      class=""
      v-bind:src="url"
      alt="Avatar profile image"
      aria-label="hide"
    />
  </div>
</template>

<script>
import userStore from "@/stores/user";

export default {
  name: "ProfileAvatar",
  props: {
    size: {
      type: Number,
      required: true
    },
    imageId: {
      type: String,
      required: false
    },
    uniqueId: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const baseUrl = "https://i.pravatar.cc";

    let url = "";

    if (props?.imageId) {
      url = `${baseUrl}/${props.size}?img=${props.imageId}`;
    } else if (this?.uniqueId) {
      url = `${baseUrl}/${props.size}?u=${props.uniqueId}`;
    } else {
      url = `${baseUrl}/${props.size}`;
    }

    return {
      baseUrl,
      userStore,
      url
    };
  }
};
</script>
