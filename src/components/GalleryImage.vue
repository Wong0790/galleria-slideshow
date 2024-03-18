<script lang="ts" setup>
import { loadImg } from "@composables/app";

defineProps({
  src: String,
  alt: String,
  title: String,
  artist: String,
});
</script>

<template>
  <div class="card">
    <img :src="loadImg(src)" :alt="alt" />
    <div class="foreground">
      <div class="content-container">
        <h2>{{ title }}</h2>
        <small>{{ artist }}</small>
      </div>
    </div>
  </div>
</template>
