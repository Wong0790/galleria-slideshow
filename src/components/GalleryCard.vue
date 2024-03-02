<script lang="ts" setup>
defineProps({
  src: String,
  alt: String,
  title: String,
  artist: String,
});

const loadImg = (url: string = "") => {
  return new URL(url, import.meta.url).href;
};
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
