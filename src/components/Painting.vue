<script lang="ts" setup>
import { ref } from "vue";
import { paintings } from "../data/app-data";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
const item = ref(paintings.find((x) => x.name === currentRoute.params.name));
</script>

<template>
  <header>
    <LogoIcon />
    <button class="btn btn1">Stop slideshow</button>
  </header>
  <section class="painting">
    <div class="picture-container">
      <img
        :src="item?.images.large"
        alt="alt"
        loading="lazy"
        decoding="async"
        width="475"
        height="560"
      />
      <div class="picture-title">
        <h1>{{ item?.name }}</h1>
        <p class="subhead">{{ item?.artist.name }}</p>
      </div>
    </div>

    <div>{{ $route.params.name }}</div>
  </section>
</template>
