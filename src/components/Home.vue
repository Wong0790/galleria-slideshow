<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import GalleryCard from "@components/GalleryCard.vue";
import SocialItem from "@components/SocialItem.vue";
import { loadImages, paintings, Painting, socials } from "@data/app-data";
import { useWindowSize } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();
const imagesLoaded = ref(false);
const { width } = useWindowSize();
const paintingsCopy = ref<Painting[]>([...paintings]);

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

const startSlideShow = () => {
  router.push({ name: "Painting", params: { name: "Starry Night" } });
};

const handlePaintingClick = (name: string) => {
  router.push({ name: "Painting", params: { name } });
};

onMounted(() => {
  loadImages();
  setTimeout(() => {
    imagesLoaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="main-container">
    <header>
      <LogoIcon />
      <button class="btn btn1" @click="startSlideShow">Start slideshow</button>
    </header>
    <section class="gallery" v-if="imagesLoaded">
      <GalleryCard
        v-for="(painting, index) in arrangedPaintings"
        :key="index"
        :src="painting?.images?.thumbnail"
        :alt="painting.name"
        :title="painting.name"
        :artist="painting.artist"
        @click="handlePaintingClick(painting.name)"
      />
    </section>
    <footer class="mt-4 lg:mt-10">
      <div class="text-center mt-16">
        <ul class="social-icons">
          <li v-for="social in socials" :key="social.name" class="group">
            <SocialItem :url="social.url" :aria="social.aria">
              <component :is="social.name"></component
            ></SocialItem>
          </li>
        </ul>
        <span class="font-semibold text-black">
          &copy;2024
          <a
            href="https://wong0790-dev-profolio.netlify.app"
            target="_blank"
            class="hover:text-dark-gray"
          >
            Anneris E. Wong Jorge
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>
