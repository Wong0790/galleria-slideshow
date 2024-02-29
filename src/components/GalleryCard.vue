<script lang="ts" setup>
defineProps({
  src: String,
  alt: String,
  title: String,
  artist: String,
});
</script>

<template>
  <div class="card">
    <img :src="src" :alt="alt" />
    <div class="foreground">
      <div class="content-container">
        <h2>{{ title }}</h2>
        <small>{{ artist }}</small>
      </div>
    </div>
  </div>
</template>
