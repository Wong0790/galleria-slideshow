<script lang="ts" setup>
import SocialItem from "@components/SocialItem.vue";
import { paintings, socials } from "@data/app-data";
import { useRouter } from "vue-router";
import GalleryImage from "./GalleryImage.vue";

const router = useRouter();

const startSlideShow = () => {
  router.push({ name: "Painting", params: { name: "Starry Night" } });
};

const handlePaintingClick = (name: string) => {
  router.push({ name: "Painting", params: { name } });
};
</script>

<template>
  <main class="main-container">
    <header>
      <LogoIcon />
      <button class="btn btn1" @click="startSlideShow">Start slideshow</button>
    </header>
    <section class="gallery mt-6 sm:mt-10">
      <GalleryImage
        v-for="(painting, index) in paintings"
        :key="index"
        :src="painting?.images?.thumbnail"
        :alt="painting.name"
        :title="painting.name"
        :artist="painting.artist"
        @click="handlePaintingClick(painting.name)"
      />
    </section>
    <footer>
      <div class="text-center mt-4">
        <ul class="social-icons">
          <li v-for="social in socials" :key="social.name" class="group">
            <SocialItem :url="social.url" :aria="social.aria">
              <component :is="social.name"></component
            ></SocialItem>
          </li>
        </ul>
        <span class="font-semibold text-black">
          &copy;2024 Anneris E. Wong Jorge
        </span>
      </div>
    </footer>
  </main>
</template>
