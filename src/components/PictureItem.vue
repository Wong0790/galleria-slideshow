<script lang="ts" setup>
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
      <source
        :srcset="imageSmall"
        media="(max-width: 720px)"
        width="327"
        height="280"
      />
      <img
        :src="imageLarge"
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
