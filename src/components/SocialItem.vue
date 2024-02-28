<script lang="ts" setup>
defineProps({
  url: String,
  aria: String,
});
</script>

<template>
  <div>
    <a :href="url" target="_blank" :aria-label="aria"><slot></slot></a>
  </div>
</template>
