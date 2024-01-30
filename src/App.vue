<script setup lang="ts">
import LogoIcon from "@icons/LogoIcon.vue";
import GalleryCard from "@components/GalleryCard.vue";
import { paintings } from "./data/app-data";
</script>

<template>
  <header>
    <LogoIcon />
    <button class="btn btn1">Start slideshow</button>
  </header>
  <section class="gallery">
    <GalleryCard
      v-for="(painting, index) in paintings"
      :key="index"
      :src="painting.images.thumbnail"
      :alt="painting.name"
      :title="painting.name"
      :artist="painting.artist.name"
    />
  </section>
</template>
