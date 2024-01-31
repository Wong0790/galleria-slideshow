<script lang="ts" setup>
import { ref, computed } from "vue";
import GalleryCard from "@components/GalleryCard.vue";
import { paintings } from "../data/app-data";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const paintingsCopy = ref([...paintings]);

const index = computed(() =>
  width.value <= 720 ? 2 : width.value <= 1440 ? 1 : 0
);

const arrangedPaintings = computed(() =>
  paintingsCopy.value.sort((a, b) => {
    const orderA = a.order[index.value];
    const orderB = b.order[index.value];
    return orderA < orderB ? -1 : 1;
  })
);
</script>

<template>
  <header>
    <LogoIcon />
    <button class="btn btn1">Start slideshow</button>
  </header>
  <section class="gallery">
    <GalleryCard
      v-for="(painting, index) in arrangedPaintings"
      :key="index"
      :src="painting.images.thumbnail"
      :alt="painting.name"
      :title="painting.name"
      :artist="painting.artist"
      @click="
        $router.push({ name: 'Painting', params: { name: painting.name } })
      "
    />
  </section>
</template>
