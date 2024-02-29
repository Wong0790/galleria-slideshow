<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import { loadImages, paintings } from "@data/app-data";
import { useRoute, useRouter } from "vue-router";
import { useElementSize } from "@vueuse/core";
import FullSizeImage from "./FullSizeImage.vue";
import PictureItem from "./PictureItem.vue";
import SlideFooter from "./SlideFooter.vue";

const router = useRouter();
const currentRoute = useRoute();

const show = ref(false);
const imagesLoaded = ref(false);
const el = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);

const stopSlideshow = ref(false);

const { height } = useElementSize(title);
const { width } = useElementSize(el);

const item = computed(() =>
  paintings.find((x) => x.name === currentRoute.params.name)
);
const itemIndex = computed(() =>
  paintings.findIndex((x) => x.name === currentRoute.params.name)
);
const isWider = computed(() => width.value > 1349);
const isSmaller = computed(() => width.value < 656);

const hideScroll = () => (document.body.style.overflow = "hidden");
const showScroll = () => (document.body.style.overflow = "auto");

const changeSlide = (index: number) => {
  show.value = false;
  stopSlideshow.value = false;
  showScroll();
  if (itemIndex.value < 14 || index === 0) {
    const painting =
      index === 0
        ? paintings[itemIndex.value - 1]
        : paintings[itemIndex.value + 1];
    router.push({
      name: "Painting",
      params: { name: painting.name },
    });
  } else {
    router.push({
      name: "Home",
    });
  }
};

onMounted(async () => {
  if (!item.hasOwnProperty("images")) {
    await loadImages();
    imagesLoaded.value = true;
    localStorage.setItem("once", "1");
  } else {
    imagesLoaded.value = true;
  }
});
</script>

<template>
  <div class="main-container" style="padding-bottom: 0" v-if="imagesLoaded">
    <header>
      <LogoIcon />
      <button class="btn btn1" @click="stopSlideshow = true">
        Stop slideshow
      </button>
    </header>
    <section class="slide" ref="el">
      <div class="left-container">
        <div class="picture-container">
          <PictureItem
            :name="item?.name"
            :imageLarge="item?.images?.large"
            :imageSmall="item?.images?.small"
            @open-full-size-image="
              show = true;
              hideScroll();
            "
          />
          <div class="picture-title" :class="item?.style" ref="title">
            <h1>{{ item?.name }}</h1>
            <p class="subhead">{{ item?.artist }}</p>
          </div>
        </div>
        <img
          :src="item?.images?.artist"
          :alt="`${item?.artist} picture`"
          :width="isSmaller ? '64' : '128'"
          :height="isSmaller ? '64' : '128'"
          class="h-fit"
          :style="
            isSmaller
              ? 'margin-top: 0'
              : !isWider
              ? `margin-top: ${height}px`
              : 'margin-top: auto'
          "
        />
      </div>
      <div class="right-container">
        <div class="description-container">
          <div class="display-text">{{ item?.year }}</div>
          <p>{{ item?.description }}</p>
        </div>
        <a class="btn btn2" target="_blank" :href="item?.source"
          >Go to source</a
        >
      </div>
    </section>
  </div>
  <SlideFooter
    :name="item?.name"
    :artist="item?.artist"
    :stop="stopSlideshow"
    @change-slide="changeSlide"
  />
  <FullSizeImage
    :show="show"
    :image="item?.images?.gallery"
    @close-full-size-image="
      show = false;
      showScroll();
    "
  />
</template>
