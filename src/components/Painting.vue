<script lang="ts" setup>
import { ref, computed } from "vue";
import { paintings } from "../data/app-data";
import { useRoute } from "vue-router";
import { useElementSize } from "@vueuse/core";
import FullSizeImage from "./FullSizeImage.vue";
import PictureItem from "./PictureItem.vue";
import SlideFooter from "./SlideFooter.vue";

const show = ref(false);
const currentRoute = useRoute();
const item = ref(paintings.find((x) => x.name === currentRoute.params.name));

const el = ref(null);
const title = ref(null);
const { height } = useElementSize(title);
const { width } = useElementSize(el);

const isWider = computed(() => width.value > 1349);
const isSmaller = computed(() => width.value < 656);

const hideScroll = () => (document.body.style.overflow = "hidden");
const showScroll = () => (document.body.style.overflow = "auto");
</script>

<template>
  <div class="main-container" style="padding-bottom: 0">
    <header>
      <LogoIcon />
      <button class="btn btn1">Stop slideshow</button>
    </header>
    <section class="slide" ref="el">
      <div class="left-container">
        <div class="picture-container">
          <PictureItem
            :imageLarge="item?.images?.large"
            :imageSmall="item?.images?.small"
            @openFullSizeImage="
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
          alt="alt"
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
  <SlideFooter :name="item?.name" :artist="item?.artist" />
  <FullSizeImage
    :show="show"
    :image="item?.images?.gallery"
    @closeFullSizeImage="
      show = false;
      showScroll();
    "
  />
</template>
