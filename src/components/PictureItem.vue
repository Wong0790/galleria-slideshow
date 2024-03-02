<script lang="ts" setup>
import { loadImg } from "@composables/app";
defineEmits(["openFullSizeImage"]);
defineProps({
  name: String,
  imageLarge: String,
  imageSmall: String,
});
</script>

<template>
  <div>
    <picture>
      <source :srcset="loadImg(imageSmall)" media="(max-width: 720px)" />
      <img
        :src="loadImg(imageLarge)"
        :alt="`${name} painting`"
        width="475"
        height="560"
      />
    </picture>
    <button class="btn btn3" @click="$emit('openFullSizeImage')">
      <img
        src="@assets/shared/icon-view-image.svg"
        alt="View image icon"
        role="img"
      />
      <span>View image</span>
    </button>
  </div>
</template>
